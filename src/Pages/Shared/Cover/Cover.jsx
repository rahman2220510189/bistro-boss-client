import { Parallax, Background } from 'react-parallax';
const Cover = ({img, title}) => {
    return (
        <Parallax
        blur={{ min: -20, max: 15 }}
        bgImage={img}
        bgImageAlt="the menu"
        strength={-200}
    >
        
        <div 
             className="hero h-[700px]"
            //  style={{ backgroundImage: `url("${img}")` }}

>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content  bg-slate-800 bg-opacity-90 max-w-4xl p-10 rounded shadow-lg text-center">
    <div className=" max-w-md mx-40 my-5">
      <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
      <p className="mb-5">
     WOULD YOU LIKE TO TRY A DISH?
      </p>
    </div>
  </div>
</div>
    </Parallax>
        

    
    );
};

export default Cover;