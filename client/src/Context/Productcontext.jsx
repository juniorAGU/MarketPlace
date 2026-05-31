import { useState,useEffect, createContext } from "react";
import { getProducts,CreateProducts,UpdateProducts } from "../Services/ProductServices";

export const ProductContext = createContext();

function ProductcontextProvider({children}) {

    const [products, setProducts] = useState(null);
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

    const FetchProducts = async () => {

        setError(null);
        setLoading(true);
        try{

            const { product } = await getProducts();

            setProducts(product);

            return true

        }catch(err){
            console.log(err);
            setError(err.response.data.message || "Unable to fetch products")
        }finally{
            setLoading(false)
        }
    }


    const values = {
        Createone,
        Update,
        loading,
        error,
        FetchProducts,
        products

    }
    return(
        <ProductContext.Provider value={values}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductcontextProvider