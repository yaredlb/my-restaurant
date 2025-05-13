import React from "react";
import fruitsImg from "../../assets/png/fruits.jpg";
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

const Fruits = () => {
  return (
    <div style={bgStyle}>
      <div className="container py-10">
        <h2 className="text-3xl font-semibold mb-6">Fruits</h2>
        <img
          src={fruitsImg}
          alt="Fruits"
          className="w-full max-w-md rounded-md mb-4"
        />
        <p className="text-gray-700">
          Juicy and ripe fruits picked at peak freshness. Ideal for snacks, desserts, and smoothies.
        </p>
      </div>
    </div>
  );
};

export default Fruits;
