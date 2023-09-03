import React, { useState } from 'react';
import './App.css'

const CheckoutForm = ({totalCost,onRemove, navigate, onAddName }) => {

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

  const handleSubmit = async (e) => {
    
    e.preventDefault();

    // Create a new order object from the form data
    const newOrder = {
      name: formData.name,
      tel: formData.tel,
      address: formData.address,
      payment: formData.payment,
      totalCost: formData.totalCost,
    };
    onAddName(newOrder.name)

    // a post request of the form to the orders server hosted on Render
    try {
      const response = await fetch('https://kikapu-server-iwt5.onrender.com/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newOrder),
      });

      if (response.ok) {
        console.log('Order placed successfully');
        alert('Order placed successfully')
        navigate('/orders')
      } else {
        console.error('Failed to place the order');
      }
    } catch (error) {
      console.error('Error placing the order:', error);
    }

  };

  return (
    <div className="checkout-form-container">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <label className="checkout-form-label"><br />
          Name:
          <br />
          <input placeholder='Write your Username' type="text" name="name" value={formData.name} onChange={handleChange} required />
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