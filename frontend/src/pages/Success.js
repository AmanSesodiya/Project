import React from 'react';
import SUCCESSIMAGE from '../assest/success.gif'; // Ensure the path is correct
import { Link } from 'react-router-dom';

const Success = () => {
  return (
    <div className='flex flex-col items-center justify-center bg-white p-8 rounded-lg shadow-xl max-w-md mx-auto mt-12'>
      <img
        src={SUCCESSIMAGE}
        alt="Payment Successful"
        className='w-24 h-24 mb-6'
      />
      <h1 className='text-green-700 font-bold text-3xl mb-4'>Payment Successful</h1>
      <p className='text-gray-600 text-lg mb-6 text-center'>
        Congratulations! Your payment was processed successfully. We appreciate your business.
      </p>
      <Link
        to="/order"
        className='bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition duration-300 ease-in-out'
      >
        View Your Order
      </Link>
    </div>
  );
};

export default Success;
