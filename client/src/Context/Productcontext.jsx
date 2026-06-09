import { useState,useEffect, createContext } from "react";
import { getProducts,CreateProducts,UpdateProducts,getSpecifiedProduct,getmyProducts,DeleteProduct } from "../Services/ProductServices";
import { data } from "react-router-dom";

export const ProductContext = createContext();

function ProductcontextProvider({children}) {

    const [products, setProducts] = useState([]);
    const [myProducts, setMyProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalpage, setTotalpage] = useState(1);
    const [hasmore, setHasmore] = useState(true);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);


    const Createone = async (userdata) => {

        setError(null);

        try{

            const formdata = new FormData();
            formdata.append("name", userdata.name);
            formdata.append("description", userdata.description);
            formdata.append("category", userdata.category);
            formdata.append("condition", userdata.condition);
            formdata.append("price", userdata.price);
            formdata.append("quantity", userdata.quantity);
            formdata.append("shippingFee", userdata.shippingFee);
            formdata.append("deliveryTime", userdata.deliveryTime);

            if(userdata.images && userdata.images.length > 0){
                userdata.images.forEach(file => formdata.append("images", file))
            };

            const { products } = await CreateProducts(formdata);

            

            return true;

        }catch(err){
            console.log(err);
            setError(err.response.data.message || "Unable to create products")
            throw err
        }
    }

    const Update = async (userdata) => {

        setError(null)
        try{

            const formdata = new FormData();
                formdata.append("name", userdata.name);
                formdata.append("description", userdata.description);
                formdata.append("category", userdata.category);
                formdata.append("condition", userdata.condition);
                formdata.append("price", userdata.price);
                formdata.append("quantity", userdata.quantity);
                formdata.append("shippingFee", userdata.shippingFee);
                formdata.append("deliveryTime", userdata.deliveryTime);

                if(userdata.images && userdata.images.length > 0){
                userdata.images.forEach(file => formdata.append("images", file))
            };
            const { product } = await UpdateProducts(formdata);

            return true;

        }catch(err){
            console.log(err);
            setError(err.response.data.message || "could not update products");
            throw err
        }
    }

    const FetchProducts = async (category='') => {

        setError(null);
        setLoading(true);
        try{
            
            const { products } = await getProducts(category);

            setProducts(products);

            return true

        }catch(err){
            console.log(err);
            setError(err.response.data.message || "Unable to fetch products")
        }finally{
            setLoading(false)
        }
    }

    const FetchMyProducts = async (pageNum = 1) => {
        setError(null);
        setLoading(true);
        try {
            const response = await getmyProducts(pageNum);
            console.log("Raw response:", response);
            
            
            const products = response.products.data;
            const totalPage = response.products.totalpage;
            const page = response.products.page;

            if (pageNum === 1) {
                setMyProducts(products);
            } else {
                setMyProducts(prev => [...prev, ...products]);
            }
            setPage(page);
            setTotalpage(totalPage);
            setHasmore(page < totalPage);

        } catch (err) {
            console.log(err);
            setError(err?.response?.data?.message || "Unable to get your products");
            throw err;
        } finally {
            setLoading(false);
        }
    };

    const LoadMore = () => {
        if(hasmore && !loading){
            FetchMyProducts(page + 1)
        }
    }

    const SpecificProduct = async (id) => {
        setError(null);
        setLoading(true);
        try{

            const data = await getSpecifiedProduct(id);

            return data;


        }catch(err){
            console.log(err);
            throw err
        }
    }

    const DeletemyProduct = async (id) => {

        await DeleteProduct(id);

        setMyProducts(prev => prev.filter(product => product._id !== id))

        return true
    }


    const values = {
        Createone,
        Update,
        loading,
        error,
        FetchProducts,
        products,
        SpecificProduct,
        myProducts,
        FetchMyProducts,
        page,
        LoadMore,
        totalpage,
        hasmore,
        DeletemyProduct
    }
    return(
        <ProductContext.Provider value={values}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductcontextProvider