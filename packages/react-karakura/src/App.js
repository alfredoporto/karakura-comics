import { useMemo, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Shoping from "./pages/Shoping";
import { shoppingContext } from "./hook/shopping";
import { userContext } from "./hook/user";

const App = () => {
  const [shopping, setShopping] = useState([]);
  const [user, setUser] = useState(null);
  const providerUser = useMemo(() => ({ user, setUser }), [user, setUser]);

  const addUser = (data) => {
    sessionStorage.setItem('token',data.token);
    setUser(data.user);
  };

  const addProducts = (item) => {
    setShopping((currentShopping) => [...currentShopping, item]);
  };

  const removeProducts = (item) => {
    setShopping((currentShopping) => currentShopping.filter((element) => element.id !== item.id));
  };

  return (
    <userContext.Provider value={{ user, addUser }}>
      <shoppingContext.Provider value={{ shopping, addProducts, removeProducts }}>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/products" element={<Home />} />
            <Route path="/shopping" element={<Shoping />} />
          </Routes>
        </Router>
      </shoppingContext.Provider>
    </userContext.Provider>
  );
};

export default App;
