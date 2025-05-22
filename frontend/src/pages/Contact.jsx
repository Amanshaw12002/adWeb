import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-18 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-md p-8">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h1>
        <p className="text-gray-600 mb-6">
          Welcome to <span className="font-semibold text-blue-600">TrackSwift Logistics</span> — your reliable partner for fast, secure, and trackable shipments worldwide. We help individuals and businesses ship packages with full visibility from origin to destination.
        </p>

        {/* Services */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Our Shipping Services</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li>Real-time shipment tracking</li>
            <li>Domestic and international shipping</li>
            <li>Bulk and B2B shipping solutions</li>
            <li>Safe packaging and shipping insurance</li>
            <li>Business shipping accounts</li>
            <li>API integration for online stores</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="mb-8 grid md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">Get in Touch</h2>
            <p className="text-gray-600 mb-2">
              📧 Email: <a href="mailto:support@trackswift.com" className="text-blue-600 underline">support@trackswift.com</a>
            </p>
            <p className="text-gray-600 mb-2">📞 Phone: +1 (800) 456-7890</p>
            <p className="text-gray-600 mb-2">📍 Address: 456 Cargo Ave, Dallas, TX 75001</p>
            <p className="text-gray-600">🕒 Business Hours: Mon – Sat, 9:00 AM – 7:00 PM</p>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Send a Message</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <textarea
                rows={4}
                placeholder="Your Message"
                className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              ></textarea>
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* Optional: Google Map */}
        <div className="mt-10">
          <iframe
            title="Company Location"
            className="w-full h-64 rounded-lg border"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3347.1614406320145!2d-96.8039243!3d32.7766649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e992d5c0bdf5f%3A0x5f0b3b57b9b5d2cd!2sDallas%2C%20TX!5e0!3m2!1sen!2sus!4v1680880907953!5m2!1sen!2sus"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
