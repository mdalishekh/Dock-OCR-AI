import React from 'react';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-700">
      <div className="text-6xl font-extrabold text-black">404</div>
      <div className="text-3xl font-bold text-blue-500 mt-4">OOPS! PAGE NOT BE FOUND</div>
      <p className="text-lg text-gray-600 mt-6 px-4 text-center max-w-md">
        Sorry, but the page you are looking for does not exist, has been removed, name changed, or is temporarily unavailable.
      </p>
      <button 
        className="mt-8 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-400 transition-colors"
        onClick={() => (window.location.href = '/')}

      >
        Back to homepage
      </button>
    </div>
  );
};

export default NotFound;
