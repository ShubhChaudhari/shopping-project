import React from 'react';
import { Link } from 'react-router-dom';

const ThankYouPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Thank You!</h1>
        <p className="text-gray-600">
          We appreciate your support and will get back to you soon.
        </p>
     
            Click to <Link to="/home" className="btn btn-primary">home</Link>
        
      </div>
    </div>
  );
};

export default ThankYouPage;
