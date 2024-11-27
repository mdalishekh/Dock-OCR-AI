
import React, { useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Registration from './component/Registration';
import SignIn from './component/SignIn';

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
      const response = await fetch(`${process.env.REACT_APP_Java_Verify_Token}${token}`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
        redirect: 'follow',
      });

      if (!response.ok) {
        throw new Error('Failed to verify token');
      }

      const result = await response.json();

      
      if (result.status === true) {
        toast.success('Email verified successfully!', {
          autoClose: 3000, 
          style: {
            backgroundColor: '#28a745', 
            color: '#fff', 
            fontSize: '16px',
            borderRadius: '8px',
            padding: '10px 20px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)', 
          },
        });
        setTimeout(() => navigate('/login'), 2000);
      } else {
        toast.error(result.message || 'Verification failed!', {
          autoClose: 3000,
          style: {
            backgroundColor: '#dc3545', 
            color: '#fff',
            fontSize: '16px',
            borderRadius: '8px',
            padding: '10px 20px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          },
        });
      }
    } catch (error) {
      console.error('Verification Error:', error);
      toast.error('An error occurred while verifying the email.', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
        style: {
          backgroundColor: '#ffc107',
          color: '#fff',
          fontSize: '16px',
          borderRadius: '8px',
          padding: '10px 20px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        },
      });
    }
  };

  return (
    <div>
      <ToastContainer />
      <Routes>
        <Route path="/signup" element={<Registration />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/verify/signup/token/:token" />
        <Route path="/" element={<strong>Home Page</strong>} />
      </Routes>
    </div>
  );
};

export default App;
