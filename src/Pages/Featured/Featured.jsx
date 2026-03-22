import SectionTitle from "../../components/SectionTitle/SectionTitle";
import featuredImg from '../../assets/home/featured.jpg'

const Featured = () => {
    return (
        <div
            className="bg-cover bg-center bg-fixed relative pt-8 my-12 md:my-20"
            style={{backgroundImage: `url(${featuredImg})`}}
        >
            <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>

            <div className="relative z-10">
                <SectionTitle
                    subHeading={'Check it out'}
                    heading={'from our menu'}
                >
                </SectionTitle>

                <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10 py-8 md:py-12 px-4 md:px-12 lg:px-24 pb-12 md:pb-16">
                    <div className="w-full md:w-1/2 lg:w-2/5 flex-shrink-0">
                        <img
                            src={featuredImg}
                            alt="Featured dish"
                            className="w-full h-56 md:h-72 lg:h-80 object-cover rounded-lg shadow-lg"
                        />
                    </div>
                    <div className="w-full md:w-1/2 text-yellow-50 space-y-3 md:space-y-4 text-center md:text-left">
                        <p className="text-sm text-yellow-300 font-medium tracking-wide">Aug 20, 2025</p>
                        <p className="uppercase font-bold text-lg md:text-xl tracking-widest">Where can i get some?</p>
                        <p className="text-sm md:text-base leading-relaxed text-yellow-100 opacity-90">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad in consequatur id quae accusantium laboriosam ducimus commodi, quam, ea, officiis sed molestias. Perferendis, saepe quo, aliquam explicabo magni neque similique natus beatae repellendus vel quia earum amet.
                        </p>
                        <button className="btn btn-outline border-0 border-b-4 uppercase text-sm md:text-base hover:bg-yellow-500 hover:text-black hover:border-yellow-500 transition-all duration-300">
                            Order Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;