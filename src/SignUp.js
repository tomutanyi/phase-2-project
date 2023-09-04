import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = () => {
    if (username && password && confirmPassword) {
      // this is to make sure a user confirms a password so as to be sure about it.
      if (password !== confirmPassword) {
        alert("Passwords don't match.");
        return;
      }

      const userData = {
        username,
        password,
      };

      localStorage.setItem('userData', JSON.stringify(userData));
      setUsername('');
      setPassword('');
      setConfirmPassword('');
      // if the user signs up successfully, the y get an alert and are navigated to the 
      // sign in page
      alert('Sign up successful!');
      
      navigate('/signIn');
    } else {
      // if some fields are empty, the user is instructed to fill them
      alert('Please fill in all fields.');
    }
  };

  return (
    <div className="sign-up-container">
      <h2 className="sign-up-heading">Sign Up</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="sign-up-input"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="sign-up-input"
      />
      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        className="sign-up-input"
      />
      <button onClick={handleSignUp} className="sign-up-button">
        Sign Up
      </button>
    </div>
  );
}

export default SignUp;

// This is the code that we used to POST the form data from the 
// sign-up component. We then changed it to use local storage as
// assigned. we copied it from the commit history so haven't yet tested it
// with the changes we made to the signin, and checkout components.


// import { useState } from "react";
// import './App.css';

// const SignUp = () => {
//     const [signUp, setSignUp] = useState([]);

//     const[email,setEmail]=useState('')
//     const[password,setPassword]=useState('')
//     const[first_name,setFirst_Name]=useState('')
//     const[last_name,setLast_Name]=useState('')

//     function handleEmail(e){
//         setEmail(e.target.value)
//     }

//     function handlePassword(e){
//         setPassword(e.target.value)
//     }

//     return ( 
//         <div>
//     function handleFirstName(e){
//         setFirst_Name(e.target.value)
//     }

//     function handleLastName(e){
//         setLast_Name(e.target.value)
//     }
//     function handleSubmit(e){
//         e.preventDefault()

//         let newObj={
//             "first_name": first_name,
//             "last_name": last_name,
//             "email": email,
//             "password": password
//         }

//         fetch("http://ecommerce.muersolutions.com/api/v1/user/signup",{
//             method: "POST",
//             headers: {"Content-Type":"application/json"},
//             body: JSON.stringify(newObj)
//         })
//         .then(res=>res.json())
//         .then(data=>console.log(data))
//         .catch(error=>console.log(error))

//         // console.log(password);
//         // console.log(email);
//         // console.log(first_name);
//         // console.log(last_name);
//         e.target.reset()
//     }

//    return(
//     <div>
//         <form onSubmit={handleSubmit} >
//             <label>First Name</label>
//             <input type="text" placeholder="Enter your first name" onChange={handleFirstName}/>
//             <label>Last Name</label>
//             <input type="text" placeholder="Enter your last name" onChange={handleLastName}/>
//             <label>Email:</label>
//             <input type="email" required placeholder="enter your email" requiredvalue={email} onChange={handleEmail} />
//             <label>Password:</label>
//             <input type="password" onChange={handlePassword} required value={password} placeholder="enter your password" />
//             <button>Sign Up</button>
//         </form>
//     </div>
//    )

//         </div>
//      );
// }

// export default SignUp;