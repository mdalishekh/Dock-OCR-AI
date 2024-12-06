import React, { useState } from 'react';
import image1 from '../image/forget-password.png';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const PasswordRecovery = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const notifySuccess = () =>
    toast('Good Job! Password recovery link sent successfully', {
      icon: '👏',
    });

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const apiUrl = process.env.REACT_APP_API_BASE_URL;
      const response = await fetch(`${apiUrl}/api/v1/gocab/auth/forget-password`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();

      if (response.ok) {
        notifySuccess();
        setTimeout(() => navigate('/emailverification'), 1500);
      } else {
        toast.error(result.message || 'Failed to send the password recovery link.');
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
          <p className="text-sm mb-4 md:mb-5">
            Enter your email, and we'll send you a link to reset your password.
          </p>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleInputChange}
              placeholder="Email"
              className="p-3 rounded-lg border border-gray-300 mb-4 w-full text-sm"
              required
            />
            <button
              type="submit"
              className={`bg-blue-500 w-full text-white py-2 px-4 rounded text-base transition-opacity duration-200 ${
                loading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              disabled={loading}
              aria-live="polite"
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <svg
                    className="animate-spin h-5 w-5 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8H4z"
                    />
                  </svg>
                  Verifying...
                </span>
              ) : (
                'Verify'
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
          <p className="text-sm text-gray-600">
            Ensure your personal information is always up to date.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PasswordRecovery;