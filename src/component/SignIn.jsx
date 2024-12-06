import React, { useState } from 'react';
import car from "../image/—Pngtree—illustration of fun mudik eid_9068973.png";
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    agreeToTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const requestData = {
      email: formData.email,
      password: formData.password,
    };

    try {
      const apiUrl = process.env.REACT_APP_API_BASE_URL;
      const response = await fetch(`${apiUrl}/api/v1/gocab/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });

      const result = await response.json();

      if (response.ok) {
        navigate('/');
        console.log('Server Response:', result);
        setFormData({ email: '', password: '', agreeToTerms: false });
      } else {
        alert(result.message || 'Signup failed');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred during signup.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-center min-h-screen  p-4">
      <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden max-w-4xl w-full">
        <div className="hidden md:flex flex-1 items-center justify-center p-5 ">
          <img src={car} alt="illustration" className="w-full h-auto object-contain" />
        </div>
        <form className="flex-1 p-6 md:p-10 flex flex-col" onSubmit={handleSubmit}>
          <h2 className="text-2xl font-bold mb-6 text-center md:text-left">Sign in</h2>

          <div className="flex items-center border-b border-gray-300 mb-5 pb-2 w-full">
            <span role="img" aria-label="user icon" className="mr-2">👤</span>
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address" 
              className="flex-1 border-none outline-none text-lg" 
              required 
            />
          </div>

          <div className="flex items-center border-b border-gray-300 mb-5 pb-2 w-full">
            <span role="img" aria-label="lock icon" className="mr-2">🔒</span>
            <input 
              type="password" 
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password" 
              className="flex-1 border-none outline-none text-lg" 
              required 
            />
          </div>

          <div className="flex items-center mb-5">
            <input 
              type="checkbox" 
              id="agreeToTerms"
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleChange}
              className="mr-2"
            />
            <label htmlFor="agreeToTerms" className="text-sm text-gray-600">Remember me</label>
          </div>

          <button 
            type="submit" 
            className={`bg-blue-500 text-white py-3 rounded text-lg font-semibold w-full mb-5 ${loading ? 'opacity-50' : ''}`} 
            disabled={loading}
          >
            {loading ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin h-5 w-5 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                </svg>
                Logging in...
              </span>
            ) : (
              'Log in'
            )}
          </button>

          <div className="text-center text-blue-500 text-sm">
            <a href="/signup">Create an account</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
