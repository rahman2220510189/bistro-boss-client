import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";

const AdminRoute = ({Children}) => {
    const {user, loading} = useAuth();
   const[isAdmin, isAdminLoading] = useAdmin()
   const location = useLocation();
if(loading || isAdminLoading){
    return <progress className="progress progress-primary w-56" value="100" max="100"></progress>
}
if(user && isAdmin){
    return Children;
}

return <Navigate to='/' state={{from: location}} replace></Navigate>

};

export default AdminRoute;

