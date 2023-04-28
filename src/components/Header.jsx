import React from "react";
import headerphoto from "../img/cabecera.png";
import biglogo from "../img/Logo_Canguro_de_mascotas_Redes2-removebg-preview.png";
import socialMedia from "../components/db/socialdb.js";

const Header = () => {
  return (
    <header className="p-4">
      <div className="flex flex-col-reverse md:flex-row justify-center gap-4 items-center">
        <img
          src={headerphoto}
          alt="varios perros"
          className="md:w-5/12"
          loading="lazy"
        />
        <div className="md:w-5/12">
          <img
            src={biglogo}
            alt="logo de canguro de mascotas"
            loading="lazy"
            className="mx-auto"
          />
        </div>
      </div>
      <h1 className="text-6xl text-purple-800 text-center my-10">
        La mejor guardería para tu mascota en Llíria
      </h1>
      <div className="flex flex-col md:flex-row flex-wrap gap-2 md:gap-6 justify-center items-center my-4">
        {socialMedia.map((media) => {
          return (
            <a href={media.href} target="_blank" rel="noreferrer">
              <div className="flex gap-1 justify-center items-center  cursor-pointer hover:underline hover:text-purple-800  transition-all duration-500 ease-in-out text-lg md:text-2xl">
                {media.icon}
                <p className="font-bold">{media.title}</p>
              </div>
            </a>
          );
        })}
      </div>
    </header>
  );
};

export default Header;
