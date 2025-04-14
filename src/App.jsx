// App.jsx

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login.jsx";
import Signup from "./Signup.jsx";
import Products from "./Products.jsx";
import Cart from "./Cart.jsx";
import ForgotPassword from "./ForgotPassword.jsx";  // Import new page

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) setUser(storedUser);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={user ? <Products user={user} /> : <Navigate to="/login" />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cart" element={user ? <Cart /> : <Navigate to="/login" />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />  {/* Forgot password route */}
      </Routes>
    </Router>
  );
};

export default App;
