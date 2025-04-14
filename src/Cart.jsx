import React, { useEffect, useState } from "react";

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(items);
  }, []);

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>🛒 Your cart is empty</p>
      ) : (
        cart.map((item, index) => (
          <div key={index} style={{ borderBottom: "1px solid #ddd", padding: "10px 0" }}>
            <p>
              <strong>{item.name}</strong> - ₹{item.price}
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
