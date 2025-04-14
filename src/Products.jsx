import React, { useState } from "react";
import { Link } from "react-router-dom";

const dummyProducts = [
  { id: 1, name: "T-shirt", price: 500 },
  { id: 2, name: "Shoes", price: 1200 },
  { id: 3, name: "Backpack", price: 900 },
];

const Products = ({ user }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    const updatedCart = [...cart, item];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div>
      <h2>Welcome, {user.email}</h2>
      <Link to="/cart">🛒 Go to Cart</Link>
      <h3>Products</h3>
      {dummyProducts.map((item) => (
        <div key={item.id} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
          <p><strong>{item.name}</strong> - ₹{item.price}</p>
          <button onClick={() => addToCart(item)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Products;
