import React, { useState } from 'react';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!email) {
      setError('Email is required.');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    if (!password) {
      setError('Password is required.');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    setError(''); // Clear errors if validation passes
    alert('Login successful!');
  };

  const handleResetPassword = () => {
    setEmail('');
    setPassword('');
    setError('');
    alert('Please contact support to reset your password or check your email for further instructions.');
  };

  return (
    <div className="signup-form">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {/* Updated buttons section */}
        <div className="button-container">
          <button type="submit">Login</button>
          <button type="button" onClick={handleResetPassword}>
            Reset Password
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
