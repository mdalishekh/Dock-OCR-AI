import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { PiSignOutLight } from 'react-icons/pi';
import profile from '../image/car3.jpeg';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);

  const profileMenuRef = useRef(null);
  const navMenuRef = useRef(null);

  useEffect(() => {
    const token = localStorage.getItem('userToken');
    setIsLoggedIn(!!token);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        profileMenuRef.current &&
        !profileMenuRef.current.contains(event.target)
      ) {
        setProfileMenuOpen(false);
      }
      if (navMenuRef.current && !navMenuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('userToken');
    setIsLoggedIn(false);
    setMenuOpen(false);
    setProfileMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const toggleProfileMenu = () => {
    setProfileMenuOpen((prev) => !prev);
  };

  return (
    <nav className="bg-gray-100 border-b border-gray-300">
      <div className="flex justify-between items-center p-4">
        <div className="text-xl font-bold">Logo</div>
        <button
          className="text-2xl md:hidden text-gray-500 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
        <div className="hidden md:flex items-center gap-4">
          {isLoggedIn ? (
            <>
              <Link className="text-gray-500 hover:underline" to="/about-us">
                About Us
              </Link>
              <div className="relative" ref={profileMenuRef}>
                <img
                  src={profile}
                  alt="Profile"
                  className="w-10 h-10 rounded-full cursor-pointer"
                  onClick={toggleProfileMenu}
                />
                {profileMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 shadow-lg rounded-md z-10">
                    <button
                      className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                      onClick={handleLogout}
                    >
                      <PiSignOutLight className="text-lg" />
                      Sign Out
                    </button>
                    <Link
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      to="/edit"
                      onClick={() => setProfileMenuOpen(false)}
                    >
                      Edit
                    </Link>
                    <Link
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      to="/ride-history"
                      onClick={() => setProfileMenuOpen(false)}
                    >
                      Your Activity
                    </Link>
                  </div>
                )}
              </div>
            </>
          ) : (
            <>
              <Link className="text-blue-500 hover:underline" to="/login">
                Login
              </Link>
              <Link className="text-blue-500 hover:underline" to="/signup">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
      {menuOpen && (
        <div
          className="md:hidden flex flex-col gap-2 p-4 bg-gray-100 border-t border-gray-300"
          ref={navMenuRef}
        >
          {isLoggedIn ? (
            <>
              <Link to="/about-us" onClick={toggleMenu}>
                About Us
              </Link>
              <Link to="/edit" onClick={toggleMenu}>
                Edit
              </Link>
              <Link to="/ride-history" onClick={toggleMenu}>
                Your Activity
              </Link>
              <button className="flex items-center gap-2" onClick={handleLogout}>
                <PiSignOutLight className="text-lg" />
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" onClick={toggleMenu}>
                Login
              </Link>
              <Link to="/signup" onClick={toggleMenu}>
                Signup
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
