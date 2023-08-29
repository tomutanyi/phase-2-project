
import './App.css';
import Display from './Display';
import { useState, useEffect } from 'react';

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
      <Display products={products}/>
    </div>
  );
}

export default App;
