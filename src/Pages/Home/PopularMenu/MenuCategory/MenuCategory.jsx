import { Link } from "react-router-dom";
import MenuItem from "../../../Shared/MenuItem/MenuItem";
import Cover from "../../../Shared/Cover/Cover";


const MenuCategory = ({ items, title, img, bigTitle }) => {

    return (
        <div className="w-full px-4 md:px-8 lg:px-16">
            {title && <Cover img={img} title={title} bigTitle={bigTitle}></Cover>}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-8 md:mt-10'>
                {
                    items.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <div className="text-center mt-8 mb-8">
                <Link to={`/order/${title}`}>
                    <button className="btn btn-primary uppercase border-0 border-b-2 border-gray-500 bg-slate-50 text-sm md:text-base text-slate-500 hover:bg-slate-800 hover:text-white transition-all duration-300 px-6 py-2 rounded">
                        Order your favorite food
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default MenuCategory;