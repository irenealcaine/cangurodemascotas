import React from "react";
import socialMedia from "../components/db/socialdb.js";
import logo from "../img/Logo-removebg-preview.png";

const NavBar = () => {
  return (
    <nav className="bg-purple-800 py-2 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4 ">
        <img
          src={logo}
          className="w-7 md:w-12 bg-white/80 rounded-full p-1 md:p-2"
          loading="lazy"
          alt="logo"
        />
        <ul className=" hidden md:flex">
          <li>
            <a
              href="#services"
              className="text-gray-300 hover:text-white ml-4 flex items-center"
            >
              Servicios
            </a>
          </li>
          <li>
            <a
              href="#opinions"
              className="text-gray-300 hover:text-white ml-4 flex items-center"
            >
              Opiniones
            </a>
          </li>
          <li>
            <a
              href="#gallery"
              className="text-gray-300 hover:text-white ml-4 flex items-center"
            >
              Galería
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-gray-300 hover:text-white ml-4 flex items-center"
            >
              Contacto
            </a>
          </li>
        </ul>
        <div className="flex justify-end w-full">
          {socialMedia.map((media) => {
            return (
              <a
                href={media.href}
                target="_blank"
                rel="noreferrer"
                className="text-gray-300 hover:text-white ml-4 flex items-center"
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
