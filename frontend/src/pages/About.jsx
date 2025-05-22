import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-18 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-md p-8">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-800 mb-4">About Us</h1>

        {/* Introduction */}
        <p className="text-gray-600 mb-6">
          At <span className="text-blue-600 font-semibold">TrackSwift Logistics</span>, we're transforming the way businesses and individuals manage their shipments. Our platform provides fast, reliable, and trackable delivery solutions — ensuring your packages reach their destination safely and on time.
        </p>

        {/* Mission */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Our Mission</h2>
          <p className="text-gray-600">
            To simplify the shipping experience through innovation, transparency, and exceptional customer service. We believe that every shipment matters — whether it’s a gift to a loved one or critical inventory for a growing business.
          </p>
        </div>

        {/* Why Choose Us */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Why Choose Us</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li>📦 Real-time shipment tracking</li>
            <li>🌍 Global shipping coverage</li>
            <li>🔐 Secure handling and insured packages</li>
            <li>🚚 Fast and on-time deliveries</li>
            <li>📈 Scalable solutions for e-commerce and enterprises</li>
          </ul>
        </div>

        {/* Our Technology */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Powered by Smart Technology</h2>
          <p className="text-gray-600">
            Our platform is built using modern web technologies and APIs to provide accurate, real-time tracking updates for every shipment. With integrated dashboards and automated alerts, you’ll never lose sight of your packages.
          </p>
        </div>

        {/* Closing Statement */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Let’s Ship Smarter — Together</h2>
          <p className="text-gray-600">
            Whether you're shipping across town or across the globe, TrackSwift is here to make the process easier, faster, and more reliable. Join the growing number of businesses and individuals who trust us to deliver.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
