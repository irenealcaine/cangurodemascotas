import React from "react";
import logo from "../img/Logo-removebg-preview.png";
import serviceImage from "../img/galeria2.JPG";
import serviceImage2 from "../img/galeria6.jpg";
import { GiDogHouse } from "react-icons/gi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BsFillHouseFill, BsFillSunFill } from "react-icons/bs";
import { FaDog } from "react-icons/fa";

const Services = () => {
  return (
    <div className="bg-purple-800/30 p-4">
      <h2>Nuestros servicios</h2>
      <div className="flex flex-col md:flex-row gap-4 justify-center items-center md:items-start">
        <div className="flex gap-4 flex-col md:w-5/12 items-center md:items-end">
          <details
            open
            className="w-full group border-2 border-purple-800 p-1 flex justify-between items-center gap-2 rounded-xl bg-white hover:bg-purple-100 transition-all duration-500"
          >
            <summary className="flex group-open:border-b-2 group-open:border-purple-800  text-lg md:text-2xl mx-2 cursor-pointer font-bold gap-4 justify-between items-center text-center">
              <GiDogHouse className="text-3xl text-purple-800" />
              Alojamiento sin jaula
              <MdKeyboardArrowDown className="text-3xl text-purple-800 group-open:rotate-180 transition-all duration-500" />
            </summary>
            <div className="p-4 relative">
              <img
                alt="/"
                src={logo}
                className="absolute top-0 left-0 w-10 opacity-30"
              />
              <img
                alt="/"
                src={logo}
                className="absolute bottom-0 right-0 w-10 opacity-30"
              />
              <p className="text-justify indent-4">
                En nuestro alojamiento de perros sin jaulas, ofrecemos un
                entorno seguro, limpio y acogedor para tu mascota mientras estás
                fuera.
              </p>
              <p className="text-justify indent-4">
                Sabemos lo importante que es para ti asegurarte de que tu amigo
                peludo esté cómodo y bien cuidado, por lo que hemos creado un
                ambiente relajado y hogareño para que se sienta como en casa.
              </p>
            </div>
          </details>

          <details
            open
            className="w-full group border-2 border-purple-800 p-1 flex justify-center items-center gap-2 rounded-xl bg-white hover:bg-purple-100 transition-all duration-500"
          >
            <summary className="group-open:border-b-2 group-open:border-purple-800 text-lg md:text-2xl mx-2 cursor-pointer list-none font-bold flex  gap-4 justify-between items-center text-center">
              <BsFillHouseFill className="text-3xl text-purple-800" />
              Cuidado a domicilio
              <MdKeyboardArrowDown className="text-3xl text-purple-800 group-open:rotate-180 transition-all duration-500" />
            </summary>
            <div className="p-4 relative">
              <img
                alt="/"
                src={logo}
                className="absolute top-0 left-0 w-10 opacity-30"
              />
              <img
                alt="/"
                src={logo}
                className="absolute bottom-0 right-0 w-10 opacity-30"
              />
              <p className="text-justify indent-4">
                En nuestro servicio de cuidado a domicilio para perros, nos
                aseguraremos de que tu mascota reciba la atención y el cuidado
                que necesita mientras estás fuera.
              </p>
              <p className="text-justify indent-4">
                Nos adaptamos a las necesidades específicas de tu perro, así que
                no importa si necesita una visita rápida para hacer sus
                necesidades o si necesita compañía durante todo el día. Nos
                aseguraremos de que tu perro esté feliz y satisfecho cuando
                vuelvas a casa.
              </p>
            </div>
          </details>

          <details
            open
            className="w-full group border-2 border-purple-800 p-1 flex justify-center items-center gap-2 rounded-xl bg-white hover:bg-purple-100 transition-all duration-500"
          >
            <summary className="group-open:border-b-2 group-open:border-purple-800  text-lg md:text-2xl mx-2 cursor-pointer list-none font-bold flex  gap-4 justify-between items-center text-center ">
              <BsFillSunFill className="text-3xl text-purple-800" />
              Guardería de día
              <MdKeyboardArrowDown className="text-3xl text-purple-800 group-open:rotate-180 transition-all duration-500" />
            </summary>
            <div className="p-4 relative">
              <img
                alt="/"
                src={logo}
                className="absolute top-0 left-0 w-10 opacity-30"
              />
              <img
                alt="/"
                src={logo}
                className="absolute bottom-0 right-0 w-10 opacity-30"
              />
              <p className="text-justify indent-4">
                {" "}
                En nuestra guardería de día para perros, ofrecemos un ambiente
                seguro y emocionante para que tu amigo peludo socialice y se
                divierta durante todo el día.
              </p>
              <p className="text-justify indent-4">
                Ofrecemos actividades divertidas y emocionantes para mantener a
                tu perro ocupado y feliz. Ya sea que les guste correr y jugar,
                socializar con otros perros o simplemente relajarse y recibir
                caricias, tenemos algo para todos.
              </p>
            </div>
          </details>

          <details
            open
            className="w-full group border-2 border-purple-800 p-1 flex justify-center items-center gap-2 rounded-xl bg-white hover:bg-purple-100 transition-all duration-500"
          >
            <summary className=" group-open:border-b-2 group-open:border-purple-800  text-lg md:text-2xl mx-2 cursor-pointer list-none font-bold flex  gap-4 justify-between items-center text-center ">
              <FaDog className="text-3xl text-purple-800" />
              Paseos
              <MdKeyboardArrowDown className="text-3xl text-purple-800 group-open:rotate-180 transition-all duration-500" />
            </summary>
            <div className="p-4 relative">
              <img
                alt="/"
                src={logo}
                className="absolute top-0 left-0 w-10 opacity-30"
              />
              <img
                alt="/"
                src={logo}
                className="absolute bottom-0 right-0 w-10 opacity-30"
              />
              <p className="text-justify indent-4">
                ¿No tienes tiempo para sacar a tu perro a caminar tanto como te
                gustaría? En nuestro servicio de paseos de perros, ofrecemos una
                solución confiable y segura para asegurarnos de que tu perro
                tenga el ejercicio y la actividad física que necesita para
                mantenerse feliz y saludable.{" "}
              </p>
              <p className="text-justify indent-4">
                Nos aseguramos de que tu perro reciba una caminata personalizada
                de acuerdo con su nivel de energía, tamaño y necesidades
                individuales.
              </p>
            </div>
          </details>
        </div>
        <div className="md:w-5/12 flex md:flex-col gap-4 justify-center items-center md:items-start">
          <img
            src={serviceImage}
            alt=""
            className="w-5/12 md:w-6/12 rounded-xl border border-purple-800"
          />
          <img
            src={serviceImage2}
            alt=""
            className="w-5/12 md:w-6/12 h-auto rounded-xl border border-purple-800"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
