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
      <div className='Title'>
        <h2>OUR PRODUCTS</h2>
      </div>
      
      <div className='search-container'>
        <input
          type='text'
          placeholder='Search by name...'
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
              <p className="product-name">{product.product_name}</p>
              <p className="product-price">${product.unit_price}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Display;