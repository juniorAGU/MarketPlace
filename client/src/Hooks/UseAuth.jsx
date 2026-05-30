import { useContext } from "react";
import { authContext } from "../Context/AuthContect";

function UseAuth() {

    const context = useContext(authContext);

    if(!context){
        throw new Error("UseAuth must be used between Authprovider");
    };

    return context
}

export default UseAuth