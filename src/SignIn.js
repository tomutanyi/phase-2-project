import { useState } from "react";
import './App.css'

const SignIn = () => {


    const[password,setPassword]=useState('')

    const[user_name,setUser_Name]=useState('')

    function handlePassword(e){
        setPassword(e.target.value)
    }
    
    function handleUser_Name(e){
        setUser_Name(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()

        let newObj={
            "user_name": user_name,
            "password": password
        }
      
        fetch("http://ecommerce.muersolutions.com/api/v1/user/login",{
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(newObj)
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
        .catch(error=>console.log(error))

        console.log(password);
        console.log(user_name);
        e.target.reset()
    }

    return (
        <div className="signup-container">
            <p><strong>Sign In</strong></p>
          <form onSubmit={handleSubmit}>
            <label className="signup-label">Username</label>
            <input
              className="signup-input"
              type="text"
              placeholder="Enter your username"
              value={user_name}
              onChange={handleUser_Name}
            />
    
            
            <label className="signup-label">Password:</label>
            <input
              className="signup-input"
              type="password"
              onChange={handlePassword}
              required
              value={password}
              placeholder="Enter your password"
            />
            <button className="signup-button">Sign In</button>
          </form>
        </div>
      );
    };
    
    
 
export default SignIn;