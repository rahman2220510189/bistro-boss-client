import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from '../../../hooks/useAxiosPublic'
import useAxiosSecure from '../../../hooks/useAxiosSecure'
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = () => {
    const {name, category, recipe, price, _id} = useLoaderData();
    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure()

    const onSubmit = async(data) =>{
        console.log(data)
        const imgFile = {image: data.image[0]};
        const res = await axiosPublic.post(image_hosting_api, imgFile,{
            headers:{
                'content-type': 'multipart/form-data'
            }
        })
        if (res.data.success){
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url,
            }
            const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem)
            console.log(menuRes.data)
            if(menuRes.data.modifiedCount > 0){
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} has been updated successfully`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
        console.log('with image url', res.data)
    }

    return (
        <div className="px-4 md:px-6 lg:px-8 py-6">
            <SectionTitle heading="Update Item" subHeading='edit & save'></SectionTitle>

            <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-4xl mx-auto bg-white shadow-md rounded-xl p-6 md:p-10">

                {/* Recipe Name */}
                <label className="form-control w-full mb-4">
                    <div className="label">
                        <span className="label-text font-semibold text-gray-700">Recipe Name*</span>
                    </div>
                    <input
                        type="text"
                        defaultValue={name}
                        placeholder="Enter recipe name"
                        {...register("name", {required: true})}
                        className="input input-bordered w-full transition-all duration-200"
                    />
                </label>

                {/* Category & Price */}
                <div className="flex flex-col md:flex-row gap-4 md:gap-6 w-full">
                    <label className="form-control w-full mb-4">
                        <div className="label">
                            <span className="label-text font-semibold text-gray-700">Category*</span>
                        </div>
                        <select
                            defaultValue={category}
                            {...register('category', {required: true})}
                            className="select select-bordered w-full transition-all duration-200"
                        >
                            <option disabled value='default'>Select a category</option>
                            <option value="salad">Salad</option>
                            <option value="pizza">Pizza</option>
                            <option value="soup">Soup</option>
                            <option value="dessert">Dessert</option>
                            <option value="drinks">Drinks</option>
                        </select>
                    </label>

                    <label className="form-control w-full mb-4">
                        <div className="label">
                            <span className="label-text font-semibold text-gray-700">Price*</span>
                        </div>
                        <input
                            type="number"
                            defaultValue={price}
                            placeholder="Enter price"
                            {...register("price", {required: true})}
                            className="input input-bordered w-full transition-all duration-200"
                        />
                    </label>
                </div>

                {/* Details */}
                <label className="form-control w-full mb-4">
                    <div className="label">
                        <span className="label-text font-semibold text-gray-700">Recipe Details*</span>
                    </div>
                    <textarea
                        defaultValue={recipe}
                        className="textarea textarea-bordered h-28 w-full resize-none transition-all duration-200"
                        {...register("recipe", {required: true})}
                        placeholder="Describe the recipe..."
                    ></textarea>
                </label>

                {/* File Upload */}
                <div className="form-control w-full mb-6">
                    <div className="label">
                        <span className="label-text font-semibold text-gray-700">Update Image*</span>
                    </div>
                    <input
                        {...register("image", {required: true})}
                        type="file"
                        accept="image/*"
                        className="file-input file-input-bordered w-full transition-all duration-200"
                    />
                </div>

                {/* Submit Button */}
                <div className="text-center md:text-left">
                    <button className="btn bg-orange-500 hover:bg-orange-600 text-white border-0 btn-wide transition-all duration-300 gap-2">
                        Update Item <FaUtensils />
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UpdateItem;