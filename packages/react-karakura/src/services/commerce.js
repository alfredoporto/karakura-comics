import Commerce from '@chec/commerce.js';

const BASE_URL = "https://my-json-server.typicode.com/marayml/api_rest";

export const commerce = new Commerce(process.env.REACT_APP_CHEC_PUBLIC_KEY, true);

export const getProducts = async () =>
    fetch(`${BASE_URL}/productos`)
        .then((response) => response.json())
        .then((response) => response)
        .catch((error) => console.log(error));

