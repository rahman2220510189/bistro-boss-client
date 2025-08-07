import React from 'react';
import { FaAd, FaBook, FaHome, FaList, FaShoppingCart, FaUser, FaUtensils } from 'react-icons/fa';
import { FaCalendar } from 'react-icons/fa6';
import { MdContactEmergency, MdOutlineBorderColor, MdRestaurantMenu } from 'react-icons/md';
import { NavLink, Outlet } from 'react-router-dom';
import useCart from '../hooks/useCart';
import useAdmin from '../hooks/useAdmin';

const Dashboard = () => {
 
    const[cart] =useCart();
    const [isAdmin] = useAdmin();
    console.log('admin is', isAdmin)
    
    return (
        <div className='flex'>
            <div className='w-64 min-h-screen bg-orange-400'>
                <ul className='menu p-4'>
                    
                {
                    isAdmin ? <>
                   
                    <li><NavLink to='/dashboard/adminHome'><FaHome></FaHome> Admin Home</NavLink></li>
                    <li><NavLink to='/dashboard/addItems'> <FaUtensils></FaUtensils>
                    Add Items</NavLink></li>
                    <li><NavLink to='/dashboard/manageItems'> <FaList></FaList>
                    Manage Items</NavLink></li>
                    <li><NavLink to='/dashboard/bookings'><FaBook></FaBook> Manage Bookings</NavLink></li>
                    <li><NavLink to='/dashboard/users'><FaUser></FaUser> All Users</NavLink></li>
                    
                    </>:
                    <>
                    <li><NavLink to='/dashboard/cart'> <FaShoppingCart></FaShoppingCart> My Card ({cart.length})</NavLink></li>
                    <li><NavLink to='/dashboard/userHome'><FaHome></FaHome> User Home</NavLink></li>
                    <li><NavLink to='/dashboard/reservation'> <FaCalendar></FaCalendar>Reservation</NavLink></li>
                    <li><NavLink to='/dashboard/paymentHistory'> <FaCalendar></FaCalendar>Payment History</NavLink></li>
                    <li><NavLink to='/dashboard/review'> <FaAd></FaAd>Add a Review</NavLink></li>
                    <li><NavLink to='/dashboard/bookings'> <FaList></FaList>My Booking</NavLink></li>
                    </>
                }
                   
                    <div className="divider"></div>
                    <li><NavLink to='/'><FaHome></FaHome>Home</NavLink></li>
                    <li><NavLink to='/menu'><MdRestaurantMenu />
                    Our Menu
                    </NavLink></li>
                    <li><NavLink to='/order/salad'><MdOutlineBorderColor /> Order Food
                    </NavLink></li>
                    <li><NavLink to='/contact'><MdContactEmergency />
                     Contact </NavLink></li>
                   
                   

                </ul>
               

            </div>
            <div className='flex-1 p-8'>
                
                <Outlet></Outlet>

            </div>
        </div>
    );
};

export default Dashboard;
