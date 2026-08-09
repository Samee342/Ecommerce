import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactPage = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen">
      {/* HERO */}
      <section className=" dark:bg-slate-700  bg-purple-600 text-white py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">Get in Touch</h1>
        <p className="text-lg opacity-90 max-w-xl mx-auto">
          Have questions about our products or your order? Our team is here to
          help you anytime.
        </p>
      </section>

      {/* CONTACT CARDS */}
      <section className="max-w-6xl mx-auto px-4 -mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-6 text-center hover:scale-105 transition">
          <FaMapMarkerAlt className="text-blue-600 text-3xl mx-auto mb-3" />
          <h3 className="font-semibold text-lg dark:text-white">Location</h3>
          <p className="text-gray-600 dark:text-gray-400">Butwal, Nepal</p>
        </div>

        <div className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-6 text-center hover:scale-105 transition">
          <FaPhoneAlt className="text-blue-600 text-3xl mx-auto mb-3" />
          <h3 className="font-semibold text-lg dark:text-white">Phone</h3>
          <p className="text-gray-600 dark:text-gray-400">+977-9800000000</p>
        </div>

        <div className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-6 text-center hover:scale-105 transition">
          <FaEnvelope className="text-blue-600 text-3xl mx-auto mb-3" />
          <h3 className="font-semibold text-lg dark:text-white">Email</h3>
          <p className="text-gray-600 dark:text-gray-400">
            support@yourstore.com
          </p>
        </div>
      </section>

      {/* MAIN SECTION */}
      <section className="max-w-2xl  mx-auto px-4 py-16  ">
        {/* FORM */}
        <div className="bg-white dark:bg-gray-800 shadow-2xl rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-6 dark:text-white">
            Send us a message
          </h2>

          <form className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="p-3 rounded-lg border border-slate-200 dark:border-gray-600 bg-white dark:bg-gray-700 dark:text-white"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="p-3 rounded-lg border border-slate-200 dark:border-gray-600 bg-white dark:bg-gray-700 dark:text-white"
              />
            </div>

            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 rounded-lg border border-slate-200 dark:border-gray-600 bg-white dark:bg-gray-700 dark:text-white"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full p-3 rounded-lg border border-slate-200 dark:border-gray-600 bg-white dark:bg-gray-700 dark:text-white"
            ></textarea>

            <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-lg font-medium hover:opacity-90 transition">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
