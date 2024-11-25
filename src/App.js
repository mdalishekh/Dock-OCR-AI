import React, { useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import toast styles
import './App.css';
import Registration from './component/Registration';
import SignIn from './component/SignIn';
import EmailVerification from './component/ConfirmationMail';

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const token = searchParams.get('token');
    if (location.pathname === '/auth/verifyToken' && token) {
      verifyEmailToken(token);
    }
  }, [location]);

  
  const verifyEmailToken = async (token) => {
    try {
      const response = await fetch(
        // REACT_APP_Python_Verify_Token
        `${process.env.REACT_APP_Python_Verify_Token}/verify/token?token=${token}`,
        // `http://localhost:9090/api/v1/gocab/auth/signup/verify/token?token=${token}`,
        { method: 'GET', redirect: 'follow' }
      );

      if (!response.ok) {
        throw new Error('Failed to verify token');
      }

      const result = await response.json();
      if (result.success) {
        toast.success('Email verified successfully!', {
          position: toast.POSITION.TOP_CENTER,
        });
        setTimeout(() => navigate('/login'), 2000);
      } else {
        toast.error(result.message || 'Verification failed!', {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    } catch (error) {
      console.error(error);
      toast.error('An error occurred while verifying the email.', 
      );
    }
  };

  return (
    <div>
      <ToastContainer /> 
      <Routes>
        <Route path="/signup" element={<Registration />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/" element={<EmailVerification />} />
      </Routes>
    </div>
  );
}

export default App;
