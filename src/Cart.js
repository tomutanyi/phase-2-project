import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Cart = ({ inCart, onRemove }) => {
  const [totalCost, setTotalCost] = useState(0);
  const navigate = useNavigate();

  function handleCheckOut() {
    navigate("/checkout", { state: { totalCost: totalCost } });
  }

  useEffect(() => {
    calculateTotalCost();
  }, [inCart]);

  const calculateTotalCost = () => {
    const totalPrice = inCart.reduce(
      (accumulator, product) => accumulator + product.unit_price,
      0
    );
    setTotalCost(totalPrice);
  };

  return (
    <div className="cart-container">
      <div className="cart-summary">
        <p className="cart-total-cost">Total Cost: ${totalCost}</p>
        <button className="cart-checkout-btn" onClick={handleCheckOut}>
          CheckOut
        </button>
      </div>
      {inCart.map((product, index) => {
        return (
          <div className="cart-product" key={index}>
            <img
              src={product.product_full_image}
              alt={product.product_name}
              className="cart-product-image"
            />
            <div className="cart-product-details">
              <p className="cart-product-name">{product.product_name}</p>
              <p className="cart-product-price">${product.unit_price}</p>
              <p>Rank: {product.ranking}</p>
              <button onClick={() => onRemove(product)}>Remove</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
