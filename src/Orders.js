import React, { useState, useEffect } from 'react';



const Orders = ({name}) => {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      fetch("https://kikapu-server-iwt5.onrender.com/orders", {
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
  
//  console.log(orders.filter((order)=>order.name === name))
 

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">Error: {error.message}</div>;
  }

  return (

    // shows the orders placed arranged from oldest to newest in descending order
    <div className="orders-container">
      <h1 className="orders-title">Orders</h1>
      {/* Filters the orders according to the user currently logged in. */}
      {orders.filter((order)=>order.name === name).map((order)=>{
        return <div className="orders-container">
            <p>Order Number: {order.id}</p>
            <p>Username: {order.name}</p>
            <p>Tel: {order.tel}</p>
            <p>Address: {order.address}</p>
            <p>Payment: {order.payment}</p>
            <p>Total Cost: {order.totalCost}</p>
            </div>
      })}
        
    </div>
  );
};

export default Orders;