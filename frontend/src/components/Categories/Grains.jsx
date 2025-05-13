import React from "react";
import grainsImg from "../../assets/png/grains.jpg";
import HeroBg from "../../assets/heroBg.png";

const bgStyle = {
  backgroundImage: `url(${HeroBg})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  minHeight: "100vh",
  paddingTop: "4.5rem", // offset for fixed navbar height
  paddingBottom: "2rem",
};

const Grains = () => {
  return (
    <div style={bgStyle}>
      <div className="container py-10">
        <h2 className="text-3xl font-semibold mb-6">Grains</h2>
        <img
          src={grainsImg}
          alt="Grains"
          className="w-full max-w-md rounded-md mb-4"
        />
        <p className="text-gray-700">
          Whole grains and cereals that provide essential nutrients and energy for your daily diet.
        </p>
      </div>
    </div>
  );
};

export default Grains;
