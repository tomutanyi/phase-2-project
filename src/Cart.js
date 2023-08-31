import React, { useState, useEffect } from "react";
import {useNavigate } from "react-router-dom";

const Cart = ({ inCart, onRemove }) => {
  const [totalCost, setTotalCost] = useState(0);
  const navigate=useNavigate()

   function handleCheckOut(){
    navigate("/checkout",{state:{totalCost:totalCost}})
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
    <div className="product-container">
      <div className="checkout-link">
         <p className="total-cost">Total Cost: ${totalCost}</p>
         <button onClick={handleCheckOut}>CheckOut</button>
         {/* <Link to="/checkout">Checkout</Link> */}
      </div>
      {inCart.map((product, index) => {
        return (
          <div className="product" key={index}>
            <img
              src={product.product_full_image}
              alt={product.product_name}
              className="product-image"
            />
            <p className="product-name">{product.product_name}</p>
            <p className="product-price">${product.unit_price}</p>
            <p>rank: {product.ranking}</p>
            <button onClick={() => onRemove(product)}>Remove</button>
          </div>
        );
      })}

</div>
  );
};

export default Cart;