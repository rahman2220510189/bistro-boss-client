import { Send } from "lucide-react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const ContactForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const from = e.target
        const name = from.name.value;
        const email = from.email.value;
        const message = from.message.value;
        const phone = from.phone.value;
        console.log(name, email, phone, message)
        e.target.reset();
    }

    return (
        <div className="bg-gray-100 px-4 md:px-8 lg:px-20 py-10 md:py-16 my-8 md:my-12">
            <SectionTitle
                heading="Contact Us"
                subHeading="Have a question? We'd love to hear from you"
            />

            <form
                onSubmit={handleSubmit}
                className="bg-white p-6 md:p-10 lg:p-12 shadow-md rounded-xl space-y-5 max-w-4xl mx-auto"
            >
                {/* Name & Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <div>
                        <label className="block mb-1 font-semibold text-gray-700 text-sm md:text-base">
                            Name*
                        </label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            required
                            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-200"
                        />
                    </div>
                    <div>
                        <label className="block mb-1 font-semibold text-gray-700 text-sm md:text-base">
                            Email*
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            required
                            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-200"
                        />
                    </div>
                </div>

                {/* Phone */}
                <div>
                    <label className="block mb-1 font-semibold text-gray-700 text-sm md:text-base">
                        Phone*
                    </label>
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Enter your phone number"
                        required
                        className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-200"
                    />
                </div>

                {/* Message */}
                <div>
                    <label className="block mb-1 font-semibold text-gray-700 text-sm md:text-base">
                        Message*
                    </label>
                    <textarea
                        rows="5"
                        name="message"
                        placeholder="Write your message here..."
                        required
                        className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-yellow-500 resize-none transition-all duration-200"
                    ></textarea>
                </div>

                {/* Submit Button */}
                <div className="text-center pt-2">
                    <button
                        type="submit"
                        className="bg-yellow-700 hover:bg-yellow-800 active:scale-95 text-white px-8 py-2.5 rounded-lg flex items-center justify-center gap-2 mx-auto text-sm md:text-base font-semibold transition-all duration-200 shadow-md hover:shadow-lg"
                    >
                        Send Message <Send className="w-4 h-4" />
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;