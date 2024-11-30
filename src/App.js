// // import React, { useEffect } from 'react';
// // import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
// // import { ToastContainer, toast } from 'react-toastify';
// // import 'react-toastify/dist/ReactToastify.css';
// // import './App.css';


// // import PasswordRecovery from './component/ForgetPassword';
// // import SignIn from './component/SignIn';
// // import Registration from './component/Registration';
// // import EmailVerification from './component/ConfirmationMail';

// // const App = () => {
// //   const location = useLocation();
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     const pathParts = location.pathname.split('/');
// //     if (pathParts[1] === 'verify' && pathParts[2] === 'signup' && pathParts[3] === 'token' && pathParts[4]) {
// //       const token = pathParts[4];
// //       verifyEmailToken(token);
// //     }
// //   }, [location]);

// //   const verifyEmailToken = async (token) => {
// //     try {
// //       // Create form data
// //       const formData = new FormData();
// //       formData.append('token', token);

// //       // Make GET request with body (using unconventional method, so Content-Type will be handled as text/plain)
// //       const response = await fetch(process.env.REACT_APP_Python_Verify_Token, {
// //         method: 'POST',
// //         body: formData,
// //         headers: {
// //           Accept: 'application/json',
// //         },
// //         redirect: 'follow',
// //       });

// //       if (!response.ok) {
// //         throw new Error('Failed to verify token');
// //       }

// //       const result = await response.json();

// //       // Handle success or failure
// //       if (result.status) {
// //         toast.success('Email verified successfully!', {
// //           autoClose: 3000,
// //           style: {
// //             backgroundColor: '#28a745',
// //             color: '#fff',
// //             fontSize: '16px',
// //             borderRadius: '8px',
// //             padding: '10px 20px',
// //             boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
// //           },
// //         });
// //         setTimeout(() => navigate('/login'), 2000);
// //       } else {
// //         toast.error(result.message || 'Verification failed!', {
// //           autoClose: 3000,
// //           style: {
// //             backgroundColor: '#dc3545',
// //             color: '#fff',
// //             fontSize: '16px',
// //             borderRadius: '8px',
// //             padding: '10px 20px',
// //             boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
// //           },
// //         });
// //       }
// //     } catch (error) {
// //       console.error('Verification Error:', error);
// //       toast.error('An error occurred while verifying the email.', {
// //         autoClose: 3000,
// //         style: {
// //           backgroundColor: '#ffc107',
// //           color: '#fff',
// //           fontSize: '16px',
// //           borderRadius: '8px',
// //           padding: '10px 20px',
// //           boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
// //         },
// //       });
// //     }
// //   };

// //   return (
// //     <div>
// //       <ToastContainer />
// //       <Routes>
// //         <Route path="/signup" element={<Registration />} />
// //         <Route path="/login" element={<SignIn />} />
// //         <Route path="/emailverification" element={<EmailVerification />} />
// //         <Route path="/verify/signup/token/:token" />
// //         <Route path="/" element={<strong>Home Page</strong>} />
// //         <Route path="/forget-password" element={<PasswordRecovery/>} />
// //       </Routes>
// //     </div>
// //   );
// // };

// // export default App;

// import React, { useEffect } from 'react';
// import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
// import { toast } from 'react-hot-toast';
// import 'tailwindcss/tailwind.css';

// import PasswordRecovery from './component/ForgetPassword';
// import SignIn from './component/SignIn';
// import Registration from './component/Registration';
// import EmailVerification from './component/ConfirmationMail';

// const App = () => {
//   const location = useLocation();
//   const navigate = useNavigate();

//   useEffect(() => {
//     const pathParts = location.pathname.split('/');
//     if (pathParts[1] === 'verify' && pathParts[2] === 'signup' && pathParts[3] === 'token' && pathParts[4]) {
//       const token = pathParts[4];
//       verifyEmailToken(token);
//     }
//   }, [location]);

//   const verifyEmailToken = async (token) => {
//     try {
//       // Create form data
//       const formData = new FormData();
//       formData.append('token', token);

//       // Make POST request
//       const response = await fetch(process.env.REACT_APP_VERIFY_TOKEN, {
//         method: 'POST',
//         body: formData,
//         headers: {
//           Accept: 'application/json',
//         },
//         redirect: 'follow',
//       });

//       // if (!response.ok) {
//       //   throw new Error('Failed to verify token');
//       // }

//       const result = await response.json();

//       // Handle success or failure
//       if (result.status) {
//         toast.success('Email verified successfully!', {
//           className: 'bg-green-500 text-white text-lg rounded-lg px-4 py-2 shadow-md',
//           duration: 3000,
//         });
//         console.log('Verification Success:', result.message || 'Email verified successfully!');
//         setTimeout(() => navigate('/login'), 2000);
//       } else {
//         toast.error(result.message || 'Verification failed!', {
//           className: 'bg-red-500 text-white text-lg rounded-lg px-4 py-2 shadow-md',
//           duration: 3000,
//         });
//         console.error('Verification Failed:', result.message || 'Verification failed!');
//       }
//     } catch (error) {
//       console.error('Verification Error:', error);
//       toast.error('An error occurred while verifying the email.', {
//         className: 'bg-yellow-500 text-white text-lg rounded-lg px-4 py-2 shadow-md',
//         duration: 3000,
//       });
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <div>
//       <Routes>
//         <Route path="/signup" element={<Registration />} />
//         <Route path="/login" element={<SignIn />} />
//         <Route path="/emailverification" element={<EmailVerification />} />
//         <Route path="/verify/signup/token/:token" />
//         <Route path="/" element={<strong>Home Page</strong>} />
//         <Route path="/forget-password" element={<PasswordRecovery />} />
//       </Routes>
//     </div>
//   );
// };

// export default App;


import React, { useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { toast, Toaster } from 'react-hot-toast'; // Import Toaster
import 'tailwindcss/tailwind.css';

import PasswordRecovery from './component/ForgetPassword';
import SignIn from './component/SignIn';
import Registration from './component/Registration';
import EmailVerification from './component/ConfirmationMail';

// Utility function for toast notifications
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
