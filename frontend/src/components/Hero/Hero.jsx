import React, { useState, useEffect } from "react";
import HeroImg from "../../assets/hero.png";
import HeroBg from "../../assets/heroBg.png";
import PrimaryButton from "../Shared/PrimaryButton";

const BgStyle = {
  backgroundImage: `url(${HeroBg})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  width: "100%",
  height: "100%",
};

const Hero = () => {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) {
      setGreeting("Good Morning");
    } else if (hour < 18) {
      setGreeting("Good Afternoon");
    } else {
      setGreeting("Good Evening");
    }
  }, []);

  return (
    <>
      <div style={BgStyle}>
        <div className="container py-16 sm:py-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center min-h-[600px]">
            {/* text-content section */}
            <div className="space-y-7 text-dark order-2 sm:order-1 ">
              <h2 data-aos="fade-up" className="text-3xl font-semibold">
                {greeting}, Welcome to GoodFood!
              </h2>
              <h1 data-aos="fade-up" className="text-5xl">
                Fresh & Healthy Meal Plan{" "}
                <span className="text-secondary font-cursive text-7xl">
                  Delivery
                </span>{" "}
                in New York
              </h1>
              <p data-aos="fade-up" data-aos-delay="300" className="lg:pr-64">
                Delicious Meals Delivered to Your Door From $132.95 per week
              </p>
              {/* button section */}
              <div data-aos="fade-up" data-aos-delay="500" className="inline-block">
                <PrimaryButton />
              </div>
            </div>
            {/* image section */}
            <div
              data-aos="zoom-in"
              data-aos-delay="500"
              className="relative z-30 order-1 sm:order-2"
            >
              <img
                src={HeroImg}
                alt=""
                className="w-full sm:scale-125 sm:translate-y-16 group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
