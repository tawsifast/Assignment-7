import React from 'react';
import { Link } from 'react-router';

const NotFoundPage = () => {
    return (
        <div>
        <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-900 to-gray-800 text-white px-4">
      <div className="text-center">
        {/* Error Code */}
        <h1 className="text-8xl font-extrabold text-red-500 drop-shadow-lg">
          404
        </h1>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-semibold mt-4">
          Oops! Page not found
        </h2>

        {/* Description */}
        <p className="text-gray-300 mt-3 max-w-md mx-auto">
          The page you're looking for doesn’t exist or has been moved.
        </p>

        {/* Button */}
        <Link to="/">
          <button className="mt-6 px-6 py-3 bg-red-500 hover:bg-red-600 transition-all duration-300 rounded-xl shadow-lg active:scale-95">
            Go Back Home
          </button>
        </Link>

        {/* Optional Illustration */}
        <div className="mt-10 text-gray-500 text-sm">
          Error Code: 404 | Lost in space 🚀
        </div>
      </div>
    </div>
</div>
    );
};

export default NotFoundPage;