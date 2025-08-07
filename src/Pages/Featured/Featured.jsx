import SectionTitle from "../../components/SectionTitle/SectionTitle";
import featuredImg from '../../assets/home/featured.jpg'

const Featured = () => {
    return (
        <div className="h-[600px] bg-cover relative bg-fixed  pt-8 my-20 bg-opacity-30" style={{backgroundImage: `url(${featuredImg})`}}>
            <SectionTitle
                subHeading={'Check it out'}
                heading={'from our menu'}

            >

            </SectionTitle>
            <div className="absolute inset-0 bg-black bg-opacity-40 z-0"></div>
            <div className="relative z-10 flex gap-2 md:flex justify-center items-center py-10 px-20 ">
                <div>
                    <img  src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10 text-yellow-50 space-y-2">
                    <p>Aug 20, 2025</p>
                    <p className="uppercase">Where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad in consequatur id quae accusantium laboriosam ducimus commodi, quam, ea, officiis sed molestias. Perferendis, saepe quo, aliquam explicabo magni neque similique natus beatae repellendus vel quia earum amet. Voluptatem animi eos omnis molestiae itaque. Neque, ullam exercitationem consequatur fugit enim atque!</p>
                    <button className="btn btn-outline border-0 border-b-4 uppercase">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;