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
      const res = await  axiosPublic.post(image_hosting_api, imgFile,{
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
        image:res.data.data.display_url,

      }
      const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem)
      console.log(menuRes.data)
      if(menuRes.data.modifiedCount> 0){
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.name} is updated a to the menu`,
          showConfirmButton: false,
          timer: 1500
        });
      }
      }
      console.log('with image url',res.data)
    }
       
    
  
    return (
        <div>
        <SectionTitle heading="what's new?" subHeading='add an item'></SectionTitle>
       
        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-4xl mx-auto">
{/* Recipe Name */}
<label className="form-control w-full my-6">
<span className="label-text">Recipe Name*</span>
<input
  type="text"
  defaultValue={name}
  placeholder="Recipe Name"
  {...register("name" ,{required:true})}
  
  className="input input-bordered w-full"
/>
</label>

{/* Category & Price */}
<div className="flex flex-col md:flex-row gap-6 w-full">
<label className="form-control w-full my-6">
  <span className="label-text">Category*</span>
  <select defaultValue={category} {...register('category', {required:true})} className="select select-bordered w-full">
    <option disabled value='default'>select a category</option>
    <option value="salad">Salad</option>
    <option value="pizza">Pizza</option>
    <option value="soup">Soup</option>
    <option value="dessert">Dessert</option>
    <option value="drinks">Drinks</option>
  </select>
</label>

<label className="form-control w-full my-6">
  <span className="label-text">Price*</span>
  <input
    type="text"
    defaultValue={price}
    placeholder="Price"
    {...register("price" , {required:true})}
    className="input input-bordered w-full"
  />
</label>
</div>

{/* Details */}
<label className="form-control w-full my-6">
<span className="label-text">Details</span>
<textarea
defaultValue={recipe}
  className="textarea textarea-bordered h-24 w-full"
  {...register("recipe", {required:true})}
  placeholder="details"
></textarea>
</label>

{/* File Upload */}
<div className="form-control w-full my-6">
<input    {...register("image", {required:true})}  type="file" className="file-input file-input-bordered w-full" />
</div>

{/* Submit Button */}
<button className="btn btn-wide mt-4">
Update Item <FaUtensils className="ml-2" />
</button>
</form>

    </div>

);
    
};

export default UpdateItem;