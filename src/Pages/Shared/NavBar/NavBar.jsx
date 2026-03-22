import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';
import { FaShoppingCart } from "react-icons/fa";
import useCart from '../../../hooks/useCart';
import useAdmin from '../../../hooks/useAdmin';

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isAdmin] = useAdmin();
  const [cart] = useCart();

  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch(error => console.log(error))
  }

  const navOptions = <>
    <li><Link to='/' className="hover:text-yellow-400 transition-colors duration-200">Home</Link></li>
    <li><Link to='/menu' className="hover:text-yellow-400 transition-colors duration-200">Our Menu</Link></li>
    <li><Link to='/order' className="hover:text-yellow-400 transition-colors duration-200">Order Food</Link></li>
    <li><Link to='/contact' className="hover:text-yellow-400 transition-colors duration-200">Contact Us</Link></li>
    {user && isAdmin &&
      <li><Link to='/dashboard/adminHome' className="hover:text-yellow-400 transition-colors duration-200">Dashboard</Link></li>
    }
    {user && !isAdmin &&
      <li><Link to='/dashboard/userHome' className="hover:text-yellow-400 transition-colors duration-200">Dashboard</Link></li>
    }
    <li>
      <Link to='/dashboard/cart'>
        <button className='btn btn-sm md:btn-md gap-2'>
          <FaShoppingCart className='text-green-600 text-base md:text-lg' />
          <div className='badge badge-secondary text-xs'>+{cart.length}</div>
        </button>
      </Link>
    </li>
  </>

  return (
    <div className="navbar fixed z-10 bg-black bg-opacity-60 backdrop-blur-sm text-white w-full px-4 md:px-8 lg:px-16 shadow-md">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 text-black rounded-box z-[1] mt-3 w-52 p-2 shadow-xl">
            {navOptions}
          </ul>
        </div>
        <Link to='/' className="btn btn-ghost text-lg md:text-xl font-bold tracking-widest hover:text-yellow-400 transition-colors duration-200">
          Bistro Boss
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-1">
          {navOptions}
        </ul>
      </div>

      <div className="navbar-end gap-2">
        {user ? (
          <button
            onClick={handleLogOut}
            className="btn btn-sm md:btn-md btn-ghost border border-white border-opacity-30 hover:bg-white hover:text-black transition-all duration-200"
          >
            Log Out
          </button>
        ) : (
          <Link to='/login'>
            <button className="btn btn-sm md:btn-md btn-ghost border border-white border-opacity-30 hover:bg-white hover:text-black transition-all duration-200">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;