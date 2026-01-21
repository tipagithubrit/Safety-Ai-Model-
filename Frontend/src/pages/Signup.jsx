import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/auth/signup', { username, email, password });
      navigate('/login');
    } catch (err) {
      setError(err.response?.data?.error || 'Signup failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-500 via-teal-600 to-blue-500 animate-gradient-x">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md transform transition-all duration-500 hover:scale-105 animate-fade-in">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800 animate-bounce">Sign Up</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleSignup} className="space-y-4">
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300 hover:border-green-400"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300 hover:border-green-400"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-medium">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300 hover:border-green-400"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Sign Up
          </button>
        </form>
        <p className="text-center mt-4 text-gray-600">
          Already have an account? <Link to="/login" className="text-green-600 hover:underline transition-all duration-300 hover:text-green-800">Login</Link>
        </p>
      </div>
    </div>
  );
}