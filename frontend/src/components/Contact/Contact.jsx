import React, { useState } from "react";
import HeroBg from "../../assets/heroBg.png";
import LocationMap from "../LocationMap";

const bgStyle = {
  backgroundImage: `url(${HeroBg})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  minHeight: "100vh",
  paddingTop: "3.5rem",
  paddingBottom: "3.5rem",
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for form submission logic
    setSubmitted(true);
  };

  const googleMapsApiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  return (
    <div style={bgStyle}>
      <div className="container max-w-xl mx-auto bg-white bg-opacity-90 p-8 rounded shadow">
        <h1 className="text-4xl font-semibold text-center mb-10">Contact Us</h1>
        {submitted ? (
          <p className="text-center text-green-600 text-lg">
            Thank you for contacting us! We will get back to you soon.
          </p>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2 font-semibold">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded px-3 py-2 outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2 font-semibold">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded px-3 py-2 outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block mb-2 font-semibold">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full border border-gray-300 rounded px-3 py-2 outline-none focus:ring-2 focus:ring-primary"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-primary text-white px-6 py-2 rounded hover:bg-primary-dark transition-colors duration-200"
            >
              Send Message
            </button>
          </form>
        )}
        <div className="mt-10">
          <LocationMap apiKey={googleMapsApiKey} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
