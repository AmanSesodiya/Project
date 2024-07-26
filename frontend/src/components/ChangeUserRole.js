import React, { useState } from 'react';
import ROLE from '../common/role';
import { IoMdClose } from "react-icons/io";
import SummaryApi from '../common';
import { toast } from 'react-toastify';

const ChangeUserRole = ({
    name,
    email,
    role,
    userId,
    onClose,
    callFunc,
}) => {
    const [userRole, setUserRole] = useState(role);

    const handleOnChangeSelect = (e) => {
        setUserRole(e.target.value);
        console.log(e.target.value);
    };

    const updateUserRole = async () => {
        const fetchResponse = await fetch(SummaryApi.updateUser.url, {
            method: SummaryApi.updateUser.method,
            credentials: 'include',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                userId: userId,
                role: userRole
            })
        });

        const responseData = await fetchResponse.json();

        if (responseData.success) {
            toast.success(responseData.message);
            onClose();
            callFunc();
        }

        console.log("role updated", responseData);
    };

    return (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10'>
            <div className='bg-white shadow-lg rounded-lg p-6 w-full max-w-sm'>
                <button className='ml-auto text-gray-400 hover:text-gray-600 transition' onClick={onClose}>
                    <IoMdClose size={24} />
                </button>

                <h1 className='text-xl font-semibold mb-4 text-center'>Change User Role</h1>

                <div className='mb-4'>
                    <p className='text-gray-700'><strong>Name:</strong> {name}</p>
                    <p className='text-gray-700'><strong>Email:</strong> {email}</p>
                </div>

                <div className='flex items-center justify-between mb-6'>
                    <label htmlFor='role' className='text-gray-700'>Role:</label>
                    <select
                        id='role'
                        className='border rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-red-200'
                        value={userRole}
                        onChange={handleOnChangeSelect}
                    >
                        {Object.values(ROLE).map(el => (
                            <option value={el} key={el}>{el}</option>
                        ))}
                    </select>
                </div>

                <button
                    className='w-full py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition'
                    onClick={updateUserRole}
                >
                    Change Role
                </button>
            </div>
        </div>
    );
};

export default ChangeUserRole;
