import React from "react";
import { Link } from "react-router-dom";
import vegetablesImg from "../../assets/png/vegetables.jpg";
import fruitsImg from "../../assets/png/fruits.jpg";
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

const categoriesData = [
  {
    id: 1,
    name: "Vegetables",
    description:
      "Fresh and organic vegetables sourced from local farms. Perfect for healthy meals and salads.",
    imageUrl: vegetablesImg,
    link: "/categories/vegetables",
  },
  {
    id: 2,
    name: "Fruits",
    description:
      "Juicy and ripe fruits picked at peak freshness. Ideal for snacks, desserts, and smoothies.",
    imageUrl: fruitsImg,
    link: "/categories/fruits",
  },
  {
    id: 3,
    name: "Grains",
    description:
      "Whole grains and cereals that provide essential nutrients and energy for your daily diet.",
    imageUrl: grainsImg,
    link: "/categories/grains",
  },
];

const CategoriesContent = () => {
  return (
    <div style={bgStyle}>
      <div className="container py-10">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Our Categories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {categoriesData.map(({ id, name, description, imageUrl, link }) => (
            <Link
              key={id}
              to={link}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center hover:shadow-lg transition-shadow"
            >
              <img
                src={imageUrl}
                alt={name}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{name}</h3>
              <p className="text-gray-700 text-center">{description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesContent;
