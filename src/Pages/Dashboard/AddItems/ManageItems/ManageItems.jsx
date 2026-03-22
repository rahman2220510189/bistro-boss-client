import { FaEdit, FaTrash } from "react-icons/fa";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../../hooks/UseMenu";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const ManageItems = () => {
    const [menu, , refetch] = useMenu();
    const axiosSecure = useAxiosSecure();

    const handleDelete = (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async(result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/menu/${item._id}`)
                console.log(res.data)
                if(res.data.deletedCount > 0){
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title:`${item.name} has been deleted`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            }
        });
    }

    return (
        <div className="px-4 md:px-6 lg:px-8 py-6">
            <SectionTitle heading='Manage Items' subHeading='hurry up'></SectionTitle>

            <div className="overflow-x-auto rounded-xl shadow-md">
                <table className="table w-full text-sm md:text-base">
                    <thead className="bg-orange-500 text-white">
                        <tr>
                            <th className="py-3 px-4">#</th>
                            <th className="py-3 px-4">Image</th>
                            <th className="py-3 px-4">Item Name</th>
                            <th className="py-3 px-4">Price</th>
                            <th className="py-3 px-4 text-center">Update</th>
                            <th className="py-3 px-4 text-center">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {menu.map((item, index) =>
                            <tr key={item._id} className="hover:bg-orange-50 transition-colors duration-150 border-b border-gray-100">
                                <td className="py-3 px-4 font-medium text-gray-500">
                                    {index + 1}
                                </td>
                                <td className="py-3 px-4">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-10 w-10 md:h-12 md:w-12">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                            />
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
                                    <Link to={`/dashboard/updateItem/${item._id}`}>
                                        <button className="btn btn-sm bg-orange-500 hover:bg-orange-600 border-0 text-white transition-colors duration-200">
                                            <FaEdit />
                                        </button>
                                    </Link>
                                </td>
                                <td className="py-3 px-4 text-center">
                                    <button
                                        onClick={() => handleDelete(item)}
                                        className="btn btn-sm btn-ghost hover:bg-red-100 transition-colors duration-200"
                                    >
                                        <FaTrash className='text-red-500' />
                                    </button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageItems;