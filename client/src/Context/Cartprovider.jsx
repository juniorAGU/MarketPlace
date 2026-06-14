import { useState, useEffect, createContext } from "react";
import { createCart,getCart } from "../Services/CartService";

export const CartContext = createContext();
function Cartprovider({children}) {
    const [cart, setCart] =   useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    const FetchCart =  async () => {
        setError(null);
        setLoading(true)
        try{

            const { cart } = await getCart();

            setCart(cart);
            
        }catch(err){
            console.log(err);
            setError(err?.response?.data?.message || "unable to fetch  cart");

        }finally{
            setLoading(false);
        }
    }


    const AddToCart = async (productId, quantity) => {
        setError(null);
        try{

            const { cart } = await createCart(productId,quantity);

            setCart(cart);

        }catch(err){
            console.log(err);
            setError(err?.response?.data?.message || "unable to Add to cart")
            throw err
        }

    }



    const values = {
        AddToCart,
        FetchCart,
        cart,
        loading,
        error
    }
    return (
        <CartContext.Provider value={values}>
            {children}
        </CartContext.Provider>
    )
}

export default Cartprovider