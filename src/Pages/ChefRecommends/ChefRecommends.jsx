import { useEffect, useState } from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import Recomends from '../Recommends/Recomends';

const ChefRecommends = () => {
    const [recommends, setRecommends] = useState([])

    useEffect(()=>{
        fetch('https://bistro-boss-server-production-d1dd.up.railway.app/menu')
        .then(res=> res.json())
        .then(data =>{
            const shouldBy = data.filter(rec=> rec.category === 'salad')
            setRecommends(shouldBy)
        })
    },[])

    return (
        <section className='mb-12 md:mb-16 mt-6 px-4 md:px-8 lg:px-16'>
            <SectionTitle
                subHeading={'Should Try'}
                heading={'chef recommends'}
            >
            </SectionTitle>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6 gap-4 md:gap-6'>
                {
                    recommends.length > 0
                    ? recommends.map(rec =>
                        <Recomends key={rec._id} rec={rec}></Recomends>
                    )
                    : <div className="col-span-full text-center py-16 text-gray-400">
                        <p className="text-4xl mb-3">🍽️</p>
                        <p className="text-lg font-medium">Loading recommendations...</p>
                    </div>
                }
            </div>
        </section>
    );
};

export default ChefRecommends;