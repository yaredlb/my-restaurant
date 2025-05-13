import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Popup from "./components/Popup/Popup";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Vegetables from "./components/Categories/Vegetables";
import Fruits from "./components/Categories/Fruits";
import Grains from "./components/Categories/Grains";
import AOS from "aos";
import "aos/dist/aos.css";
import Categories from "./components/Categories/Categories";

const App = () => {
  const [showPopup, setShowPopup] = useState(false);
  const HandlePopup = () => {
    setShowPopup(true);
  };

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <Router>
      <div className="overflow-x-hidden">
        <Navbar HandlePopup={HandlePopup} />
        <Routes>
          <Route path="/" element={<Home HandlePopup={HandlePopup} />} />
          <Route path="/about" element={<About HandlePopup={HandlePopup} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/vegetables" element={<Vegetables />} />
          <Route path="/categories/fruits" element={<Fruits />} />
          <Route path="/categories/grains" element={<Grains />} />
        </Routes>
        <Popup showPopup={showPopup} setShowPopup={setShowPopup} />
      </div>
    </Router>
  );
};

export default App;
