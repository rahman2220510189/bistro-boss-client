import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import SocialLogin from "../../components/SocialLogin/SocialLogin";

const SignUp = () => {
    const axiosPublic = useAxiosPublic();

    const {crateUser, updateUserProfile} = useContext(AuthContext);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const navigate = useNavigate()
    const location = useLocation();
   const from = location.state?.from?.pathname || "/";
    const onSubmit = data => {
        console.log(data)
        crateUser(data.email, data.password)
        .then(result=>{
           const loggedUser = result.user;
           console.log(loggedUser)
           updateUserProfile(data.name, data.photoURL)
           .then(()=>{
            const userInfo ={
                name: data.name,
                email: data.email,
            }
            axiosPublic.post('/users', userInfo)
            .then(res=>{
                if(res.data.insertedId){
                    console.log('user added a database')
                    reset()
                    Swal.fire({
                        title: "User Created Successfully",
                        icon: "success",
                        draggable: true
                      });

                }
            })
            
           
           })
           .catch(error => console.log(error))
           navigate(from, { replace: true });
        })
    };
    

    return (
        <>
        <Helmet>
            <title>Bistro Boss | Sign Up</title>
        </Helmet>
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Sign up now!</h1>

                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="Name" name="name"  {...register("name")} placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="Name"   {...register("photoURL")} placeholder="Photo URL" className="input input-bordered" required/>
                            
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email"  {...register("email")} placeholder="email" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password"  {...register("password", { required: true, minLength: 6, maxLength: 20,
                             pattern: {
                                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/,
                                message:
                                  "Password must include at least one uppercase, one lowercase, one number and be 6 characters long",
                              },
                               
                             })} name="password"
                          
                            placeholder="password" className="input input-bordered" required />
                              {errors.password && <span className="text-red-500">{errors.password.message}</span>}
                           
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary w-full" type="submit" value='Sign Up' />
                          
                        </div>
                        <div className="text-center mb-2">
                            <SocialLogin></SocialLogin>
                        </div>
                    </form>
                    <p className="text-center mb-5"><small>Already have an account <Link to='/login'></Link></small></p>
                </div>
            </div>
        </div>
        </>
    );
};

export default SignUp;