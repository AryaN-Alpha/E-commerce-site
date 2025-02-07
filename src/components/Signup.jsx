import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
function Signin_Form() {
   const navigate = useNavigate();
  // State to store form values
  const [formData, setFormData] = useState({
    First_name: '',
    Last_name: '',
    Email: '',
    Password: '',
  });

  const [message, setMessage] = useState(''); // To display success or error messages

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents page reload on form submission

    try {
      const response = await fetch('server-backend-one.vercel.app/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        navigate(`/`);
      } else {
        setMessage(data.message || 'Signup failed');
      }
    } catch (error) {
      setMessage('Server error, please try again later.');
      console.error('Error:', error);
    }
  };

  return (
    <div className="container min-h-screen min-w-screen flex justify-center items-center bg-gray-100">
      <form onSubmit={handleSubmit} className="max-w-lg w-full bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">Sign Up</h2>

        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">
              First Name
            </label>
            <input
              type="text"
              id="first_name"
              name="First_name"
              value={formData.First_name}
              onChange={handleChange}
              className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-sm"
              placeholder="John"
              required
            />
          </div>
          <div>
            <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">
              Last Name
            </label>
            <input
              type="text"
              id="last_name"
              name="Last_name"
              value={formData.Last_name}
              onChange={handleChange}
              className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-sm"
              placeholder="Doe"
              required
            />
          </div>
        </div>

        <div className="mb-6">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="Email"
            value={formData.Email}
            onChange={handleChange}
            className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-sm"
            placeholder="john.doe@company.com"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="Password"
            value={formData.Password}
            onChange={handleChange}
            className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-sm"
            placeholder="•••••••••"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-2.5 bg-blue-700 text-white rounded-lg text-sm font-medium hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
        >
          Submit
        </button>

        {message && <p className="mt-4 text-center text-sm text-red-500">{message}</p>}
      </form>
    </div>
  );
}

export default Signin_Form;
