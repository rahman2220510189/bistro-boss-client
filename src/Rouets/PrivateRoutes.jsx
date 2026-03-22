import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({Children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return (
            <div className="min-h-screen flex flex-col items-center justify-center gap-4">
                <span className="loading loading-spinner loading-lg text-primary"></span>
                <p className="text-sm text-gray-500 animate-pulse">Please wait...</p>
                <progress className="progress progress-primary w-56 md:w-72" value="100" max="100"></progress>
            </div>
        )
    }

    if(user){
        return Children;
    }

    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default PrivateRoutes;