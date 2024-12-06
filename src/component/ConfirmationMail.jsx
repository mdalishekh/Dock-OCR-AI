import React from "react";
import car from "../image/—Pngtree—illustration of fun mudik eid_9068973.png";

const EmailVerification = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-lg text-center font-roboto mx-4 sm:mx-8 md:mx-auto">
        <div className="mb-6">
          <img
            src={car}
            alt="Illustration"
            className="w-32 h-32 sm:w-44 sm:h-44 rounded-full shadow-md mx-auto"
          />
        </div>
        <h2 className="text-xl sm:text-2xl text-gray-800 font-bold mb-4">
          You're Almost There!
        </h2>
        <p className="text-sm sm:text-lg text-gray-600 leading-relaxed mb-4">
          Welcome to GoCab, Shruti Mehta! <br />
          Please click the button below to verify your email address.
        </p>
        <div className="mt-6">
          <a
            href="https://mail.google.com/"
            className="inline-block px-4 py-2 sm:px-6 sm:py-3 bg-blue-500 text-white rounded-lg font-semibold text-sm sm:text-lg shadow-md transition-all duration-300 ease-in-out hover:bg-blue-600"
          >
            Verify Your Email
          </a>
        </div>

        <p className="mt-8 text-xs sm:text-sm text-gray-500 leading-relaxed">
          This link will expire in <strong>24 hours</strong>. If the link has
          expired, please request a new one.
        </p>
      </div>
    </div>
  );
};

export default EmailVerification;
