import { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import useMenu from '../../../hooks/UseMenu';
import { Link } from 'react-router-dom';

const PopularMenu = () => {
    // const [menu, setMenu] = useState([]);
    // useEffect(()=>{
    //     fetch('menu.json')
    //     .then(res => res.json())
    // .then(data =>{
    //     const popularItem = data.filter(item => item.category === 'popular')

    // setMenu(popularItem)})

    // }, [])
    const[menu] = useMenu()
    const popular = menu.filter(item => item.category === 'popular')

    return (
        <section className='mb-12'>
            <SectionTitle 
            subHeading={'Check it out'}
            heading={'from our menu'}
            >

            </SectionTitle>
            <div className='grid md:grid-cols-2 gap-6'>
                {
                    popular.map(item=> <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <div className='text-center px-3'>
                <Link to={'/menu'}>
                <button className="btn btn-outline border-0 border-b-4  ">View Full Menu</button>

                </Link>
            </div>
        </section>
    );

};

export default PopularMenu;