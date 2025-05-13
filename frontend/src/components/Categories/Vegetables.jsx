import React from "react";
import vegetablesImg from "../../assets/png/vegetables.jpg";
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

const Vegetables = () => {
  return (
    <div style={bgStyle}>
      <div className="container py-10">
        <h2 className="text-3xl font-semibold mb-6">Vegetables</h2>
        <img
          src={vegetablesImg}
          alt="Vegetables"
          className="w-full max-w-md rounded-md mb-4"
        />
        <p className="text-gray-700">
          Fresh and organic vegetables sourced from local farms. Perfect for healthy meals and salads.
        </p>
      </div>
    </div>
  );
};

export default Vegetables;
