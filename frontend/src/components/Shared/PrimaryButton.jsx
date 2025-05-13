import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const PrimaryButton = () => {
  return (
    <>
      <div className="flex flex-col items-start group">
        <Link to="/categories" className="flex items-center bg-primary h-[40px] text-white px-3 py-2 rounded">
          Choose Your Meal Plan
          <FaArrowRight className="inline-block group-hover:translate-x-2 duration-200 ml-2" />
        </Link>
        <span className="mt-2 text-sm text-gray-600">
          Select from a variety of fresh and healthy meal plans tailored to your taste and lifestyle.
        </span>
      </div>
    </>
  );
};

export default PrimaryButton;
