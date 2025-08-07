import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';
import { FaShoppingCart } from "react-icons/fa";
import useCart from '../../../hooks/useCart';
import useAdmin from '../../../hooks/useAdmin';

const NavBar = () => {
  const {user,logOut} = useContext(AuthContext);
  const [isAdmin] = useAdmin();
  const [cart] = useCart();

  const handleLogOut = () =>{
        logOut()
        .then(()=> { })
        .catch(error => console.log(error))
  }
    const navOptions = <>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/menu'>Our Menu</Link></li>
    <li><Link to='/order'>Order Food</Link></li>
    <li><Link to='/contact'>Contact Us</Link></li>
    {
      user && isAdmin &&     <li><Link to='/dashboard/adminHome'>Dashboard</Link></li>

    }
    {
      user && !isAdmin &&     <li><Link to='/dashboard/userHome'>Dashboard</Link></li>

    }
    {/* <li>
      <Link to='/dashboard/cart'>
      <button className='btn'>
      <FaShoppingCart className=' text-green-800 ' />
        <div className='badge badge-secondary'>+{cart.length}</div>
      </button>
      </Link></li>
   

    
   {
    
    user ? <>
    
    <button onClick={handleLogOut} className="btn btn-active btn-ghost">Log Out</button>

    
    </> : <>
        <li className='hover:bg-slate-200 rounded-sm'><Link to='/login'>Login</Link></li>

    </>
   } */}
   <div className="flex items-center gap-6">
  <Link to='/dashboard/cart'>
    <button className='btn ml-2'>
      <FaShoppingCart className='text-green-800' />
      <div className='badge badge-secondary'>+{cart.length}</div>
    </button>
  </Link>

  {
    user ? (
      <button onClick={handleLogOut} className="btn btn-active btn-ghost">
        Log Out
      </button>
    ) : (
      <Link to='/login' className='btn btn-ghost'>Login</Link>
    )
  }
</div>

     
      
      

    </>
    return (
        <div className="navbar fixed z-10 bg-opacity-15 text-white bg-black max-w-screen-xl  ">
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
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
           {navOptions}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Bistro Boss</a>
        </div>
        <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navOptions}
            </ul>
  
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    );
};

export default NavBar;