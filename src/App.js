import './App.css';
import Display from './Display';
import ProductDetails from './ProductDetails';
import { useState, useEffect } from 'react';
import { Routes, Route,useLocation, useNavigate } from 'react-router-dom';
import SignUp from './SignUp';
import SignIn from './SignIn';
import Landing from './Landing';
import NotFound from './NotFound';
import Cart from './Cart';
import Checkout from './Checkout';
import Orders from './Orders';


function App() {
  const[name, setName]=useState('')
  const navigate = useNavigate();
  //Get to display products available
const[products, setProducts] = useState([])
const location = useLocation();
  const checkOutProp = location.state ? location.state.totalCost : null;

  function handleNameChange(name){
    setName(name)
  }
  
useEffect(()=>{
try {
  fetch("http://ecommerce.muersolutions.com/api/v1/products",{
    method:"GET",
    headers:{"Content-Security-Policy":"upgrade-insecure-requests"}
  })
  .then(res=>res.json())
  .then(data=>setProducts(data))
} catch (error) {
  console.log(error)
}
},[])

const[inCart,setInCart]=useState([])

function addToCart(product){
  setInCart([...inCart,product])
    console.log(inCart);
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
          <Route path="/signIn" element={<SignIn/>}/>
          <Route path='/cart' element={<Cart inCart={inCart} onRemove={removeFromCart}/>}/>
          <Route path="/checkout" element={<Checkout onRemove={removeFromCart} totalCost={checkOutProp} navigate={navigate} onAddName={handleNameChange}/>}/>
          <Route path="/orders" element={<Orders name={name}/>}/>
        </Route>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      
    </div>
  );
}

export default App;