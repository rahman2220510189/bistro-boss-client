import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
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
        <div className="card card-compact bg-base-100 w-96 shadow-xl flex space-x-4">
  <figure>
  <div className="relative">
  <img
      src={image}
      alt="Shoes" />
      <div className="absolute top-2 right-2 bg-black text-white text-sm px-2 py-1 rounded">
      ${price}
    </div>
  </div>
  </figure>
  <div className="card-body text-center items-center space-y-1">
    <h2 className="card-title text-center">{name}</h2>
    <p>{recipe}</p>
    <div className="card-actions justify-end">
      <button onClick={() => handleAddToCart(rec)} 
       className="btn btn-primary uppercase bg-slate-300 text-yellow-500 hover:bg-slate-800 border-0 border-b-2 border-yellow-200">Add to card</button>
    </div>
  </div>
</div>
    );
};

export default Recomends;