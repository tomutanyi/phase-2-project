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
