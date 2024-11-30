import React, { useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { toast, Toaster } from 'react-hot-toast'; 

import 'tailwindcss/tailwind.css';

import PasswordRecovery from './component/ForgetPassword';
import SignIn from './component/SignIn';
import Registration from './component/Registration';
import EmailVerification from './component/ConfirmationMail';


const showToast = (message, type) => {
  const toastOptions = {
    success: {
      className: 'bg-green-500 text-white text-lg rounded-lg px-4 py-2 shadow-md',
      duration: 3000,
    },
    error: {
      className: 'bg-red-500 text-white text-lg rounded-lg px-4 py-2 shadow-md',
      duration: 3000,
    },
    info: {
      className: 'bg-yellow-500 text-white text-lg rounded-lg px-4 py-2 shadow-md',
      duration: 3000,
    },
  };

  const options = toastOptions[type] || toastOptions.info;
  toast(message, options);
};

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const pathParts = location.pathname.split('/');
    if (pathParts[1] === 'verify' && pathParts[2] === 'signup' && pathParts[3] === 'token' && pathParts[4]) {
      const token = pathParts[4];
      verifyEmailToken(token);
    }
  }, [location]);

  const verifyEmailToken = async (token) => {
    try {
      // Create form data
      const formData = new FormData();
      formData.append('token', token);

      // Make POST request
      const response = await fetch(process.env.REACT_APP_VERIFY_TOKEN, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
        redirect: 'follow',
      });

      

      const result = await response.json();

      // Handle success or failure
      if (result.status) {
        showToast('Email verified successfully!', 'success');
        setTimeout(() => navigate('/login'), 2000);
      } else {
        showToast(result.message || 'Verification failed!', 'error');
      }
    } catch (error) {
      console.error('Verification Error:', error);
      showToast('An error occurred while verifying the email.', 'info');
    }
  };

  return (
    <div>
      {/* Toaster component renders the toast notifications */}
      <Toaster position="top-center" reverseOrder={false} />
      
      <Routes>
        <Route path="/signup" element={<Registration />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/emailverification" element={<EmailVerification />} />
        <Route path="/verify/signup/token/:token" />
        <Route path="/" element={<strong>Home Page</strong>} />
        <Route path="/forget-password" element={<PasswordRecovery />} />
      </Routes>
    </div>
  );
};

export default App;
