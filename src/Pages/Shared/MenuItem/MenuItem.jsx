const MenuItem = ({item}) => {
    const {name, image, price, recipe} = item
    return (
        <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
            <img
                style={{borderRadius: '0 200px 200px 200px'}}
                className="w-20 h-20 md:w-24 md:h-24 object-cover flex-shrink-0"
                src={image}
                alt={name}
            />
            <div className="flex-1 min-w-0">
                <h3 className="uppercase font-semibold text-sm md:text-base text-gray-800 truncate">
                    {name}
                </h3>
                <p className="text-xs md:text-sm text-gray-500 mt-1 line-clamp-2 leading-relaxed">
                    {recipe}
                </p>
            </div>
            <p className="text-yellow-500 font-bold text-sm md:text-base flex-shrink-0">
                ${price}
            </p>
        </div>
    );
};

export default MenuItem;