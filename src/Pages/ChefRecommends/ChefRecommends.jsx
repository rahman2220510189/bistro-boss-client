import React, { useEffect, useState } from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import Recomends from '../Recommends/Recomends';


const ChefRecommends = () => {
    const [recommends, setRecommends] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/menu')
        .then(res=> res.json())
        .then(data =>{
            const shouldBy = data.filter(rec=> rec.category === 'salad')
            setRecommends(shouldBy)

        }

        )

    },[])
    
    return (
        

        <section className='mb-12 mt-5'>
            <SectionTitle 
            subHeading={'Should Try'}
            heading={'chef recommenDs'}

            >


            </SectionTitle>
            <div className='grid md:grid-cols-3 mt-4 gap-4'>
                {
                    recommends.map(rec=><Recomends key={rec._id} rec={rec}></Recomends>)
                }
            </div>
        </section>
    );
};

export default ChefRecommends;

