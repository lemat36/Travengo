import React from "react";
import { FaCheck } from "react-icons/fa";

const WhyUs: React.FC = () => {
  const features = [
    "First Class Flights",
    "5 Star Accommodations",
    "Inclusive Packages",
    "Latest Model Vehicles",
    "Handpicked Hotels",
    "Accessibility Management",
    "10 Languages Available",
    "+120 Premium City Tours",
    "Great Tour Guides",
  ];

  return (
    <section className="bg-gray-50 py-16 px-8">
      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:space-x-12">
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Us?</h2>
          <p className="text-gray-600 mb-8">
            Organising your own holiday can be a stressful task. Let us do the
            work for you! By choosing Travengo, you can save time and hassle by
            booking all of your itinerary services directly with a specialized
            local agency.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start">
                <FaCheck className="text-orange-500 mt-1 mr-2" />
                <span className="text-gray-600">{feature}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 lg:mt-0 lg:w-1/2">
          <iframe
            width="100%"
            height="300"
            src="https://youtu.be/mhzudo2VrGg?si=IaNxOogvC5cOfomN"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg shadow-lg"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
