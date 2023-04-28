import React from "react";
import logo from "../img/Logo-removebg-preview.png";
import opinions from "../components/db/opinionsdb.js";

const Opinions = () => {
  return (
    <section className="p-4">
      <h2>Las opiniones de nuestros clientes</h2>
      <div className="flex flex-wrap flex-col md:flex-row justify-center items-center gap-4">
        {opinions.map((opinion) => {
          return (
            <div className="bg-white md:w-5/12 border-2 border-purple-800 rounded-xl relative p-4">
              <img
                alt="logo"
                src={logo}
                loading="lazy"
                className="absolute top-1 left-1 w-10 opacity-30"
              />
              <img
                alt="logo"
                src={logo}
                loading="lazy"
                className="absolute bottom-1 right-1 w-10 opacity-30"
              />
              <p className="text-center text-xl">{opinion.text}</p>
              <p className="text-end italic">-- {opinion.author}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Opinions;
