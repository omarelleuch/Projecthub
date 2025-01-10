import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth'; // Update with your backend URL
// Register a new user
export const register = async (fullName: string, email: string, password: string) => {
  const response = await axios.post(`${API_URL}/register`, {
    fullName,
    email,
    password,
  });
  return response.data;
};

// Log in a user
export const login = async (email: string, password: string) => {
  const response = await axios.post(`${API_URL}/login`, { email, password });
  return response.data;
};