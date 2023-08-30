
import './App.css';
import Display from './Display';
import ProductDetails from './ProductDetails';
import { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import SignUp from './SignUp';
import Landing from './Landing';
import NotFound from './NotFound';

function App() {
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


  return (
    <div className="App">
      
      <Routes>
        <Route element={<Landing/>}>
          <Route path="/" element={<Display products={products}/>}/>
          <Route path="/product/:index" element={<ProductDetails/>}/>
          <Route path="/signUp" element={<SignUp/>} />
        </Route>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
