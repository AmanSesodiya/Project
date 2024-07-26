import React, { useContext, useState } from 'react';
import Logo from './Logo';
import { GrSearch } from "react-icons/gr";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import SummaryApi from '../common';
import { toast } from 'react-toastify';
import { setUserDetails } from '../store/userSlice';
import ROLE from '../common/role';
import Context from '../context';

const Header = () => {
  const user = useSelector(state => state.user.user);
  const dispatch = useDispatch();
  const [menuOpen, setMenuOpen] = useState(false);
  const context = useContext(Context);
  const navigate = useNavigate();
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("q") || '';
  const [searchTerm, setSearchTerm] = useState(query);

  const handleLogout = async () => {
    try {
      const response = await fetch(SummaryApi.logout_user.url, {
        method: SummaryApi.logout_user.method,
        credentials: 'include',
      });
      const data = await response.json();

      if (data.success) {
        toast.success(data.message);
        dispatch(setUserDetails(null));
        navigate("/");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error('An error occurred during logout');
    }
  };

  const handleSearchChange = (e) => {
    const { value } = e.target;
    setSearchTerm(value);
    navigate(value ? `/search?q=${value}` : "/search");
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    navigate(searchTerm ? `/search?q=${searchTerm}` : "/search");
  };

  return (
    <header className="bg-white shadow-md fixed w-full z-50 border-b border-gray-200">
      <div className="container mx-auto flex items-center justify-between h-16 px-6">
        <Link to="/" className="flex items-center">
          <Logo w={200} h={100} className="text-gray-800" />
        </Link>

        <form
          className="relative flex items-center flex-grow max-w-md mx-6"
          onSubmit={handleSearchSubmit}
        >
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full px-4 py-2 text-gray-900 placeholder-gray-500 bg-gray-100 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            value={searchTerm}
            onChange={handleSearchChange}
            aria-label="Search input"
          />
          <button
            type="submit"
            className="absolute right-0 top-0 h-full px-4 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition"
            aria-label="Search"
          >
            <GrSearch size={20} />
          </button>
        </form>

        <div className="flex items-center gap-6">
          {user?._id && (
            <div className="relative">
              <button
                className="flex items-center justify-center text-gray-800 hover:text-gray-600 transition"
                onClick={() => setMenuOpen(prev => !prev)}
                aria-label="User Menu"
              >
                {user.profilePic ? (
                  <img
                    src={user.profilePic}
                    className="w-12 h-12 rounded-full object-cover border border-gray-300"
                    alt={user.name}
                  />
                ) : (
                  <FaRegCircleUser size={30} />
                )}
              </button>

              {menuOpen && (
                <div className="absolute right-0 top-16 w-48 bg-white text-gray-800 shadow-lg rounded-lg border border-gray-200 z-50">
                  <nav className="flex flex-col">
                    {user.role === ROLE.ADMIN && (
                      <Link
                        to="/admin-panel/all-products"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition"
                        onClick={() => setMenuOpen(false)}
                        role="menuitem"
                      >
                        Admin Panel
                      </Link>
                    )}
                    <Link
                      to="/order"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition"
                      onClick={() => setMenuOpen(false)}
                      role="menuitem"
                    >
                      Order
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="block w-full px-4 py-2 text-red-600 hover:bg-gray-100 transition text-left"
                      aria-label="Logout"
                    >
                      Logout
                    </button>
                  </nav>
                </div>
              )}
            </div>
          )}

          <Link to="/cart" className="relative text-xl text-gray-800 hover:text-gray-600 transition" aria-label="Cart">
            <FaShoppingCart />
            {context.cartProductCount > 0 && (
              <div className="absolute top-0 right-0 bg-red-600 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs transform translate-x-1/2 translate-y-1/2">
                {context.cartProductCount}
              </div>
            )}
          </Link>

          <div>
            {user?._id ? (
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition"
                aria-label="Logout"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="px-4 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition"
                aria-label="Login"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
