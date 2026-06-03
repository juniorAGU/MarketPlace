import React from 'react';
import { SendComment,getComments,DeleteComment } from '../Services/CommentService';
import { useState,useEffect,createContext } from 'react';


export const CommentContext = createContext();

function CommentsProvider({children}) {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const PostComment = async (productId, text) => {
        setError(null);
        try{

            const { comments} = await SendComment(productId, text);
            console.log("comment and productid", text,productId)

            return true

        }catch(err){
            console.log(err);
            setError(err.response.data.message || "Can't post comment to backend");
            throw err
        }

    }
    
    const GetComments = async (productId) => {
        setError(null);
        setLoading(true)
        try{

            const { comments} = await getComments(productId);

            return comments

        }catch(err){
            console.log(err);
            setError(err.response.data.message || "Unable to fetch Comments")
            throw err
        }finally{
            setLoading(false);
        }

    } 
    const DELETE = async (productId) => {
        setError(null);
        try{

            const { comments} = await DeleteComment(productId);

            return true;
        }catch(err){
            console.log(err);
            setError(err.response.data.message || "Unable to Delete comment")
        }
    }



    const values = {
        PostComment,
        GetComments,
        DELETE,
        loading,
        error
    }
    return (
        <CommentContext.Provider value={values}>
            {children}
        </CommentContext.Provider>
    )
}

export default CommentsProvider