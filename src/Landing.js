import { Link, Outlet, useNavigate } from 'react-router-dom';
import { FaCartPlus, FaShopify, FaUserPlus, FaUserCheck, FaSignOutAlt } from 'react-icons/fa';
import './App.css';
import { useState } from 'react';
import Footer from './Footer';



const Landing = () => {
  const [loggedInUser, setLoggedInUser] = useState(JSON.parse(localStorage.getItem('userData')));

  const nagivate=useNavigate()

  const handleLogout = () => {
    setLoggedInUser(null);
    nagivate("/")
  };

  return (
    <div>
      <nav className="navbar">
          <h1>Kikapu.com</h1>
            <Link className="navLink" to="/">
              <FaShopify className='icon'/>
              <p>Products</p>
            </Link>
            <br />

            {!loggedInUser && (
              <>
                <Link className="navLink" to="/signUp">
                  <FaUserPlus className='icon'/>
                  <p>Sign Up</p>
                </Link>
                <br />
                <br />

                <Link className="navLink" to="/signIn">
                    <FaUserCheck className='icon'/>
                      <p>Sign In</p>
                </Link>
                <br />
              </>
            )}
            <Link className="navLink" to="/cart">
                <FaCartPlus className='icon' />
                <p>Cart</p>
            </Link>

            {loggedInUser && (
              <div className='navLink'>
                 <h3>Welcome, {loggedInUser.username}!</h3>
                 
                 <Link className='order' to="/orders">
                    <p>Orders</p>
                </Link>    
       
                <p onClick={handleLogout}> Log Out
              
                </p>
                <br />
              </div>
            )}
            <br />
      </nav>
      <Outlet></Outlet>
        <Footer/>
    </div>
  );
};

export default Landing;