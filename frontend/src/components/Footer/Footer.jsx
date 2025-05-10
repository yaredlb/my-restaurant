import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaPhone, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="text-white mt-20">
        <div
          data-aos="fade-down"
          className="container bg-gradient-to-b from-primary to-primaryDark rounded-t-3xl"
        >
          {/* heading section  */}
          <h1 className="py-10 text-3xl font-bold text-yellow text-center">
            Contact Us
          </h1>

          {/* grid section  */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-14 border-b-2 border-white pb-6">
            {/* Address section  */}
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <IoLocationSharp className="text-5xl" />
              </div>
              <p>#92, Main Street, New York, NY 10004</p>
            </div>

            {/* Email section  */}
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <MdEmail className="text-5xl" />
              </div>
              <div>
                <p>info@goodfood.com</p>
                <p>orders@goodfood.com</p>
              </div>
            </div>

            {/* Phone section  */}
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <FaPhone className="text-5xl" />
              </div>
              <div>
                <p>+1 212-555-1234 - Sales and Services</p>
                <p>+1 212-555-5678 - Hiring Queries</p>
                <p>+1 212-555-9012 - WhatsApp</p>
              </div>
            </div>

            {/* Social media section */}
            <div className="text-center space-y-4">
              <h2 className="text-xl font-semibold">Follow Us</h2>
              <div className="flex justify-center gap-6 text-yellow text-2xl">
                <a href="#" aria-label="Facebook" className="hover:text-primary">
                  <FaFacebookF />
                </a>
                <a href="#" aria-label="Twitter" className="hover:text-primary">
                  <FaTwitter />
                </a>
                <a href="#" aria-label="Instagram" className="hover:text-primary">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
          {/* copyright section  */}
          <div className="flex flex-col sm:flex-row justify-between p-4 items-center text-sm text-white/80 gap-4">
            <p>&copy; 2025 GoodFood. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
              <a href="#" className="hover:underline">
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
