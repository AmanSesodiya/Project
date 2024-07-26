import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { FaRegCircleUser } from "react-icons/fa6";
import { Link, Outlet, useNavigate } from 'react-router-dom';
import ROLE from '../common/role';

const AdminPanel = () => {
    const user = useSelector(state => state?.user?.user);
    const navigate = useNavigate();

    useEffect(() => {
        if (user?.role !== ROLE.ADMIN) {
            navigate("/");
        }
    }, [user, navigate]);

    return (
        <div className='flex min-h-[calc(100vh-80px)]'>
            {/* Sidebar */}
            <aside className='bg-gray-200 min-h-full w-64 shadow-lg'>
                {/* Profile Section */}
                <div className='h-40 flex flex-col justify-center items-center bg-white border-b border-gray-300'>
                    <div className='relative flex justify-center items-center'>
                        {user?.profilePic ? (
                            <img 
                                src={user?.profilePic} 
                                className='w-24 h-24 rounded-full border-4 border-white shadow-lg object-cover' 
                                alt={user?.name} 
                            />
                        ) : (
                            <div className='w-24 h-24 rounded-full border-4 border-gray-300 flex items-center justify-center bg-gray-100'>
                                <FaRegCircleUser size={80} className='text-gray-500' />
                            </div>
                        )}
                    </div>
                    <p className='text-xl font-semibold text-gray-800 mt-2'>{user?.name}</p>
                    <p className='text-sm text-gray-600'>{user?.role}</p>
                </div>

                {/* Navigation */}
                <nav className='mt-4 px-4'>
                    <Link to="all-users" className='block px-4 py-3 mb-2 text-gray-800 rounded-md hover:bg-gray-300 transition duration-300 ease-in-out'>
                        All Users
                    </Link>
                    <Link to="all-products" className='block px-4 py-3 mb-2 text-gray-800 rounded-md hover:bg-gray-300 transition duration-300 ease-in-out'>
                        All Products
                    </Link>
                    <Link to="all-orders" className='block px-4 py-3 mb-2 text-gray-800 rounded-md hover:bg-gray-300 transition duration-300 ease-in-out'>
                        All Orders
                    </Link>
                </nav>
            </aside>

            {/* Main Content */}
            <main className='flex-1 p-6 bg-gray-100'>
                <Outlet />
            </main>
        </div>
    );
};

export default AdminPanel;
