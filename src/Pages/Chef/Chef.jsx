import chefImg from '../../assets/home/chef-service.jpg';

const Chef = () => {
    return (
        <div
            className="h-[300px] md:h-[450px] lg:h-[600px] bg-cover bg-center flex items-center justify-center px-4 mb-16 md:mb-24 mx-auto"
            style={{ backgroundImage: `url(${chefImg})` }}
        >
            <div className="bg-white bg-opacity-90 w-[90%] md:w-auto max-w-4xl px-6 py-8 md:p-10 rounded-xl shadow-lg text-center">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif mb-3 md:mb-4 uppercase tracking-wide text-gray-800">
                    Bistro Boss
                </h2>
                <p className="text-gray-600 text-sm md:text-base lg:text-lg leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus
                    laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius
                    dolore at, nihil iusto ducimus incidunt quibusdam nemo.
                </p>
            </div>
        </div>
    );
};

export default Chef;