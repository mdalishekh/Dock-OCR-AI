import React, { useState } from 'react';
import image1 from '../image/register.png';
import { IoCall } from "react-icons/io5";
import { FiEye, FiEyeOff } from "react-icons/fi";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { useNavigate } from 'react-router-dom'; 

const Registration = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handlePhoneChange = (value) => {
    setFormData({
      ...formData,
      phone: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    setLoading(true);
    const requestData = {
      firstName: formData.firstname,
      lastName: formData.lastname,
      phoneNumber: formData.phone,
      email: formData.email,
      password: formData.password,
    };

    try {
      const apiUrl = process.env.REACT_APP_API_BASE_URL;      
      const response = await fetch(`${apiUrl}/api/v1/gocab/auth/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });

      const result = await response.json();

      if (response.ok) {
        navigate('/emailverification');
        console.log('Server Response:', result);
        setFormData({
          firstname: '',
          lastname: '',
          phone: '',
          email: '',
          password: '',
          confirmPassword: '',
          agreeToTerms: false,
        });
      } else {
        alert(result.message || 'Signup failed');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred during signup.');
    } finally {
      setLoading(false);
    }
  };

  const togglePasswordVisibility = (field) => {
    if (field === 'password') {
      setShowPassword(!showPassword);
      setShowConfirmPassword(false);
    } else if (field === 'confirmPassword') {
      setShowConfirmPassword(!showConfirmPassword);
      setShowPassword(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-5 bg-gray-100 min-h-screen">
      <div className="w-full md:w-[400px] p-8 bg-white rounded-lg shadow-md md:mr-5 mb-8 md:mb-0">
        <h2 className="text-2xl font-bold mb-5 text-center md:text-left">Sign up</h2>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="flex items-center border-b border-gray-300 mb-5 pb-2">
            <span className="mr-2">👤</span>
            <input
              type="text"
              name="firstname"
              placeholder="First Name"
              value={formData.firstname}
              required
              onChange={handleChange}
              className="border-none outline-none flex-1 text-base px-2 py-2"
            />
          </div>
          <div className="flex items-center border-b border-gray-300 mb-5 pb-2">
            <span className="mr-2">👤</span>
            <input
              type="text"
              name="lastname"
              placeholder="Last Name"
              value={formData.lastname}
              onChange={handleChange}
              className="border-none outline-none flex-1 text-base px-2 py-2"
            />
          </div>
          <div className="flex items-center border-b border-gray-300 mb-5 pb-2">
            <IoCall className="mr-2 border-none" />
            <PhoneInput
              country="in"
              value={formData.phone}
              className="border-none"
              onChange={handlePhoneChange}
              inputClass=" outline-none flex-1 text-base px-2 py-2"
            />
          </div>
          <div className="flex items-center border-b border-gray-300 mb-5 pb-2">
            <span className="mr-2">✉️</span>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              required
              onChange={handleChange}
              className="border-none outline-none flex-1 text-base px-2 py-2"
            />
          </div>
          <div className="flex items-center border-b border-gray-300 mb-5 pb-2 relative">
            <span className="mr-2">🔒</span>
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Password"
              value={formData.password}
              required
              onChange={handleChange}
              className="border-none outline-none flex-1 text-base px-2 py-2"
            />
            <button
              type="button"
              onClick={() => togglePasswordVisibility('password')}
              className="absolute right-0 mr-2"
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>
          <div className="flex items-center border-b border-gray-300 mb-5 pb-2 relative">
            <span className="mr-2">🔒</span>
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              name="confirmPassword"
              placeholder="Repeat your password"
              value={formData.confirmPassword}
              required
              onChange={handleChange}
              className="border-none outline-none flex-1 text-base px-2 py-2"
            />
            <button
              type="button"
              onClick={() => togglePasswordVisibility('confirmPassword')}
              className="absolute right-0 mr-2"
            >
              {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>
          <div className="flex items-center mb-5">
            <input
              type="checkbox"
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              required
              onChange={handleChange}
              className="mr-2"
            />
            <label>
              I agree to all statements in{' '}
              <a href="#" className="text-blue-500 underline cursor-pointer">
                Terms of service
              </a>
            </label>
          </div>
          <button
            type="submit"
            className={`bg-blue-500 text-white border-none py-2 px-4 rounded cursor-pointer text-base ${loading ? 'opacity-50' : ''}`}
            disabled={loading}
          >
            {loading ? (
              <span className="flex items-center justify-center">
                <svg
                  className="animate-spin h-5 w-5 mr-3 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                </svg>
                Register
              </span>
            ) : (
              'Register'
            )}
          </button>
        </form>
        <h2 className="text-center text-blue-900 mt-2.5 text-sm">
          <a href="login">I am already a member</a>
        </h2>
      </div>
      <div className="w-full md:w-[500px] text-center">
        <img src={image1} alt="Desk setup" className="max-w-full" />
      </div>
    </div>
  );
};

export default Registration;
