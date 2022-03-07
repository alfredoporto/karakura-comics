import { useMemo, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Shoping from "./pages/Shoping";
import { shoppingContext } from "./hook/shopping";
import { userContext } from "./hook/user";

const App = () => {
  const [shopping, setShopping] = useState([]);
  const [user, setUser] = useState(null);
  const providerUser = useMemo(() => ({ user, setUser }), [user, setUser]);

  const addProducts = (item) => {
    setShopping((currentShopping) => [...currentShopping, item]);
  };

  const removeProducts = (item) => {
    setShopping((currentShopping) => currentShopping.filter((element) => element.id !== item.id));
  };

  return (
    <userContext.Provider value={providerUser}>
      <shoppingContext.Provider value={{ shopping, addProducts, removeProducts }}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/shopping" element={<Shoping />} />
          </Routes>
        </Router>
      </shoppingContext.Provider>
    </userContext.Provider>
  );
};

export default App;
