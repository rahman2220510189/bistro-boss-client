import { PhoneCall, MapPin, Clock } from 'lucide-react';

const Address = () => {
    return (
        
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10 mx-5 px-10 mb-20">
      {/* Phone */}
      <div className="text-center border shadow">
        <div className="bg-yellow-600 py-4 flex justify-center">
          <PhoneCall className="text-white" size={28} />
        </div>
        <div className="  p-6 ">
          <h3 className="text-lg font-semibold mb-2">PHONE</h3>
          <p className="text-sm text-gray-700">+38 (012) 34 56 789</p>
        </div>
      </div>

      {/* Address */}
      <div className="text-center border shadow">
        <div className="bg-yellow-600 py-4 flex justify-center">
          <MapPin className="text-white" size={28} />
        </div>
        <div className="p-6">
          <h3 className="text-lg font-semibold mb-2">ADDRESS</h3>
          <p className="text-sm text-gray-700">+38 (012) 34 56 789</p>
        </div>
      </div>

      {/* Working Hours */}
      <div className="text-center border shadow">
        <div className="bg-yellow-600 py-4 flex justify-center">
          <Clock className="text-white" size={28} />
        </div>
        <div className="  p-6">
            
          <h3 className="text-lg font-semibold mb-2">WORKING HOURS</h3>
          <p className="text-sm text-gray-700">Mon - Fri: 08:00 - 22:00</p>
          <p className="text-sm text-gray-700">Sat - Sun: 10:00 - 23:00</p>
        
        </div>
      </div>
  
    </div>
        
    );
};

export default Address;