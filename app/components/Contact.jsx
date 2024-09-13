import Image from "next/image";

const Contact = () => {
  return (
    <div
      className="flex justify-center items-center py-10 bg-white"
      id="#contact"
    >
      <div className="w-10/12 flex shadow-lg rounded-lg overflow-hidden">
        {/* Left section - Contact Details */}
        <div className="w-1/2 p-16 bg-[#e1f8fe]">
          <h2 className="text-3xl text-blue-600 montserrat-bold flex items-center">
            <span className="">Get In Touch</span>
          </h2>
          <h3 className="text-3xl mb-8">Let’s Discuss Work!</h3>

          {/* Contact Info */}
          <div className="mb-6">
            <div className="flex items-center mb-2">
              📞
              <span className="ml-3 font-semibold">Call Me</span>
            </div>
            <p className="ml-8 text-gray-700">+91 9241364377</p>
          </div>

          <div className="mb-6">
            <div className="flex items-center mb-2">
              📧
              <span className="ml-3 font-semibold">Email</span>
            </div>
            <p className="ml-8 text-gray-700">zeyaimran.techsunset@gmail.com</p>
          </div>

          <div>
            <div className="flex items-center mb-2">
              🏠
              <span className="ml-3 font-semibold">Address</span>
            </div>
            <p className="ml-8 text-gray-700">
              Ashok rajpath, Patna, Bihar, India
            </p>
          </div>
        </div>

        {/* Right section - Contact Form */}
        <div className="w-1/2 p-16 bg-[#ffd640] border ">
          <form>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="Full Name"
                className="border-2 border-gray-500 rounded-lg p-2 w-full bg-inherit"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="border-2 border-gray-500 rounded-lg p-2 w-full bg-inherit"
              />
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="Your Phone"
                className="border-2 border-gray-500 rounded-lg p-2 w-full bg-inherit"
              />
              <input
                type="text"
                placeholder="Subject"
                className="border-2 border-gray-500 rounded-lg p-2 w-full bg-inherit"
              />
            </div>
            <div className="mb-4">
              <textarea
                placeholder="Message"
                rows="4"
                className="border-2 border-gray-500 rounded-lg p-2 w-full bg-inherit"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg w-full"
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
