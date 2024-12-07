import React from 'react';
import { FaFacebookF, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const NavigationHeader = () => {
  return (
    <header className="flex flex-wrap items-center justify-between p-4 bg-black border-b border-gray-300">
      <div className="flex-1 text-white font-bold text-lg mb-2 sm:mb-0">
        📞 +1 234 567 8901
      </div>
      <div className="flex-1 flex justify-end gap-4">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-400 text-xl"
          aria-label="Facebook"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-300 text-xl"
          aria-label="Twitter"
        >
          <FaXTwitter />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-400 text-xl"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
      </div>
    </header>
  );
};

export default NavigationHeader;
