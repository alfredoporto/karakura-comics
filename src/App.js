import React from 'react';
/*
import Products from './components/Products/Products';
import Navbar from './components/Navbar/Navbar';
*/
import { Products, Navbar, Cart } from './components';

{ /* ticket: implementar react router, llamar a la API de Commerce */ }
const App = () => {
  return (
    <div>
      <Navbar />
      <Products />
      <Cart />
    </div>);
};

export default App;
