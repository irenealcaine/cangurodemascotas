import React from "react";
import { FiInstagram, FiMail } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";

const NavBar = () => {
  return (
    <nav className="bg-purple-800 py-2 sticky top-0">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex justify-end w-full">
          <a
            href="https://www.instagram.com/canguro.mascotas/"
            target="_blank"
            rel="noreferrer"
            className="text-gray-300 hover:text-white ml-4 flex items-center"
          >
            <FiInstagram />
            <p className="hidden md:block md:mx-2">canguro.mascotas</p>
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=34664051872&text=Hola!"
            target="_blank"
            rel="noreferrer"
            className="text-gray-300 hover:text-white ml-4 flex items-center"
          >
            <BsWhatsapp />
            <p className="hidden md:block md:mx-2">664 05 18 72</p>
          </a>
          <a
            href="mailto:paulablasco3@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="text-gray-300 hover:text-white ml-4 flex items-center"
          >
            <FiMail />
            <p className="hidden md:block md:mx-2">paulablasco3@gmail.com</p>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
