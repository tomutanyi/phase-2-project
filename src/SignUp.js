import React, { useState } from 'react';

function SignUp() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    // Assuming a simple implementation, you should perform input validation and error handling
    if (username && password) {
      const userData = {
        username,
        password,
      };

      localStorage.setItem('userData', JSON.stringify(userData));
      setUsername('');
      setPassword('');
      alert('Sign up successful!');
    } else {
      alert('Please fill in both username and password.');
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
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
      <button onClick={handleSignUp}>Sign Up</button>
    </div>
  );
}

export default SignUp;