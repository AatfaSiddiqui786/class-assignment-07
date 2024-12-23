'use client'
import { useState, ChangeEvent, FormEvent } from "react";
import { FaEnvelope } from "react-icons/fa";

// Define the structure for the form data
interface FormData {
  name: string;
  email: string;
  phone:string;
  message: string;
}

const Contact = () => {
  // Initialize the form data state
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone:"",
    message: "",
  });

  // Handle form input changes
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert("Message sent!");
  };

  return (
    <div className="animate-slide-up"style={{ backgroundImage: 'url("/images/background.jpg")' }} >
      <div className="text-white p-8 flex flex-col md:flex-row justify-between items-center gap-10 relative">
        
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-cover bg-center bg-opacity-30"></div>

        {/* Contact Information Section */}
        <div className="relative z-10 space-y-8 w-full md:w-1/2">
          <h2 className="text-3xl font-bold text-white  mb-4">You Can Contact Me Here</h2>
          <div className=" bg-opacity-70 p-6 border-2 border-white rounded-lg shadow-lg flex items-center gap-3 w-full mb-4 md:w-auto">
            <FaEnvelope className="text-blue-900 text-xl font-extrabold" />
            <span className="text-lg font-bold text-white">aatfasiddiqui@gmail.com</span>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className=" bg-opacity-90 p-8 rounded-lg shadow-lg w-full md:w-1/2 space-y-6 relative z-10">
          <h2 className=" boder-white text-3xl font-bold text-blue-500 mb-4">Contact Me</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Input */}
            <div>
              <label htmlFor="name" className="block text-lg">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 rounded-md bg-gray-100 text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-lg">Email address:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 rounded-md bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            {/* Phone Input */}
            <div>
              <label htmlFor="phone" className="block text-lg">Phone:</label>
              <input
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 rounded-md bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Message Input */}
            <div>
              <label htmlFor="message" className="block text-lg">Message:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 rounded-md bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={4}
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-blue-700 text-white hover:bg-blue-600 transition duration-300 py-2 px-4 rounded block mx-auto"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
