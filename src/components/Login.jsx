import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ Email: '', Password: '' });
  const [message, setMessage] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle login submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Login successful! Redirecting...');
        alert(data.user.Email)
        // ✅ Store user info in localStorage
        localStorage.setItem("First_name", data.user.First_name);
        localStorage.setItem("Last_name", data.user.Last_name);
        localStorage.setItem("Email", data.user.Email);

        setTimeout(() => {
          navigate('/');
        }, 2000);
      } else {
        setMessage(data.message || 'Invalid email or password.');
      }
    } catch (error) {
      setMessage('Server error, please try again later.');
      console.error('Error:', error);
    }
  };

  return (
    <div className="container min-h-screen min-w-screen flex justify-center items-center bg-gray-100">
      <form onSubmit={handleSubmit} className="max-w-sm w-full bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">Login</h2>

        <div className="mb-5">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Your email</label>
          <input
            type="email"
            id="email"
            name="Email"
            value={formData.Email}
            onChange={handleChange}
            className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-sm"
            required
          />
        </div>

        <div className="mb-5">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Your password</label>
          <input
            type="password"
            id="password"
            name="Password"
            value={formData.Password}
            onChange={handleChange}
            className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-sm"
            required
          />
        </div>

        <button type="submit" className="w-full py-2.5 bg-blue-700 text-white rounded-lg text-sm font-medium hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
          Submit
        </button>

        {message && <p className="mt-4 text-center text-sm text-red-500">{message}</p>}
      </form>
    </div>
  );
}

export default Login;
