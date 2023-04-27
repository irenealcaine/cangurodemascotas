import React from "react";
import { FiInstagram, FiMail } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  return (
    <div className="p-4">
      <h2>Contacto</h2>
      <div>
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

        <div className="text-center">
          <h3 className="font-bold">Horario de atención al público:</h3>
          <p>De Lunes a Viernes: de 9h a 14h y de 15h a 21h</p>
          <p>Sábados: de 9h a 14h</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
