import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
        title: "Signup Complete!",
        text: "Happy Dining!",
        imageUrl: "data:image/png;base64,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",
        imageWidth: 600,
        imageHeight: 300,
        imageAlt: "Custom image"
      });
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>SignUp</h2>
        <form onSubmit={handleSubmit}> 
        <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="name"
              id="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>  
          <div className="form-group">
            <label htmlFor="email">Sign Up</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <Link to="/"><button type="submit" className="login-button">
            Signup 
          </button></Link>
        </form>
        <p className="signup-link">
          Don't have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;