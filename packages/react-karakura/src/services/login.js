import axios from "axios";

const BASE_URL = 'http://localhost:3001/api';

export const register = async (data) => {
    let res = await axios.post(`${BASE_URL}/users/signup`,data);
    return res.status;
}

export const login = async (data) => {
    let res = await axios.post(`${BASE_URL}/users/signin`,data);
    return res.data;
}