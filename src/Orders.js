import React, { useState, useEffect } from 'react';
import {useNavigate } from "react-router-dom";

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
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    
    <div>
      <h1>Orders</h1>
      <ul>
        {orders.map((order) => (
          <li key={order.id}>
            Order Number: {order.id}<br/> Name: {order.name}<br/>  Tel: {order.tel}<br/>  Address: {order.address}<br/>  Payment: {order.payment}<br/>  Total Cost: {order.totalCost}
          </li>
          
        ))}
        <br/> 
      </ul><br/> <br/> 
    </div>
  );
};

export default Orders;
