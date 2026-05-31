import { useState,useContext } from "react";
import { ProductContext } from "../Context/Productcontext";

function UseProducts() {
    const context = useContext(ProductContext);

    if(!context){
        throw new Error ("context must be used between providers");
    };

    return context 
}

export default UseProducts