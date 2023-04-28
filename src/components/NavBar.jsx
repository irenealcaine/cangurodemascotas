import React from "react";
import socialMedia from "../components/db/socialdb.js";
import logo from "../img/Logo-removebg-preview.png";
import menu from "../components/db/menudb.js";

const NavBar = () => {
  return (
    <nav className="bg-purple-800 py-2 top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4 ">
        <a href="#header" className="">
          <img
            src={logo}
            className="w-8 md:w-10 bg-white/80 rounded-full p-1 hover:bg-white transition duration-500"
            loading="lazy"
            alt="logo"
          />
        </a>
        <ul className=" hidden md:flex">
          {menu.map((item) => {
            return (
              <li>
                <a
                  href={item.href}
                  className="text-gray-300 hover:text-white transition duration-500 ml-4 flex items-center"
                >
                  {item.text}
                </a>
              </li>
            );
          })}
        </ul>
        <div className="flex justify-end w-full">
          {socialMedia.map((media) => {
            return (
              <a
                href={media.href}
                target="_blank"
                rel="noreferrer"
                className="text-gray-300 hover:text-white transition duration-500 ml-4 flex items-center"
              >
                {media.navbarIcon}
                <p className="hidden lg:block md:mx-2">{media.title}</p>
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
