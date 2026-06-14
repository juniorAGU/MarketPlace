import { useContext } from "react";
import { CartContext } from "../Context/Cartprovider";


function UseCart() {
    const context = useContext(CartContext);

    if(!context){
        throw new Error ("it must be within a context")
    }

    return context
}

export default UseCart