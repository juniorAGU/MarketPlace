import axios from "axios";

const API = axios.create({baseURL: "http://localhost:5000"});

API.defaults.withCredentials = true

export const createCheckout = async (userdata) => {

    const { data } = await API.post("/api/checkout",  userdata);

    return data
}