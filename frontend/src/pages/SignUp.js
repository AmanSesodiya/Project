import React, { useState } from 'react';
import loginIcons from '../assest/signin.gif';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import imageTobase64 from '../helpers/imageTobase64';
import SummaryApi from '../common';
import { toast } from 'react-toastify';

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [data, setData] = useState({
    email: '',
    password: '',
    name: '',
    confirmPassword: '',
    profilePic: '',
  });
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleUploadPic = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const imagePic = await imageTobase64(file);
      setData((prev) => ({
        ...prev,
        profilePic: imagePic
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (data.password === data.confirmPassword) {
      try {
        const response = await fetch(SummaryApi.signUP.url, {
          method: SummaryApi.signUP.method,
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });

        const dataApi = await response.json();

        if (dataApi.success) {
          toast.success(dataApi.message);
          navigate('/login');
        } else {
          toast.error(dataApi.message);
        }
      } catch (error) {
        toast.error('Something went wrong. Please try again.');
      }
    } else {
      toast.error('Passwords do not match. Please check and try again.');
    }
  };

  return (
    <section id='signup' className='flex items-center justify-center min-h-screen bg-gray-50 p-4'>
      <div className='bg-white p-8 rounded-lg shadow-lg w-full max-w-md'>
        <div className='flex justify-center mb-6'>
          <div className='relative'>
            <img
              src={data.profilePic || loginIcons}
              alt='Profile'
              className='w-24 h-24 rounded-full border-2 border-gray-300 object-cover'
            />
            <label htmlFor='file-upload' className='absolute bottom-0 right-0 w-8 h-8 flex items-center justify-center bg-red-600 text-white rounded-full cursor-pointer'>
              <span className='text-xs'>+</span>
              <input
                id='file-upload'
                type='file'
                className='hidden'
                onChange={handleUploadPic}
              />
            </label>
          </div>
        </div>
        <h2 className='text-2xl font-bold text-center mb-6 text-gray-800'>Sign Up</h2>
        <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
          <div>
            <label htmlFor='name' className='block text-gray-700 text-sm font-medium mb-1'>Name:</label>
            <input
              type='text'
              id='name'
              name='name'
              placeholder='Enter your name'
              value={data.name}
              onChange={handleOnChange}
              required
              className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300'
            />
          </div>
          <div>
            <label htmlFor='email' className='block text-gray-700 text-sm font-medium mb-1'>Email:</label>
            <input
              type='email'
              id='email'
              name='email'
              placeholder='Enter your email'
              value={data.email}
              onChange={handleOnChange}
              required
              className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300'
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
                required
                className='w-full p-3 border border-gray-300 rounded-lg pr-10 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300'
              />
              <button
                type='button'
                className='absolute inset-y-0 right-3 flex items-center text-gray-500'
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>
          <div>
            <label htmlFor='confirmPassword' className='block text-gray-700 text-sm font-medium mb-1'>Confirm Password:</label>
            <div className='relative'>
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                id='confirmPassword'
                name='confirmPassword'
                placeholder='Confirm your password'
                value={data.confirmPassword}
                onChange={handleOnChange}
                required
                className='w-full p-3 border border-gray-300 rounded-lg pr-10 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300'
              />
              <button
                type='button'
                className='absolute inset-y-0 right-3 flex items-center text-gray-500'
                onClick={() => setShowConfirmPassword((prev) => !prev)}
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>
          <button
            type='submit'
            className='bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full w-full transition transform hover:scale-105 duration-300'
          >
            Sign Up
          </button>
        </form>
        <p className='text-center mt-4 text-gray-600'>
          Already have an account?{' '}
          <Link to='/login' className='text-red-600 hover:text-red-700 hover:underline'>
            Login
          </Link>
        </p>
      </div>
    </section>
  );
};

export default SignUp;
