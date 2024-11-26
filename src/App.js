import React, { useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Registration from './component/Registration';
import SignIn from './component/SignIn';
import EmailVerification from './component/ConfirmationMail';

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();


  useEffect(() => {
    const pathParts = location.pathname.split('/');
    if (pathParts[1] === 'verify' && pathParts[2] === 'token' && pathParts[3]) {
      const token = pathParts[3];
      verifyEmailToken(token);
    }
  }, [location]);

  const verifyEmailToken = async (token) => {
    try {
      console.log(`${process.env.REACT_APP_Python_Verify_Token}?token=${token}`);
      const response = await fetch(
        `${process.env.REACT_APP_Python_Verify_Token}?token=${token}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json', 
          },
          redirect: 'follow',
        }
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
        toast.error(result.message || 'Verification failed!');
      }
    } catch (error) {
      console.error('Verification Error:', error);
      toast.error('An error occurred while verifying the email.'
);
    }
  };  return (
    <div>
      <ToastContainer />
      <Routes>
        <Route path="/signup" element={<Registration />} />
        <Route path="/login" element={<SignIn />} />
        {/* <Route path="/" element={<EmailVerification />} /> */}
        <Route path='/' element={<strong>Home Page</strong>} />
      </Routes>
    </div>
  );
};

export default App;
