import { FaAd, FaBook, FaHome, FaList, FaShoppingCart, FaUser, FaUtensils } from 'react-icons/fa';
import { FaCalendar } from 'react-icons/fa6';
import { MdContactEmergency, MdOutlineBorderColor, MdRestaurantMenu } from 'react-icons/md';
import { NavLink, Outlet } from 'react-router-dom';
import useCart from '../hooks/useCart';
import useAdmin from '../hooks/useAdmin';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Dashboard = () => {
    const [cart] = useCart();
    const [isAdmin] = useAdmin();
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const navClass = ({ isActive }) =>
        `flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 font-medium text-sm
        ${isActive
            ? 'bg-white text-orange-600 shadow-sm'
            : 'text-white hover:bg-orange-500'
        }`;

    return (
        <div className='flex min-h-screen'>

            {/* Mobile Toggle Button */}
            <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden fixed top-4 left-4 z-50 bg-orange-500 text-white p-2 rounded-lg shadow-md"
            >
                {sidebarOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
            </button>

            {/* Overlay for mobile */}
            {sidebarOpen &&
                <div
                    className="lg:hidden fixed inset-0 bg-black bg-opacity-40 z-30"
                    onClick={() => setSidebarOpen(false)}
                />
            }

            {/* Sidebar */}
            <div className={`
                fixed lg:static z-40 top-0 left-0 min-h-screen w-64 bg-orange-400 shadow-xl
                transition-transform duration-300 ease-in-out
                ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
            `}>
                {/* Logo */}
                <div className="px-6 py-5 border-b border-orange-300">
                    <h2 className="text-white font-bold text-xl tracking-wide">
                        {isAdmin ? '⚙️ Admin Panel' : '👤 My Dashboard'}
                    </h2>
                </div>

                <ul className='menu p-3 gap-1'>
                    {isAdmin ? <>
                        <li><NavLink to='/dashboard/adminHome' className={navClass} onClick={() => setSidebarOpen(false)}>
                            <FaHome /> Admin Home
                        </NavLink></li>
                        <li><NavLink to='/dashboard/addItems' className={navClass} onClick={() => setSidebarOpen(false)}>
                            <FaUtensils /> Add Items
                        </NavLink></li>
                        <li><NavLink to='/dashboard/manageItems' className={navClass} onClick={() => setSidebarOpen(false)}>
                            <FaList /> Manage Items
                        </NavLink></li>
                        <li><NavLink to='/dashboard/bookings' className={navClass} onClick={() => setSidebarOpen(false)}>
                            <FaBook /> Manage Bookings
                        </NavLink></li>
                        <li><NavLink to='/dashboard/users' className={navClass} onClick={() => setSidebarOpen(false)}>
                            <FaUser /> All Users
                        </NavLink></li>
                    </> : <>
                        <li><NavLink to='/dashboard/userHome' className={navClass} onClick={() => setSidebarOpen(false)}>
                            <FaHome /> User Home
                        </NavLink></li>
                        <li><NavLink to='/dashboard/cart' className={navClass} onClick={() => setSidebarOpen(false)}>
                            <FaShoppingCart /> My Cart
                            <span className="ml-auto bg-white text-orange-500 text-xs font-bold px-2 py-0.5 rounded-full">
                                {cart.length}
                            </span>
                        </NavLink></li>
                        <li><NavLink to='/dashboard/reservation' className={navClass} onClick={() => setSidebarOpen(false)}>
                            <FaCalendar /> Reservation
                        </NavLink></li>
                        <li><NavLink to='/dashboard/paymentHistory' className={navClass} onClick={() => setSidebarOpen(false)}>
                            <FaCalendar /> Payment History
                        </NavLink></li>
                        <li><NavLink to='/dashboard/review' className={navClass} onClick={() => setSidebarOpen(false)}>
                            <FaAd /> Add a Review
                        </NavLink></li>
                        <li><NavLink to='/dashboard/bookings' className={navClass} onClick={() => setSidebarOpen(false)}>
                            <FaList /> My Booking
                        </NavLink></li>
                    </>}

                    <div className="divider my-2 border-orange-300 opacity-50"></div>

                    <p className="text-orange-100 text-xs font-semibold uppercase tracking-widest px-3 mb-1">
                        Main Site
                    </p>
                    <li><NavLink to='/' className={navClass} onClick={() => setSidebarOpen(false)}>
                        <FaHome /> Home
                    </NavLink></li>
                    <li><NavLink to='/menu' className={navClass} onClick={() => setSidebarOpen(false)}>
                        <MdRestaurantMenu /> Our Menu
                    </NavLink></li>
                    <li><NavLink to='/order/salad' className={navClass} onClick={() => setSidebarOpen(false)}>
                        <MdOutlineBorderColor /> Order Food
                    </NavLink></li>
                    <li><NavLink to='/contact' className={navClass} onClick={() => setSidebarOpen(false)}>
                        <MdContactEmergency /> Contact
                    </NavLink></li>
                </ul>
            </div>

            {/* Main Content */}
            <div className='flex-1 p-4 md:p-8 lg:ml-0 bg-gray-50 min-h-screen'>
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;