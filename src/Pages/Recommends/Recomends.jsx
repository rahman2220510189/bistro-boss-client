import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";

const Recomends = ({rec}) => {
    const {name, image, price, recipe , _id} = rec;
   const {user} = useAuth();
   const navigate = useNavigate();
   const location = useLocation();
   const axiosSecure = useAxiosSecure();
   const [, refetch] =useCart()
   const from = location.state?.from?.pathname || '/login'
    const handleAddToCart= food =>{
       if(user && user.email){
        console.log(food, user.email);
        const cartItem = {
            menuId: _id,
            email: user.email,
            name,
            image,
            price,
        }
        axiosSecure.post('/carts', cartItem)
        .then(res =>{
            console.log(res.data)
            if(res.data.insertedId) {
                Swal.fire({
                    title: "WOW!",
                    text: `${name}item is added to your card.`,
                    imageUrl: `${image}`,
                    imageWidth: 400,
                    imageHeight: 200,
                    imageAlt: "Custom image"
                  }); 
                  refetch(); 
            }
        })

       }
       else{
        Swal.fire({
            title: "you are not logged in",
            text: "Please login to add to the cart?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, login!"
          }).then((result) => {
            if (result.isConfirmed) {
             navigate('/login', {state:{from: location}})
            }
          });
       }

    }
    return (
        <div className="card card-compact bg-base-100 w-full max-w-sm mx-auto shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <figure className="relative overflow-hidden">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-48 md:h-56 object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2 right-2 bg-black bg-opacity-70 text-white text-sm font-semibold px-3 py-1 rounded-full">
                    ${price}
                </div>
            </figure>
            <div className="card-body text-center items-center space-y-2 p-4 md:p-6">
                <h2 className="card-title text-base md:text-lg font-bold text-center">{name}</h2>
                <p className="text-sm text-gray-500 leading-relaxed">{recipe}</p>
                <div className="card-actions justify-center w-full mt-2">
                    <button
                        onClick={() => handleAddToCart(rec)}
                        className="btn btn-primary uppercase bg-slate-300 text-yellow-500 hover:bg-slate-800 hover:text-white border-0 border-b-2 border-yellow-200 transition-all duration-300 w-full md:w-auto px-6"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Recomends;