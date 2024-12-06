import React, { useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { toast, Toaster } from 'react-hot-toast'; 

import 'tailwindcss/tailwind.css';

import PasswordRecovery from './component/ForgetPassword';
import SignIn from './component/SignIn';
import Registration from './component/Registration';
import EmailVerification from './component/ConfirmationMail';
import NotFound from './component/Page-Not-Found';


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
 
      const formData = new FormData();
      formData.append('token', token);
      const apiUrl = process.env.REACT_APP_API_BASE_URL;
      const response = await fetch(`${apiUrl}/api/v1/gocab/auth/signup/verify/token`, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
        redirect: 'follow',
      });

      

      const result = await response.json();

      if (result.status) {
        showToast('Email verified successfully!', 'success');
        setTimeout(() => navigate('/login'), 2000);
      } else {
        showToast(result.message || 'Verification failed!', 'error');
        setTimeout(() => navigate('/not-found'), 2000);
      }
    } catch (error) {
      console.error('Verification Error:', error);
      showToast('An error occurred while verifying the email.', 'info');
    }
  };

  return (
    <div>
    
      <Toaster position="top-center" reverseOrder={false} />
      
      <Routes>
        <Route path="/signup" element={<Registration />} />
        <Route path="/login" element={<SignIn />} />

        <Route path="/emailverification" element={<EmailVerification />} />
        <Route path="/verify/signup/token/:token" />
        <Route path="*" element = {<NotFound />} />
        <Route path="/" element={<strong>Home Page</strong>} />
        <Route path="/forget-password" element={<PasswordRecovery />} />

      </Routes>
    </div>
  );
};

export default App;
