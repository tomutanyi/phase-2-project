import { Link, Outlet } from 'react-router-dom';
import { FaCartPlus, FaShopify, FaUserPlus, FaUserCheck } from 'react-icons/fa';
import './App.css';
import { useState } from 'react';

const Landing = () => {
  const [loggedInUser, setLoggedInUser] = useState(JSON.parse(localStorage.getItem('userData')));

  const handleLogout = () => {
    localStorage.removeItem('userData');
    setLoggedInUser(null);
  };

  return (
    <div>
      <nav className="navbar">
        <Link to="/">
          <button className="navLink">
            <FaShopify />
          </button>
          <p>Products</p>
        </Link>
        <br />

        {!loggedInUser && (
          <>
            <Link to="/signUp">
              <button className="navLink">
                <FaUserPlus />
              </button>
              <p>Sign Up</p>
            </Link>
            <br />

            <Link to="/signIn">
              <button className="navLink">
                <FaUserCheck />
              </button>
              <p>Sign In</p>
            </Link>
            <br />
          </>
        )}

        {loggedInUser && (
          <>
            <p>Welcome, {loggedInUser.username}!</p>
            <button className="navLink" onClick={handleLogout}>
              Log Out
            </button>
            <br />
          </>
        )}

        <Link to="/cart">
          <button className="navLink">
            <FaCartPlus />
          </button>
          <p>Cart</p>
        </Link>
        <br />
      </nav>
      <Outlet></Outlet>
    </div>
  );
};

export default Landing;