import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaDollarSign, FaJediOrder, FaUser, FaUsers } from "react-icons/fa";
import { FaMagento, FaSafari } from "react-icons/fa6";
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
        return <div>Loading...</div>;
     }
    return (
        <div>
            <h2 className="text-3xl">
               <span>Hi, Welcome </span> 
               {
                user?.displayName ? user.displayName : 'Back'
               }
            </h2>
            <div className="stats shadow">
  <div className="stat">
    <div className="stat-figure text-secondary">
     <FaDollarSign className="text-5xl"></FaDollarSign>
    </div>
    <div className="stat-title">Revenue</div>
    <div className="stat-value">{stats.revenue}</div>
  </div>

  <div className="stat">
    <div className="stat-figure text-secondary">
     <FaUsers className="text-5xl"></FaUsers>
    </div>
    <div className="stat-title">Users</div>
    <div className="stat-value">{stats.users}</div>
  </div>

  <div className="stat">
    <div className="stat-figure text-secondary">
    <FaJediOrder className="text-5xl"></FaJediOrder>
    </div>
    <div className="stat-title">Orders</div>
    <div className="stat-value">{stats.orders}</div>
  </div>
  <div className="stat">
    <div className="stat-figure text-secondary">
        <FaMagento className="text-5xl"></FaMagento>
    </div>
    <div className="stat-title">Menu</div>
    <div className="stat-value">{stats.menuItems}</div>
  </div>
</div>
        </div>
    );
};

export default AdminHome;
