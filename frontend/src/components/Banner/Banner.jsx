import React from "react";
import leaf from "../../assets/png/leaf.png";
import tomato from "../../assets/png/tomato.png";
import lemon from "../../assets/png/lemon.png";
import kiwi from "../../assets/png/kiwi.png";
import apple from "../../assets/png/apple.png";
import PrimaryButton from "../Shared/PrimaryButton";

const testimonials = [
  {
    id: 1,
    name: "Alice Johnson",
    text: "The meal plans are fantastic! Fresh, healthy, and delivered on time.",
  },
  {
    id: 2,
    name: "Mark Smith",
    text: "GoodFood saved me so much time. The food tastes amazing!",
  },
  {
    id: 3,
    name: "Sophia Lee",
    text: "Highly recommend for anyone wanting healthy meals without the hassle.",
  },
];

const Banner = () => {
  return (
    <>
      <div className="container py-14 relative">
        <div className="relative z-20">
          <h1
            data-aos="fade-up"
            data-aos-delay="300"
            className="py-8 tracking-wider text-2xl font-semibold text-dark text-center"
          >
            Taste the Healthy Difference
          </h1>
          {/* text content section */}
          <div className="space-y-10">
            <div
              data-aos="fade-up"
              data-aos-delay="500"
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-10"
            >
              <div>
                <p>
                  We know that <span className="text-primary">time</span> is the
                  greatest value in the modern world. Our healthy meal plan
                  delivery service GoodFood in New York is the answer for those who
                  want to eat healthily, saving time for buying food and
                  preparing delicious, healthy meals.
                </p>
              </div>
              <div>
                <p>
                  Enjoy exclusive weekly offers and personalized meal plans
                  tailored to your taste and dietary needs.
                </p>
              </div>
            </div>
          </div>
          {/* button section  */}
          <div
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-offset="0"
            className="flex justify-center mt-10 sm:mt-14"
          >
            <PrimaryButton />
          </div>

          {/* testimonials section */}
          <div data-aos="fade-up" data-aos-delay="700" className="mt-20">
            <h2 className="text-3xl font-semibold text-center mb-8">
              What Our Customers Say
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {testimonials.map(({ id, name, text }) => (
                <div
                  key={id}
                  className="p-6 border rounded-md shadow-md bg-white hover:shadow-lg transition-shadow duration-300"
                >
                  <p className="mb-4 italic">"{text}"</p>
                  <p className="font-semibold text-right">- {name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* bg fruits pngs with hover scale */}
        <div
          data-aos="fade-right"
          className="absolute top-0 -left-16 sm:bottom-0 sm:left-0 opacity-50 sm:opacity-100 transition-transform duration-300 hover:scale-110"
        >
          <img
            data-aos="fade-right"
            src={leaf}
            alt=""
            className="max-w-[160px]"
          />
        </div>
        <div
          data-aos="fade-right"
          className="absolute -bottom-16 -left-16 sm:bottom-0 sm:left-0 opacity-50 sm:opacity-100 transition-transform duration-300 hover:scale-110"
        >
          <img src={tomato} alt="" className="max-w-[280px]" />
        </div>
        <div
          data-aos="fade-left"
          className="absolute top-10 -right-16 sm:right-20 opacity-50 sm:opacity-100 transition-transform duration-300 hover:scale-110"
        >
          <img src={lemon} alt="" className="max-w-[200px]" />
        </div>
        <div
          data-aos="fade-left"
          className="hidden sm:block absolute bottom-0 right-0 opacity-50 sm:opacity-100 transition-transform duration-300 hover:scale-110"
        >
          <img src={apple} alt="" className="max-w-[200px]" />
        </div>
        <div
          data-aos="fade"
          className="absolute top-1/2 -translate-y-1/2 left-1/3 -translate-x-1/2 opacity-50 sm:opacity-100 transition-transform duration-300 hover:scale-110"
        >
          <img src={kiwi} alt="" className="max-w-[180px]" />
        </div>
      </div>
    </>
  );
};

export default Banner;
