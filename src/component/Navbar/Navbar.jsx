import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav id="navbar" className="flex items-center justify-between">
      <div className="nav-head">
        <h1 className="text-3xl font-bold">Sage</h1>
      </div>
      <div className="menu text-white font-medium">
        <ul className="flex items-center justify-center gap-12 cursor-pointer">
          <li>Home</li>
          <li>Men's</li>
          <li>Women's</li>
          <li>Kid's</li>
        </ul>
      </div>
      <div className="nav-icons flex items-center gap-6">
        <i className="fa-solid fa-heart"></i>
        <i className="fa-solid fa-cart-shopping"></i>
        <div className="login">
          <button className="text-white">
            {" "}
            <span>
              <i className="fa-solid fa-user text-black pr-2"></i>
            </span>{" "}
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
