import { Parallax } from 'react-parallax';

const Cover = ({img, title}) => {
    return (
        <Parallax
        blur={{ min: -20, max: 15 }}
        bgImage={img}
        bgImageAlt="the menu"
        strength={-200}
    >
        <div className="hero h-[300px] md:h-[500px] lg:h-[700px]">
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content bg-slate-800 bg-opacity-90 w-[90%] md:w-auto max-w-4xl px-6 py-8 md:p-10 rounded shadow-lg text-center">
                <div className="max-w-md mx-auto my-3 md:my-5">
                    <h1 className="mb-3 md:mb-5 text-2xl md:text-4xl lg:text-5xl font-bold uppercase">{title}</h1>
                    <p className="mb-3 md:mb-5 text-sm md:text-base tracking-widest">
                        WOULD YOU LIKE TO TRY A DISH?
                    </p>
                </div>
            </div>
        </div>
    </Parallax>
    );
};

export default Cover;