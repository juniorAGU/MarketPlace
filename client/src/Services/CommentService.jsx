import axios from "axios";

const API = axios.create({baseURL: "http://localhost:5000" });

API.defaults.withCredentials = true;

export const SendComment = async (productId,text) => {

    const { data } = await API.post(`/api/comments`, {productId, text});

    return data;
};

export const getComments = async (productid) => {

    const { data } = await API.get(`/api/comments/${productid}`);

    return data;
}
export const DeleteComment = async(productId) => {

    const { data } = await API.delete(`/api/comments/${productId}`);

    return data;
}