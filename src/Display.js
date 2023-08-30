import { Link } from 'react-router-dom';
import './App.css'
function Display({ products }) {
    return (
        
      <div className="product-container">
        <h2>OUR PRODUCTS</h2>

        {products.map((product, index) => (
          <div key={index} className="product">
            <Link to={`/product/${index}`}>
              <img
              src={product.product_full_image}
              alt={product.product_name}
              className="product-image"
            />
            <p className="product-name">{product.product_name}</p>
            <p className="product-price">${product.unit_price}</p>
            {/* <Link to={`/product/${index}`}>View Details</Link> */}
            </Link>
          </div>
        ))}
      </div>
    );
  }
  
  export default Display;