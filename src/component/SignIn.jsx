import React, { useState } from 'react';
import car from "../image/car.jpeg";

const SignIn = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="flex bg-white rounded-lg shadow-md overflow-hidden max-w-3xl w-full">
        <div className="flex-1 flex items-center justify-center p-5">
          <img src={car} alt="illustration" className="w-full h-auto" />
        </div>
        <form className="flex-1 p-10 flex flex-col" onSubmit={handleSubmit}>
          <h2 className="text-2xl font-bold mb-5">Sign in</h2>

          <div className="flex items-center border-b border-gray-300 mb-5 pb-2 w-full">
          <span role="img" aria-label="user icon" className="mr-2">👤</span>
            <input type="email" placeholder="Email Address" className="flex-1 border-none outline-none text-lg" required />
          </div>

          <div className="flex items-center border-b border-gray-300 mb-5 pb-2 w-full">
          <span role="img" aria-label="lock icon" className="mr-2">🔒</span>
            <input type="password" placeholder="Password" className="flex-1 border-none outline-none text-lg" required />
          </div>

          <div className="flex items-center mb-5">
            <input type="checkbox" id="rememberMe" className="mr-2" />
            <label htmlFor="rememberMe" className="text-sm text-gray-600">Remember me</label>
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

          <div className="text-center text-blue-500 text-sm mb-5">
            <a href="/signup">Create an account</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
