import { useState } from "react";

function SignIn() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    // Assuming a simple implementation, you should perform input validation and error handling
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      const userData = JSON.parse(storedUserData);
      if (username === userData.username && password === userData.password) {
        alert('Sign in successful!');
      } else {
        alert('Invalid credentials.');
      }
    } else {
      alert('User not found. Please sign up.');
    }
  };

  return (
    <div>
      <h2>Sign In</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignIn}>Sign In</button>
    </div>
  );
}

export default SignIn;