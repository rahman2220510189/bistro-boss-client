import chefImg from '../../assets/home/chef-service.jpg'; 

const Chef = () => {
    return (
        <div
          className="h-[600px] bg-cover bg-center flex items-center justify-center px-4 mb-24  mx-auto"
          style={{ backgroundImage: `url(${chefImg})` }}
        >
             <div className="bg-white bg-opacity-90 max-w-4xl p-10 rounded shadow-lg text-center">
            <h2 className="text-4xl font-serif mb-4 uppercase tracking-wide">
              Bistro Boss
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus 
              laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius 
              dolore at, nihil iusto ducimus incidunt quibusdam nemo.
            </p>
          </div>
         
        </div>
      );
};

export default Chef;