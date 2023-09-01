import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";


const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      fetch("https://kikapu-server.onrender.com/orders", {
        method: "GET",
        headers: { "Content-Security-Policy": "upgrade-insecure-requests" },
      })
        .then((res) => res.json())
        .then((data) => setOrders(data))
        .catch((error) => setError(error))
        .finally(() => setIsLoading(false));
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }, []);

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">Error: {error.message}</div>;
  }

  return (
    <div className="orders-container">
      <h1 className="orders-title">Orders</h1>
      <ul className="orders-list">
        {orders.map((order) => (
          <li key={order.id} className="order-item">
            <p>Order Number: {order.id}</p>
            <p>Name: {order.name}</p>
            <p>Tel: {order.tel}</p>
            <p>Address: {order.address}</p>
            <p>Payment: {order.payment}</p>
            <p>Total Cost: {order.totalCost}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Orders;