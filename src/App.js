import React, { useEffect, useMemo, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
/*
import Products from './components/Products/Products';
import Navbar from './components/Navbar/Navbar';
*/
import { Products, Navbar, Cart } from './components';
import { commerce } from './services/commerce';
import { UserContext } from './UserContext';

{ /* ticket: implementar react router, llamar a la API de Commerce */ }

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [user, setUser] = useState(null);

  const providerUser = useMemo(() => ({ user, setUser }), [user, setUser]);

  const getProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  }
  { /* Ni bien se cargue el componente en el DOM ejecutara getProducts */ }
  useEffect(() => {
    getProducts();
    { /* Al pasarle un [] le digo a useEffect que solo quiero que lo ejecute al montar en el DOM, sino con cada update estaria pidiendo
         los productos de la API */}
    console.log(products);
  }, []);

  return (
    <UserContext.Provider value={providerUser}>
      <Router>
        <div>
          <Navbar />
          <Routes>

            <Route path="/" element={<Products />} />
            <Route path="/cart" element={< Cart />} />

          </Routes>
        </div>
      </Router>
    </UserContext.Provider >
  );
};

export default App;
