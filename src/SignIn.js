import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignIn() {

  const navigate = useNavigate();
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      const userData = JSON.parse(storedUserData);
      if (username === userData.username && password === userData.password) {
        alert('Sign in successful!');
         navigate("/")
         window.location.reload();
      } else {
        // if the details are incorrect, the user is instructed to try again
        alert('Invalid credentials. Try again.');
      }
    } else {
      alert('User not found. Please sign up.');
    }
  };
  return (
    <div className="sign-in-container">
      <h2>Sign In</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        className="sign-in-input"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        className="sign-in-input"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="sign-in-button" onClick={handleSignIn}>Sign In</button>
    </div>
  );
}
export default SignIn;