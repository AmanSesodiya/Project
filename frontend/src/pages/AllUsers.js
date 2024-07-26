import React, { useEffect, useState } from 'react';
import SummaryApi from '../common';
import { toast } from 'react-toastify';
import moment from 'moment';
import { MdModeEdit } from "react-icons/md";
import ChangeUserRole from '../components/ChangeUserRole';

const AllUsers = () => {
    const [allUser, setAllUsers] = useState([]);
    const [openUpdateRole, setOpenUpdateRole] = useState(false);
    const [updateUserDetails, setUpdateUserDetails] = useState({
        email: "",
        name: "",
        role: "",
        _id: ""
    });

    const fetchAllUsers = async () => {
        try {
            const fetchData = await fetch(SummaryApi.allUser.url, {
                method: SummaryApi.allUser.method,
                credentials: 'include'
            });
            const dataResponse = await fetchData.json();

            if (dataResponse.success) {
                setAllUsers(dataResponse.data);
            } else {
                toast.error(dataResponse.message);
            }
        } catch (error) {
            toast.error('Failed to fetch users');
        }
    };

    useEffect(() => {
        fetchAllUsers();
    }, []);

    return (
        <div className='bg-white p-6 rounded-lg shadow-lg'>
            <table className='w-full text-left border-collapse'>
                <thead>
                    <tr className='bg-gray-800 text-white'>
                        <th className='p-2 border-b'>Sr.</th>
                        <th className='p-2 border-b'>Name</th>
                        <th className='p-2 border-b'>Email</th>
                        <th className='p-2 border-b'>Role</th>
                        <th className='p-2 border-b'>Created Date</th>
                        <th className='p-2 border-b'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {allUser.map((user, index) => (
                        <tr key={user._id} className='hover:bg-gray-100'>
                            <td className='p-2 border-b'>{index + 1}</td>
                            <td className='p-2 border-b'>{user.name}</td>
                            <td className='p-2 border-b'>{user.email}</td>
                            <td className='p-2 border-b'>{user.role}</td>
                            <td className='p-2 border-b'>{moment(user.createdAt).format('LL')}</td>
                            <td className='p-2 border-b'>
                                <button
                                    className='bg-green-100 p-2 rounded-full cursor-pointer hover:bg-green-500 hover:text-white transition-colors duration-300'
                                    onClick={() => {
                                        setUpdateUserDetails(user);
                                        setOpenUpdateRole(true);
                                    }}
                                >
                                    <MdModeEdit />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {openUpdateRole && (
                <ChangeUserRole
                    onClose={() => setOpenUpdateRole(false)}
                    name={updateUserDetails.name}
                    email={updateUserDetails.email}
                    role={updateUserDetails.role}
                    userId={updateUserDetails._id}
                    callFunc={fetchAllUsers}
                />
            )}
        </div>
    );
};

export default AllUsers;
