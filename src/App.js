
import './App.css';
import Display from './Display';
import ProductDetails from './ProductDetails';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import SignUp from './SignUp';
import Landing from './Landing';
import NotFound from './NotFound';
import Cart from './Cart';

function App() {
  //Get to display products available
const[products, setProducts] = useState([])

useEffect(()=>{
try {
  fetch("http://ecommerce.muersolutions.com/api/v1/products")
  .then(res=>res.json())
  .then(data=>setProducts(data))
} catch (error) {
  console.log(error)
}
},[])

//function to add products to cart
    //set state
const[inCart,setInCart]=useState([])
    //function
function addToCart(product){
  setInCart([...inCart,product])
    console.log(inCart);
    //alert("Product added successfully")
}
  
function removeFromCart(productToRemove) {
  const updatedCart = inCart.filter((product) => product !== productToRemove);
  setInCart(updatedCart);
  
}
  return (
    <div className="App">
      <Routes>
        <Route element={<Landing/>}>
          <Route path="/" element={<Display products={products}/>}/>
          <Route path="/product/:index" element={<ProductDetails addToCart={addToCart}/>}/>
          <Route path="/signUp" element={<SignUp/>}/>
          <Route path='/cart' element={<Cart inCart={inCart} onRemove={removeFromCart}/>}/>
        </Route>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
