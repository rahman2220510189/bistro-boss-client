import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";

const AdminRoute = ({Children}) => {
    const {user, loading} = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin()
    const location = useLocation();

    if(loading || isAdminLoading){
        return (
            <div className="min-h-screen flex flex-col items-center justify-center gap-4">
                <span className="loading loading-spinner loading-lg text-primary"></span>
                <p className="text-sm text-gray-500 animate-pulse">Checking permissions...</p>
                <progress className="progress progress-primary w-56 md:w-72" value="100" max="100"></progress>
            </div>
        )
    }

    if(user && isAdmin){
        return Children;
    }

    return <Navigate to='/' state={{from: location}} replace></Navigate>
};

export default AdminRoute;