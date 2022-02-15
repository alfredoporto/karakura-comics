import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
/*
import Products from './components/Products/Products';
import Navbar from './components/Navbar/Navbar';
*/
import { Products, Navbar, Cart } from "./components";
import Home from "./pages/Home";
import { commerce } from "./services/commerce";

{
  /* ticket: implementar react router, llamar a la API de Commerce */
}

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const getProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };
  {
    /* Ni bien se cargue el componente en el DOM ejecutara getProducts */
  }
  useEffect(() => {
    getProducts();
    {
      /* Al pasarle un [] le digo a useEffect que solo quiero que lo ejecute al montar en el DOM, sino con cada update estaria pidiendo
         los productos de la API */
    }
    console.log(products);
  }, []);

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
