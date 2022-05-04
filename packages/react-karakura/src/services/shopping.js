import axios from "axios";

const BASE_URL = 'http://localhost:3001/api';

const headers = {
    'Content-Type': 'application/json',
    'Authorization': sessionStorage.getItem('token')
}

export const getAllItems = async (data) => {
    let res = await axios.get(`${BASE_URL}/carts`, { headers });
    return res.data;
}

export const addItem = async (data) => {
    let res = await axios.post(`${BASE_URL}/carts`, data, { headers });
    return res.status;
}

export const deleteItem = async (params) => {
    const config = {headers, params};
    let res = await axios.delete(`${BASE_URL}/carts`, config);
    return res.status;
}

export const deleteAll = async () => {
    let res = await axios.delete(`${BASE_URL}/carts/delete`, { headers });
    return res.status;
}

export const payStripe = async (data) => {
    let res = await axios.post(`${BASE_URL}/checkout/payment`,data);
    console.log(res);
    return res;
}