import { Link,Outlet } from "react-router-dom";
import {FaCartPlus} from 'react-icons/fa'
import {FaShopify} from 'react-icons/fa'
import {FaUserPlus} from 'react-icons/fa'
import {FaUserCheck} from 'react-icons/fa'
import './App.css'
const  Landing= () => {
    return ( 
        <div >
        <nav className="navbar">
        
            <Link to= "/">
            <button className="navLink">
            <FaShopify/>
            </button>
            <p>Products</p>
            </Link> <br />

            <Link to= "/signUp">
            <button className="navLink">
            <FaUserPlus />
            </button>
            <p>Sign Up</p>
            </Link> <br />

            <Link to= "/signIn">
            <button className="navLink">
            <FaUserCheck />
            </button>
            <p>Sign In</p>
            </Link> <br />

            <Link to="/cart">
            <button className="navLink">
                <FaCartPlus />
            </button>
            <p>Cart</p>
          </Link> <br/>
       

        
      </nav>
         <Outlet></Outlet>
        </div>
     );
}
 
export default Landing;