import React from "react";
import { FaLeaf, FaClock, FaStar, FaTruck } from "react-icons/fa";

const reasons = [
  {
    id: 1,
    icon: <FaLeaf className="text-primary text-5xl" />,
    text: "Fresh and Organic Ingredients",
  },
  {
    id: 2,
    icon: <FaClock className="text-secondary text-5xl" />,
    text: "Timely Delivery Guaranteed",
  },
  {
    id: 3,
    icon: <FaStar className="text-primary text-5xl" />,
    text: "Top Rated by Our Customers",
  },
  {
    id: 4,
    icon: <FaTruck className="text-secondary text-5xl" />,
    text: "Wide Delivery Coverage",
  },
];

const WhyChoose = () => {
  return (
    <>
      <div className="py-14 md:py-28 bg-gray-50">
        <div className="container">
          {/* heading section  */}
          <h1
            data-aos="fade"
            className="py-8 tracking-wider text-2xl font-semibold text-dark text-center"
          >
            Why Choose Us
          </h1>

          {/* card section  */}
          <div data-aos="fade" data-aos-delay="300">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-14 sm:gap-4">
              {reasons.map(({ id, icon, text }) => (
                <div
                  key={id}
                  className="text-center flex justify-center items-center flex-col gap-4 px-4 py-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  {icon}
                  <p className="text-dark/80 font-semibold text-lg">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChoose;
