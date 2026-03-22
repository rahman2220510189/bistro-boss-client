import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaDollarSign, FaJediOrder, FaUsers } from "react-icons/fa";
import { FaMagento } from "react-icons/fa6";

const AdminHome = () => {
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();
    const {data: stats, isLoading} = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async()=>{
            const res = await axiosSecure.get('/admin-stats')
            return res.data
        }
    });

    if(isLoading){
        return (
            <div className="min-h-screen flex flex-col items-center justify-center gap-4">
                <span className="loading loading-spinner loading-lg text-primary"></span>
                <p className="text-sm text-gray-500 animate-pulse">Loading dashboard...</p>
            </div>
        );
    }

    return (
        <div className="px-4 md:px-6 lg:px-8 py-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mb-8">
                <span>Hi, Welcome </span>
                <span className="text-orange-500">
                    {user?.displayName ? user.displayName : 'Back'}
                </span> 👋
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6">

                <div className="stat bg-gradient-to-br from-orange-400 to-orange-600 text-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="stat-figure text-white opacity-80">
                        <FaDollarSign className="text-4xl md:text-5xl" />
                    </div>
                    <div className="stat-title text-white opacity-90 font-medium">Revenue</div>
                    <div className="stat-value text-white text-2xl md:text-3xl">${stats.revenue}</div>
                    <div className="stat-desc text-white opacity-75 text-xs">Total earnings</div>
                </div>

                <div className="stat bg-gradient-to-br from-blue-400 to-blue-600 text-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="stat-figure text-white opacity-80">
                        <FaUsers className="text-4xl md:text-5xl" />
                    </div>
                    <div className="stat-title text-white opacity-90 font-medium">Users</div>
                    <div className="stat-value text-white text-2xl md:text-3xl">{stats.users}</div>
                    <div className="stat-desc text-white opacity-75 text-xs">Registered users</div>
                </div>

                <div className="stat bg-gradient-to-br from-purple-400 to-purple-600 text-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="stat-figure text-white opacity-80">
                        <FaJediOrder className="text-4xl md:text-5xl" />
                    </div>
                    <div className="stat-title text-white opacity-90 font-medium">Orders</div>
                    <div className="stat-value text-white text-2xl md:text-3xl">{stats.orders}</div>
                    <div className="stat-desc text-white opacity-75 text-xs">Total orders placed</div>
                </div>

                <div className="stat bg-gradient-to-br from-green-400 to-green-600 text-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="stat-figure text-white opacity-80">
                        <FaMagento className="text-4xl md:text-5xl" />
                    </div>
                    <div className="stat-title text-white opacity-90 font-medium">Menu Items</div>
                    <div className="stat-value text-white text-2xl md:text-3xl">{stats.menuItems}</div>
                    <div className="stat-desc text-white opacity-75 text-xs">Available dishes</div>
                </div>

            </div>
        </div>
    );
};

export default AdminHome;