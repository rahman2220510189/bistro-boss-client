import useCart from '../../../hooks/useCart';
import { FaTrash } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { Link } from 'react-router-dom';

const MyCart = () => {
    const [cart, refetch] = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)
    const axiosSecure = useAxiosSecure();

    const handleDelete = id =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        })
        .then((result) => {
            if (result.isConfirmed)
                axiosSecure.delete(`/carts/${id}`)
            .then(res=>{
                if(res.data.deletedCount>0){
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                    refetch();
                }
            })
            .catch(error => {
                console.log('Delete failed', error);
            })
        });
    }

    return (
        <div className="px-4 md:px-6 lg:px-8 py-6">

            {/* Summary Bar */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 bg-white shadow-md rounded-xl px-6 py-4 mb-6">
                <div className="text-center sm:text-left">
                    <p className="text-sm text-gray-500 uppercase tracking-wide">Total Items</p>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-700">{cart.length}</h2>
                </div>
                <div className="text-center">
                    <p className="text-sm text-gray-500 uppercase tracking-wide">Total Price</p>
                    <h2 className="text-2xl md:text-3xl font-bold text-orange-500">${totalPrice.toFixed(2)}</h2>
                </div>
                {cart.length ?
                    <Link to='/dashboard/payment'>
                        <button className='btn bg-orange-500 hover:bg-orange-600 text-white border-0 px-8 transition-all duration-200'>
                            Pay Now
                        </button>
                    </Link> :
                    <button disabled className='btn btn-disabled px-8'>
                        Pay Now
                    </button>
                }
            </div>

            {/* Cart Table */}
            <div className="overflow-x-auto rounded-xl shadow-md">
                <table className="table w-full text-sm md:text-base">
                    <thead className="bg-orange-500 text-white">
                        <tr>
                            <th className="py-3 px-4">#</th>
                            <th className="py-3 px-4">Image</th>
                            <th className="py-3 px-4">Name</th>
                            <th className="py-3 px-4">Price</th>
                            <th className="py-3 px-4 text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((item, index) =>
                            <tr key={item._id} className="hover:bg-orange-50 transition-colors duration-150 border-b border-gray-100">
                                <td className="py-3 px-4 font-medium text-gray-500">
                                    {index + 1}
                                </td>
                                <td className="py-3 px-4">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-10 w-10 md:h-12 md:w-12">
                                            <img src={item.image} alt={item.name} />
                                        </div>
                                    </div>
                                </td>
                                <td className="py-3 px-4 font-semibold text-gray-700">
                                    {item.name}
                                </td>
                                <td className="py-3 px-4 text-orange-500 font-bold">
                                    ${item.price}
                                </td>
                                <td className="py-3 px-4 text-center">
                                    <button
                                        onClick={() => handleDelete(item._id)}
                                        className="btn btn-sm btn-ghost hover:bg-red-100 transition-colors duration-200"
                                    >
                                        <FaTrash className='text-red-500' />
                                    </button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>

                {/* Empty State */}
                {cart.length === 0 &&
                    <div className="text-center py-16 text-gray-400">
                        <p className="text-4xl mb-3">🛒</p>
                        <p className="text-lg font-medium">Your cart is empty</p>
                        <p className="text-sm mt-1">Add some delicious items to get started!</p>
                    </div>
                }
            </div>
        </div>
    );
};

export default MyCart;