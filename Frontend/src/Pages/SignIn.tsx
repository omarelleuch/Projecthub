import React, { useState } from 'react';
import './SignIn.css';
import { login } from '../services/api';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await login(email, password);
      console.log('Sign In Successful:', response);
      alert('Sign In Successful!');
      localStorage.setItem('token', response.token);
      window.location.href = '/dashboard';
    } catch (error) {
      // Type narrowing for the error object
      if (error instanceof Error) {
        console.error('Sign In Failed:', error.message);
        setError(error.message);
      } else if (typeof error === 'object' && error !== null && 'response' in error) {
        // Handle Axios errors
        const axiosError = error as { response?: { data?: { message?: string } } };
        console.error('Sign In Failed:', axiosError.response?.data?.message || 'Unknown error');
        setError(axiosError.response?.data?.message || 'Sign In Failed');
      } else {
        console.error('Sign In Failed:', 'Unknown error');
        setError('Sign In Failed');
      }
    }
  };

  return (
    <div className="signin-body">
      <div className="signin-container">
        <form className="signin-form" onSubmit={handleSubmit}>
          <div className="head">
            <span>Sign in</span>
            <p>Welcome back! Please enter your details.</p>
          </div>
          <div className="inputs">
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
          <button type="submit">Sign in</button>
        </form>
        <div className="signin-form-footer">
          <p>
            Don't have an account? <a href="/signup">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
}