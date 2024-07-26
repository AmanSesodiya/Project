import React from 'react';
import CANCELIMAGE from '../assest/cancel.gif'; // Ensure the path is correct
import { Link } from 'react-router-dom';

const Cancel = () => {
  return (
    <div className='flex flex-col items-center justify-center bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto mt-10'>
      <img
        src={CANCELIMAGE}
        alt="Payment Cancelled"
        className='w-32 h-32 mb-6 object-cover'
      />
      <h1 className='text-red-600 font-semibold text-2xl mb-4'>Payment Cancelled</h1>
      <p className='text-gray-700 mb-6 text-center'>
        We’re sorry, but your payment could not be processed. Please try again or contact support if you need further assistance.
      </p>
      <Link
        to="/cart"
        className='bg-red-600 text-white py-2 px-6 rounded-lg font-semibold hover:bg-red-700 transition duration-300 ease-in-out'
      >
        Go To Cart
      </Link>
    </div>
  );
};

export default Cancel;
