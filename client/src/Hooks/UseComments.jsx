import { useContext } from "react";
import { CommentContext } from "../Context/CommentsProvider";

function UseComments() {
    const context = useContext(CommentContext);

    if(!context){
        throw new Error ("context are expected to be used in providers")
    }
    return context
}

export default UseComments