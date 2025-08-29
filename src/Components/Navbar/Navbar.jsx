"use client";

import "./Navbar.css";
import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      {/* Desktop Navbar__ */}
      <div className="main_navbar_desktop_layout">
        <h1>TechBox</h1>
        <ul>
          <li>Home</li>
          <li>Products</li>
          <li>Add Products</li>
          <li>About Us</li>
          <li>Contact</li>
        </ul>
        <button>Sign In</button>
      </div>

      {/* Mobile Navbar__ */}
      <div className="main_navbar_mobile_layout">
        <h1>TechBox</h1>

        <div className={!isMenuOpen ? "menu_close" : "mobile_menu_container"}>
          <ul>
            <li>Home</li>
            <li>Products</li>
            <li>Add Product</li>
            <li>About Us</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="menu_control_container">
          <button>Sign In</button>
          <button onClick={handleMenu}>
            {isMenuOpen ? <RxCross2 size={26} /> : <FaBars size={26} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;