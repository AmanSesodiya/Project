import React, { useContext, useState } from 'react';
import loginIcons from '../assest/signin.gif';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import SummaryApi from '../common';
import { toast } from 'react-toastify';
import Context from '../context';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();
  const { fetchUserDetails, fetchUserAddToCart } = useContext(Context);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(SummaryApi.signIn.url, {
        method: SummaryApi.signIn.method,
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      const dataApi = await response.json();

      if (dataApi.success) {
        toast.success(dataApi.message);
        navigate('/');
        fetchUserDetails();
        fetchUserAddToCart();
      } else {
        toast.error(dataApi.message);
      }
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    }
  };

  return (
    <section id='login' className='flex items-center justify-center min-h-screen bg-gray-50 p-4'>
      <div className='bg-white p-8 rounded-lg shadow-lg w-full max-w-md'>
        <div className='flex justify-center mb-6'>
          <img src={loginIcons} alt='Login icons' className='w-16 h-16' />
        </div>
        <h2 className='text-2xl font-bold text-center mb-6 text-gray-800'>Login</h2>
        <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
          <div>
            <label htmlFor='email' className='block text-gray-700 text-sm font-medium mb-1'>Email:</label>
            <input
              type='email'
              id='email'
              name='email'
              placeholder='Enter your email'
              value={data.email}
              onChange={handleOnChange}
              className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300'
              required
            />
          </div>
          <div>
            <label htmlFor='password' className='block text-gray-700 text-sm font-medium mb-1'>Password:</label>
            <div className='relative'>
              <input
                type={showPassword ? 'text' : 'password'}
                id='password'
                name='password'
                placeholder='Enter your password'
                value={data.password}
                onChange={handleOnChange}
                className='w-full p-3 border border-gray-300 rounded-lg pr-10 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300'
                required
              />
              <button
                type='button'
                className='absolute inset-y-0 right-3 flex items-center text-gray-500'
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            <Link to='/forgot-password' className='block text-right text-red-600 hover:underline mt-1 text-sm'>
              Forgot password?
            </Link>
          </div>
          <button
            type='submit'
            className='bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full w-full transition transform hover:scale-105 duration-300'
          >
            Login
          </button>
        </form>
        <p className='text-center mt-4 text-gray-600'>
          Don't have an account?{' '}
          <Link to='/sign-up' className='text-red-600 hover:text-red-700 hover:underline'>
            Sign up
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
