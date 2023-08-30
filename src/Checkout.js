import React, { useState } from 'react';
import './App.css'

const CheckoutForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // You can add further logic here, like sending the data to a server
  };

  return (
    <div className="checkout-form-container">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input placeholder='Write your full name' type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Email:
          <input placeholder='E-mail' type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Address:
          <textarea placeholder='Address' name="address" value={formData.address} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Card Number:
          <input  type="text" name="cardNumber" value={formData.cardNumber} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Expiry Date:
          <input type="text" name="expiryDate" value={formData.expiryDate} onChange={handleChange} required />
        </label>
        <br />
        <label>
          CVV:
          <input type="text" name="cvv" value={formData.cvv} onChange={handleChange} required />
        </label>
        <br />
        <button className="checkout-form-button" type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default CheckoutForm;