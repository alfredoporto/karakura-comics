import axios from "axios";

const BASE_URL = 'http://localhost:3001/api';

export const getBooks = async () => {
    let res = await axios.get(`${BASE_URL}/books`);
    console.log(res);
    return res.data;
}

export const login = async (data) => {
    let res = await axios.post(`${BASE_URL}/users/signin`,data);
    return res.status;
}