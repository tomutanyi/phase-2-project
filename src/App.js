import './App.css';
import Display from './Display';
import ProductDetails from './ProductDetails';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import SignUp from './SignUp';
import SignIn from './SignIn';
import Landing from './Landing';
import NotFound from './NotFound';
import Cart from './Cart';
import Checkout from './Checkout';

function App() {
  const [products, setProducts] = useState([]);
  const [inCart, setInCart] = useState([]);

  useEffect(() => {
    try {
      fetch('http://ecommerce.muersolutions.com/api/v1/products', {
        method: 'GET',
        headers: {
          'Content-Security-Policy': 'upgrade-insecure-requests'
        }
      }) // Removed 'cors-anywhere' proxy
        .then(res => res.json())
        .then(data => setProducts(data))
        .catch(error => console.log(error));  // Handle fetch errors
    } catch (error) {
      console.log(error);
    }
  }, []);

  function addToCart(product) {
    setInCart([...inCart, product]);
    console.log(inCart);
  }

  function removeFromCart(productToRemove) {
    const updatedCart = inCart.filter(product => product !== productToRemove);
    setInCart(updatedCart);
  }

  return (
    <div className="App">
      <Routes>
        <Route element={<Landing/>}>
          <Route path="/" element={<Display products={products}/>}/>
          <Route path="/product/:index" element={<ProductDetails addToCart={addToCart}/>}/>
          <Route path="/signUp" element={<SignUp/>}/>
          <Route path="/signIn" element={<SignIn/>}/>
          <Route path='/cart' element={<Cart inCart={inCart} onRemove={removeFromCart}/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
        </Route>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
