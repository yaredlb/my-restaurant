import React from "react";
import BgPolygon from "../../assets/polygon.png";
import Vector from "../../assets/vector-wave.png";
import { FaUser, FaLeaf, FaClock, FaHeart } from "react-icons/fa";

const bgStyle = {
  backgroundImage: `url(${BgPolygon})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  width: "100%",
  height: "100%",
  position: "relative",
};

const About = ({ HandlePopup }) => {
  return (
    <>
      <div style={bgStyle} className="py-14">
        <div className="container min-h-[500px] relative z-10 text-white">
          <h1
            data-aos="fade"
            className="pt-20 tracking-wider text-4xl font-semibold text-center"
          >
            About Us
          </h1>

          {/* card section  */}
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="bg-white/80 p-10 my-10 rounded-lg shadow-lg text-dark"
          >
            <p className="mb-6">
              At GoodFood, we believe in delivering fresh, healthy, and delicious meals right to your doorstep. Our mission is to save you time while providing nutritious options tailored to your lifestyle.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center mb-8">
              <div className="flex flex-col items-center gap-2">
                <FaLeaf className="text-primary text-4xl" />
                <h3 className="font-semibold text-lg">Fresh Ingredients</h3>
                <p>We use only the freshest ingredients sourced locally.</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <FaClock className="text-primary text-4xl" />
                <h3 className="font-semibold text-lg">Time Saving</h3>
                <p>Save time on shopping and cooking with our meal plans.</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <FaHeart className="text-primary text-4xl" />
                <h3 className="font-semibold text-lg">Healthy Choices</h3>
                <p>Meals designed to support your health and wellness goals.</p>
              </div>
            </div>
            <div className="pt-10 flex justify-center">
              <button
                onClick={HandlePopup}
                className="flex justify-center items-center gap-2 bg-primary text-xl h-[40px] text-white px-5 py-2 rounded-md hover:scale-105 duration-300"
              >
                <FaUser />
                My Account
              </button>
            </div>
          </div>
        </div>

        {/* wave vector  */}
        <div className="absolute top-0 right-0 w-full">
          <img src={Vector} alt="" className="mx-auto" />
        </div>
      </div>
    </>
  );
};

export default About;
