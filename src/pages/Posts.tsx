import React from 'react';
import { FaTwitter } from 'react-icons/fa';

const Posts = () => {
  return (
    <>
      <div className="max-w-md w-full mx-auto">
        <div className=" flex align-center justify-center text-purple-600 text-2xl">
          <FaTwitter className="text-4xl" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mt-12 text-center">
          Sign In
        </h2>
        <h4 className="text-center mt-6 text-gray-400">
          Enter your email and password
        </h4>
      </div>
    </>
  );
};

export default Posts;
