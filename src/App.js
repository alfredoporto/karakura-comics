import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
/*
import Products from './components/Products/Products';
import Navbar from './components/Navbar/Navbar';
*/
import { Products, Navbar, Cart } from './components';

{ /* ticket: implementar react router, llamar a la API de Commerce */ }
const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/cart" element={< Cart />} />
        </Routes>

      </div>
    </Router>
  );
};

export default App;
