const SharedItems = ({img, bigTitle, title}) => {
    return (
        <div
            className="h-[300px] md:h-[450px] lg:h-[600px] bg-cover bg-center flex items-center justify-center px-4 md:px-8 mb-10 md:mb-16 mx-auto"
            style={{ backgroundImage: `url(${img})` }}
        >
            <div className="bg-slate-900 bg-opacity-90 w-[90%] md:w-auto max-w-4xl px-6 py-8 md:p-10 rounded shadow-lg text-center">
                <h2 className="text-2xl md:text-3xl lg:text-4xl text-slate-100 font-serif mb-3 md:mb-4 uppercase tracking-wide leading-snug">
                    {bigTitle}
                </h2>
                <p className="text-slate-300 text-sm md:text-base lg:text-lg leading-relaxed">
                    {title}
                </p>
            </div>
        </div>
    );
};

export default SharedItems;