import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import useMenu from '../../../hooks/UseMenu';
import { Link } from 'react-router-dom';

const PopularMenu = () => {
    
    const[menu] = useMenu()
    const popular = menu.filter(item => item.category === 'popular')

    return (
        <section className='mb-12 px-4 md:px-8 lg:px-16'>
            <SectionTitle 
            subHeading={'Check it out'}
            heading={'from our menu'}
            >
            </SectionTitle>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6'>
                {
                    popular.map(item=> <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <div className='text-center mt-8 px-3'>
                <Link to={'/menu'}>
                    <button className="btn btn-outline border-0 border-b-4 text-sm md:text-base px-6 hover:bg-slate-800 hover:text-white transition-all duration-300">
                        View Full Menu
                    </button>
                </Link>
            </div>
        </section>
    );
};

export default PopularMenu;