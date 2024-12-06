import React, { useState, useEffect } from 'react';
import image1 from '../image/forget-password.png';
import { useLocation, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { FiEye, FiEyeOff } from 'react-icons/fi';

const ConfirmPassword = () => {
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const[token,setToken]=useState('');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const pathParts = location.pathname.split('/');
    if (pathParts[1] === 'verify' && pathParts[2] === 'forget-password' && pathParts[3] === 'token' && pathParts[4]) {
      const token = pathParts[4];
      setToken(token);
    }
  }, [location]);

  const notifySuccess = () =>
    toast('Password changed successfully', {
      icon: '👏',
    });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'password') {
      setPassword(value);
    } else if (name === 'confirmPassword') {
      setConfirmPassword(value);
    }
  };

  const togglePasswordVisibility = (field) => {
    if (field === 'password') {
      setShowPassword(!showPassword);
    } else if (field === 'confirmPassword') {
      setShowConfirmPassword(!showConfirmPassword);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (password !== confirmPassword) {
      toast.error("Passwords don't match.");
      setLoading(false);
      return;
    }

    try {
      const apiUrl = process.env.REACT_APP_API_BASE_URL;
      const response = await fetch(`${apiUrl}/api/v1/gocab/auth/change-password`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ confirmPassword, token }),
      });

      const result = await response.json();

      if (response.ok) {
        notifySuccess();
        setTimeout(() => navigate('/emailverification'), 1500);
      } else {
        toast.error(result.message || 'Failed to change password.');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-[#f0f8ff]">
      <Toaster position="top-right" reverseOrder={false} />
      <div className="flex flex-col md:flex-row w-full max-w-4xl bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="flex-1 p-6 md:p-10 flex flex-col justify-center">
          <div className="flex items-center mb-4 md:mb-5">
            <h2 className="text-2xl md:text-3xl font-bold">GO</h2>
            <h2 className="text-2xl md:text-3xl font-bold text-[#53c22b] ml-2">CAB</h2>
          </div>
          <h3 className="text-lg md:text-xl font-semibold mb-3">Password Recovery</h3>
          <p className="text-sm mb-4 md:mb-5">Enter your new password below to reset your password.</p>
          <form onSubmit={handleSubmit}>
            <div className="relative mb-4">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={password}
                onChange={handleInputChange}
                placeholder="New Password"
                className="p-3 rounded-lg border border-gray-300 w-full text-sm"
                required
              />
              <button
                type="button"
                onClick={() => togglePasswordVisibility('password')}
                className="absolute right-0 mr-2 top-1/2 transform -translate-y-1/2"
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>

            <div className="relative mb-4">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                name="confirmPassword"
                value={confirmPassword}
                onChange={handleInputChange}
                placeholder="Confirm Password"
                className="p-3 rounded-lg border border-gray-300 w-full text-sm"
                required
              />
              <button
                type="button"
                onClick={() => togglePasswordVisibility('confirmPassword')}
                className="absolute right-0 mr-2 top-1/2 transform -translate-y-1/2"
              >
                {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>

            <button
              type="submit"
              className={`bg-blue-500 w-full text-white py-2 px-4 rounded text-base transition-opacity duration-200 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={loading}
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <svg
                    className="animate-spin h-5 w-5 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                  </svg>
                  Sending...
                </span>
              ) : (
                'Reset Password'
              )}
            </button>
          </form>
          <a href="/" className="mt-3 text-sm text-blue-500 text-center block">
            Home
          </a>
        </div>
        <div className="flex-1 p-6 md:p-10 bg-[#f7faff] flex flex-col items-center justify-center text-center">
          <img src={image1} alt="Password Recovery" className="w-3/4 md:w-full mb-5" />
          <h4 className="text-base md:text-lg font-semibold mb-3">Keep Your Data Secure!</h4>
          <p className="text-sm text-gray-600">Ensure your personal information is always up to date.</p>
        </div>
      </div>
    </div>
  );
};

export default ConfirmPassword;
