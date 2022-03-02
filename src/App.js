import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Shoping from "./pages/Shoping";
import { shoppingContext } from "./hook/shopping";

const App = () => {
  const [shopping, setShopping] = useState([]);

  const addProducts = (item) => {
    console.log("entro", shopping);
    setShopping((currentShopping) => [...currentShopping, item]);
  };

  const removeProducts = (item) => {
    console.log("entro", shopping);
    setShopping((currentShopping) => currentShopping.filter((element) => element.id !== item.id ));
  };

  return (
    <shoppingContext.Provider value={{ shopping, addProducts, removeProducts }}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/shopping" element={<Shoping />} />
        </Routes>
      </Router>
    </shoppingContext.Provider>
  );
};

export default App;
