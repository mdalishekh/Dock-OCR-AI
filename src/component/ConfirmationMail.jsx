import React from "react";
import car from "../image/—Pngtree—illustration of fun mudik eid_9068973.png";

const EmailVerification = () => {
  return (
    <div className="max-w-md mx-auto my-8 p-8 bg-gray-50 rounded-xl shadow-lg text-center font-roboto">
      <div className="mb-6">
        <img
          src={car}
          alt="Illustration"
          className="w-44 h-44 rounded-full shadow-md"
        />
      </div>
      <h2 className="text-2xl text-gray-800 font-bold mb-4">
        You're Almost There!
      </h2>
      <p className="text-lg text-gray-600 leading-relaxed mb-4">
        Welcome to GoCab, Shruti Mehta! <br />
        Please click the button below to verify your email address.
      </p>
      <div className="mt-6">
        <a
          href="https://mail.google.com/"
          className="px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold text-lg shadow-md transition-all duration-300 ease-in-out hover:bg-blue-600"
        >
          Verify Your Email
        </a>
      </div>

      <p className="mt-8 text-sm text-gray-500 leading-relaxed">
        This link will expire in <strong>24 hours</strong>. If the link has
        expired, please request a new one.
      </p>
    </div>
  );
};

export default EmailVerification;
