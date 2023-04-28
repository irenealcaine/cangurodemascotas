import React from "react";
import socialMedia from "../components/db/socialdb.js";

const Contact = () => {
  return (
    <section className="p-4">
      <h2>Contacto</h2>
      <div>
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

        <div className="text-center">
          <h3 className="font-bold">Horario de atención al público:</h3>
          <p>De Lunes a Viernes: de 9h a 14h y de 15h a 21h</p>
          <p>Sábados: de 9h a 14h</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
