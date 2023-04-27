import React from "react";
// import placeholder from '../img/placeholder header.png'
import headerphoto from "../img/cabecera.png";
import biglogo from "../img/Logo_Canguro_de_mascotas_Redes2-removebg-preview.png";
import { FiInstagram, FiMail } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";

const Header = () => {
  return (
    <div className="p-4">
      <div className="flex flex-col-reverse md:flex-row justify-center gap-4 items-center">
        <img src={headerphoto} alt="/" className="md:w-5/12" />
        <div className="md:w-5/12">
          <img src={biglogo} alt="/" className="mx-auto" />
        </div>
      </div>
      <h1 className="text-6xl text-purple-800 text-center my-10">
        La mejor guardería para tu mascota en Llíria
      </h1>
      <div className="flex flex-col md:flex-row flex-wrap gap-2 md:gap-6 justify-center items-center my-4">
        <a
          href="https://www.instagram.com/canguro.mascotas/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="flex gap-1 justify-center items-center  cursor-pointer hover:underline hover:text-purple-800  transition-all duration-500 ease-in-out text-lg md:text-2xl">
            <FiInstagram className="text-purple-800" />
            <p className="font-bold">canguro.mascotas</p>
          </div>
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=34664051872&text=Hola!"
          target="_blank"
          rel="noreferrer"
        >
          <div className="flex gap-1 justify-center items-center hover:underline hover:text-purple-800 cursor-pointer transition-all duration-500 text-lg md:text-2xl">
            <BsWhatsapp className="text-purple-800" />
            <p className="font-bold">664 05 18 72</p>
          </div>
        </a>
        <a
          href="mailto:paulablasco3@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <div className="flex gap-1 justify-center items-center hover:underline hover:text-purple-800 cursor-pointer transition-all duration-500 text-lg md:text-2xl">
            <FiMail className="text-purple-800" />
            <p className="font-bold">paulablasco3@gmail.com</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Header;
