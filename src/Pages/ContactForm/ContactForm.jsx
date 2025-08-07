import { Send } from "lucide-react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const ContactForm = () => {
    const handleSubmit =(e)=>{
        e.preventDefault();
        const from = e.target 
        const name = from.name.value;
        const email = from.email.value;
        const message = from.message.value;
        const phone = from.phone.value;
        console.log(name,email,phone,message)

        e.target.reset();
    }


  return (

    <div className="bg-gray-100 px-6 m-11 py-10 md:px-20 mt-16 mb-8">
     
      <form onSubmit={handleSubmit}
       className="bg-white p-12 mt-10 mb-10 shadow-md rounded space-y-6 max-w-4xl mx-auto ">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-1 font-semibold text-gray-700">Name*</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold text-gray-700">Email*</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>
        </div>

        <div>
          <label className="block mb-1 font-semibold text-gray-700">Phone*</label>
          <input
            type="number"
            name="phone"
            placeholder="Enter your phone number"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold text-gray-700">Message*</label>
          <textarea
            rows="6"
            name="message"
            placeholder="Write your message here"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          ></textarea>
        </div>

        {/* Recaptcha placeholder */}
        {/* <div className="bg-white border border-gray-200 px-4 py-3">
          <p className="text-sm text-gray-600">[reCAPTCHA goes here]</p>
        </div> */}

        {/* Submit Button */}
        <div className="text-center">
          <button className="bg-yellow-700 text-white px-6 py-2 rounded hover:bg-yellow-800 flex items-center justify-center gap-2 mx-auto">
            Send Message <Send className="w-4 h-4" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
