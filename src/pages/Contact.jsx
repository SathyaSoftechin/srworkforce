import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="min-h-screen bg-white pt-16 md:pt-20">
      <div className="max-w-7xl mx-auto px-6 py-20">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

          {/* Left */}
          <div>
            <p className="text-sm text-gray-500">Get Started</p>
            <h1 className="mt-2 text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
              Get in touch with us. <br />
              We’re here to assist you.
            </h1>
          </div>

          {/* Social Icons */}
          <div className="flex md:justify-end gap-4 text-gray-400">
            <FaFacebookF className="cursor-pointer hover:text-black transition" />
            <FaInstagram className="cursor-pointer hover:text-black transition" />
            <FaTwitter className="cursor-pointer hover:text-black transition" />
          </div>
        </div>

        {/* Form */}
        <form className="mt-12 border border-gray-200 rounded-2xl p-6 md:p-10 space-y-6">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="border-b border-gray-300 outline-none py-3"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="border-b border-gray-300 outline-none py-3"
            />
            <input
              type="text"
              placeholder="Phone Number (optional)"
              className="border-b border-gray-300 outline-none py-3"
            />
          </div>

          <textarea
            rows="4"
            placeholder="Message"
            className="w-full border-b border-gray-300 outline-none py-3 resize-none"
          />

          <button
            type="submit"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
          >
            Leave us a Message →
          </button>
        </form>

        {/* Bottom Info */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10 bg-gray-50 rounded-2xl p-8">

          <div>
            <p className="text-sm text-gray-500">Contact Info</p>
            <h3 className="mt-2 text-2xl font-bold">
              We are always happy to assist you
            </h3>
          </div>

          <div>
            <p className="text-sm text-gray-500">Email Address</p>
            <p className="mt-2 font-medium">info.srworkforce@gmail.com</p>
            <p className="text-sm text-gray-500 mt-1">
              Assistance hours: <br />
              Monday – Friday 6 am to 8 pm IST
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Number</p>
            <p className="mt-2 font-medium">1234567890</p>
            <p className="text-sm text-gray-500 mt-1">
              Assistance hours: <br />
              Monday – Friday 6 am to 8 pm IST
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
