import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Display({ products }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  // Function to update search results based on the current search query
  const updateSearchResults = () => {
    const filteredProducts = products.filter(product =>
      product.product_name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(filteredProducts);
  };

  // Handle search query changes
  const handleSearchChange = event => {
    setSearchQuery(event.target.value);
    updateSearchResults();
  };

  return (
    <div className='maincontainer'>
      <div className='decor'>
        <div className='img'>
             <img src="https://images.pexels.com/photos/6868618/pexels-photo-6868618.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="deliver" />
        </div>
        <div className='text'>
          <h1>Welcome to Kikapu.com</h1>
          <br />
          <h1>Your Ultimate Shopping Destination!</h1> <br />
          <h2>You Swipe! We Wrap!</h2> <br />
          <p>Welcome to Kikapu.com, your go-to destination for an unparalleled shopping experience. </p> <br />
          <p>We bring you the finest selection of products from top brands, all in one place.</p> <br/>
          <p>Whether you're looking for fashion, electronics, home decor, or more, we've got you covered.</p> <br />
          <p>Our mission is to make online shopping effortless and enjoyable. <br/> 
          <br/> Explore our vast catalog, discover the latest trends, and find unbeatable deals.</p>
           
        </div>
      </div>
      <div className='Title'>
         <h2>OUR PRODUCTS</h2>
       </div>
      <div className='search-container'>
        <input
          type='text'
          placeholder="I'm looking for..."
          value={searchQuery}
          onChange={handleSearchChange}
          className='search-input'
        />
      </div>
       
      <div className="product-container">
        {(searchQuery.length > 0 ? searchResults : products).map((product, index) => (
          <div key={index} className="product">
            <Link to={`/product/${index}`}>
              <img
                src={product.product_full_image}
                alt={product.product_name}
                className="product-image"
              />
             <div className='product-details'>
             <p className="product-name">{product.product_name}</p>
              <p className="product-price">${product.unit_price}</p>
             </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Display;