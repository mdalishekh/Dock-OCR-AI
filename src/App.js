import React from'react';
import './App.css';
import Component from './component/Registration';
import { Routes, Route } from 'react-router-dom';
import SignIn from './component/SignIn';
import EmailVerification from './component/ConfirmationMail';

function App() {
  return (
    <div>
      <Routes>
      <Route path="/signup" element={<Component />} />
      <Route path="/login" element={<SignIn />} />
      {/* <Route path="/" element={<strong>Home Page</strong>} /> */}
      <Route path="/" element={<EmailVerification/>} />
      </Routes>
    </div>
    
  );
}

export default App;
