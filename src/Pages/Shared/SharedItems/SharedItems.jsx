
const SharedItems = ({img, bigTitle, title}) => {
    return (
       <div
                 className="h-[600px] bg-cover bg-center  flex items-center justify-center px-4 mb-16  mx-auto"
                 style={{ backgroundImage: `url(${img})` }}
               >
                    <div className="bg-slate-900 bg-opacity-90 max-w-4xl p-10 rounded shadow-lg text-center">
                   <h2 className="text-4xl text-slate-100 font-serif mb-4 uppercase tracking-wide">
                     {bigTitle}
                   </h2>
                   <p className="text-slate-100 text-lg leading-relaxed">
                    {title}
                   </p>
                 </div>
                
               </div>
    );
};

export default SharedItems;