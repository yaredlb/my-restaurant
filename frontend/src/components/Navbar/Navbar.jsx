import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaCaretDown, FaUser, FaBars, FaTimes, FaSearch } from "react-icons/fa";

const NavLinks = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "About",
    link: "/about",
  },
  {
    id: 3,
    name: "Contact",
    link: "/contact",
  },
];

const DropdownLinks = [
  {
    id: 1,
    name: "Vegetables",
    link: "/categories/vegetables",
  },
  {
    id: 2,
    name: "Fruits",
    link: "/categories/fruits",
  },
  {
    id: 3,
    name: "Grains",
    link: "/categories/grains",
  },
];

const Navbar = ({ HandlePopup }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  return (
    <>
      <div data-aos="fade" className="bg-white shadow-md fixed w-full z-50">
        <div className="container flex justify-between items-center py-4 sm:py-3">
          {/* logo section  */}
          <div className="font-bold text-3xl text-primary font-cursive cursor-pointer select-none">
            GoodFood
          </div>

          {/* search bar for desktop */}
          <div className="hidden md:flex items-center border border-gray-300 rounded-md px-2 py-1">
            <input
              type="text"
              placeholder="Search food..."
              className="outline-none px-2 py-1 w-48"
            />
            <FaSearch className="text-gray-500 cursor-pointer" />
          </div>

          {/* Navlinks section */}
          <div className="hidden md:block">
            <ul className="flex gap-10 items-center">
              {NavLinks.map(({ id, name, link }) => (
                <li key={id}>
                  <Link
                    to={link}
                    className="hover:text-primary text-xl font-semibold"
                  >
                    {name}
                  </Link>
                </li>
              ))}

              {/* dropdown and links */}
              <li className="relative cursor-pointer group">
                <a
                  href="/categories"
                  className="inline-block hover:text-primary text-xl font-semibold items-center gap-1 py-2"
                >
                  Categories
                  <FaCaretDown className="group-hover:rotate-180 duration-300" />
                </a>
                {/* Dropdown section */}
                <div className="absolute z-[9999] hidden group-hover:block w-[200px] bg-white text-black shadow-md p-2 rounded-md">
                  <ul>
                    <li>
                      <Link
                        to="/categories/vegetables"
                        className="text-xl inline-block w-full rounded-md p-2 hover:bg-primary/20"
                      >
                        Vegetables
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/categories/fruits"
                        className="text-xl inline-block w-full rounded-md p-2 hover:bg-primary/20"
                      >
                        Fruits
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/categories/grains"
                        className="text-xl inline-block w-full rounded-md p-2 hover:bg-primary/20"
                      >
                        Grains
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

              {/* Login button section */}
              <li>
                <button
                  onClick={HandlePopup}
                  className="flex justify-center items-center gap-2 bg-secondary text-xl h-[40px] text-white px-2 md:px-5 py-2 hover:scale-105 duration-300 rounded-md"
                >
                  <FaUser />
                  My Account
                </button>
              </li>
            </ul>
          </div>

          {/* mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleSearch}
              className="text-xl text-gray-600 hover:text-primary"
              aria-label="Search"
            >
              <FaSearch />
            </button>
            <button
              onClick={toggleMobileMenu}
              className="text-2xl text-gray-600 hover:text-primary"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* mobile search bar */}
        {searchOpen && (
          <div className="md:hidden px-4 pb-4">
            <input
              type="text"
              placeholder="Search food..."
              className="w-full border border-gray-300 rounded-md px-2 py-1 outline-none"
            />
          </div>
        )}

        {/* mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white shadow-md px-4 py-4">
            <ul className="flex flex-col gap-4">
              {NavLinks.map(({ id, name, link }) => (
                <li key={id}>
                  <Link
                    to={link}
                    className="hover:text-primary text-xl font-semibold block"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {name}
                  </Link>
                </li>
              ))}
              <li className="cursor-pointer group relative">
                <Link
                  to="/categories"
                  className="flex items-center justify-between hover:text-primary text-xl font-semibold py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Categories
                  <FaCaretDown />
                </Link>
                <ul className="pl-4 mt-2">
                  {DropdownLinks.map(({ id, name, link }) => (
                    <li key={id}>
                      <Link
                        to={link}
                        className="hover:text-primary text-lg font-semibold block py-1"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                <button
                  onClick={() => {
                    HandlePopup();
                    setMobileMenuOpen(false);
                  }}
                  className="flex justify-center items-center gap-2 bg-secondary text-xl h-[40px] text-white px-2 py-2 rounded-md hover:scale-105 duration-300 w-full"
                >
                  <FaUser />
                  My Account
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
