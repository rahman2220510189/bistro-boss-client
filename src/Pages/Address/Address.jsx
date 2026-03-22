import { PhoneCall, MapPin, Clock } from 'lucide-react';

const Address = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 my-8 md:my-10 px-4 md:px-8 lg:px-16 mb-12 md:mb-20">

            {/* Phone */}
            <div className="text-center border border-gray-100 shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="bg-yellow-600 py-5 flex justify-center items-center">
                    <PhoneCall className="text-white" size={28} />
                </div>
                <div className="p-5 md:p-6 bg-gray-900">
                    <h3 className="text-base md:text-lg font-semibold mb-2 text-white tracking-widest">PHONE</h3>
                    <p className="text-sm text-gray-300">+38 (012) 34 56 789</p>
                </div>
            </div>

            {/* Address */}
            <div className="text-center border border-gray-100 shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="bg-yellow-600 py-5 flex justify-center items-center">
                    <MapPin className="text-white" size={28} />
                </div>
                <div className="p-5 md:p-6 bg-gray-900">
                    <h3 className="text-base md:text-lg font-semibold mb-2 text-white tracking-widest">ADDRESS</h3>
                    <p className="text-sm text-gray-300">123 Main Street, Dhaka, Bangladesh</p>
                </div>
            </div>

            {/* Working Hours */}
            <div className="text-center border border-gray-100 shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="bg-yellow-600 py-5 flex justify-center items-center">
                    <Clock className="text-white" size={28} />
                </div>
                <div className="p-5 md:p-6 bg-gray-900">
                    <h3 className="text-base md:text-lg font-semibold mb-2 text-white tracking-widest">WORKING HOURS</h3>
                    <p className="text-sm text-gray-300">Mon - Fri: 08:00 - 22:00</p>
                    <p className="text-sm text-gray-300 mt-1">Sat - Sun: 10:00 - 23:00</p>
                </div>
            </div>

        </div>
    );
};

export default Address;