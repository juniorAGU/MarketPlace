import axios from 'axios';

const API = axios.create({baseURL: "http://localhost:5000"});

API.defaults.withCredentials = true;

export const getProducts = async () => {

    const {data } = API.get("/api/products");

    return data;

}

export const CreateProducts = async (userdata) => {

    const { data } = await API.post("/api/products", userdata);

    return data;

}

export const UpdateProducts = async (userdata) => {

    const { data } = API.patch("/api/products", userdata);

    return data;
}