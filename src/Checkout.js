import React, { useState } from 'react';
import './App.css'

const CheckoutForm = ({totalCost,onRemove}) => {

  const [formData, setFormData] = useState({
    name: '',
    tel: '',
    address: '',
    payment: '',
    totalCost: totalCost,
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
        <label className="checkout-form-label"><br />
          Name:
          <br />
          <input placeholder='Write your full name' type="text" name="name" value={formData.name} onChange={handleChange} required />
</label>
<label className="checkout-form-label">
  Phone Number:
  <br />
  <input placeholder='Phone Number' type="tel" name="tel" value={formData.tel} onChange={handleChange} required />
</label>
<label className="checkout-form-label">
        Address:
        <br />
        <select

          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        >
          <option value="" disabled selected hidden>Select a town</option>
          <option value="Nairobi">Nairobi</option>
          <option value="Mombasa">Mombasa</option>
          <option value="Kisumu">Kisumu</option>
          <option value="Eldoret">Eldoret</option>
          <option value="Kakamega">Kakamega</option>
          <option value="Garissa">Garissa</option>
          <option value="Embu">Embu</option>
          
        </select>
      </label>

      <label className="checkout-form-label">
        Payment Method
        <br />
        <select

          name="payment"
          value={formData.payment}
          onChange={handleChange}
          required
        >
          <option value="" disabled selected hidden>Select a Payment Method</option>
          <option value="Cash on Delivery">Cash on Delivery</option>
          <option value="M-pesa">M-pesa</option>
          
        </select>
      </label>

<label className="checkout-form-label">
  Total Cost (USD): 
  <br />
<input type="number" name="cost" value= {totalCost} onChange={handleChange} disabled  />
</label>
<br />
<button onClick={onRemove} className="checkout-form-button" type="submit">Place Order</button>

</form>
</div>

);
};

export default CheckoutForm;