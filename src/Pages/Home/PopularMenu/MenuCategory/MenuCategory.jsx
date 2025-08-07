import { Link } from "react-router-dom";
import MenuItem from "../../../Shared/MenuItem/MenuItem";
import Cover from "../../../Shared/Cover/Cover";


const MenuCategory = ({ items,title,img,bigTitle }) => {

   
    return (
        <div className="8">
             {title && <Cover img={img} title={title} bigTitle={bigTitle}></Cover>}
            <div className='grid md:grid-cols-2 gap-6 mt-10 '>
                {
                    items.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
              
            </div>
            <div className="  text-center mt-7 mb-7">
                
                 <Link to={`/order/${title}`}>
                 <button className="btn btn-primary uppercase border-0 border-b-2 border-gray-500 bg-slate-50 text-center text-slate-500 hover:bg-slate-800">
                        Order your favorite food
                    </button>
                 </Link>
                
                </div>


        </div>
    );
};

export default MenuCategory;