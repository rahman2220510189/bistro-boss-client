import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const {googleSingIn} = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleGoogleSignIn = () =>{
        googleSingIn()
        .then(result => {
            console.log(result.user)
            const userInfo = {
                email: result.user?.email,
                name: result.user?.displayName
            }
            axiosPublic.post('/users', userInfo)
            .then(res=>{
               console.log(res.data) 
               navigate('/')
            })
        })
        .catch(error => {
            console.log(error)
        } )
    }
     return (
        <div>
            <div>
                <button onClick={handleGoogleSignIn} className="btn text-gray-700">
                    <FaGoogle className="text-green-500"></FaGoogle>

                    Google
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;