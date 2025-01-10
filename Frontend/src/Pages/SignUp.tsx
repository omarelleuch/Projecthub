import React, { useState } from 'react';
import './SignUp.css';
import { register } from '../services/api';

export default function SignUp() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await register(fullName, email, password);
      console.log('Sign Up Successful:', response);
      alert('Account created successfully!');
      window.location.href = '/signin';
    } catch (error) {
      if (error instanceof Error) {
        console.error('Sign Up Failed:', error.message);
        setError(error.message);
      } else if (typeof error === 'object' && error !== null && 'response' in error) {
        const axiosError = error as { response?: { data?: { message?: string } } };
        console.error('Sign Up Failed:', axiosError.response?.data?.message || 'Unknown error');
        setError(axiosError.response?.data?.message || 'Sign Up Failed');
      } else {
        console.error('Sign Up Failed:', 'Unknown error');
        setError('Sign Up Failed');
      }
    }
  };

  return (
    <div className="signup-body">
      <div className="signup-container">
        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="head">
            <span>Sign up</span>
            <p>Create a free account with your email.</p>
          </div>
          <div className="inputs">
            <input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit">Sign up</button>
        </form>
        <div className="signup-form-footer">
          <p>
            Have an account? <a href="/signin">Log in</a>
          </p>
        </div>
      </div>
    </div>
  );
}