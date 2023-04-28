import React from "react";
import gallery from "./db/gallerydb.js";

const Gallery = ({ setSelectedImg }) => {
  return (
    <section className="bg-purple-800/30 p-4">
      <h2>Nuestros clientes peludos</h2>
      <div className="flex flex-wrap gap-4 justify-center items-center">
        {gallery.map((photo) => {
          return (
            <img
              alt="foto de instagram"
              src={photo.src}
              loading="lazy"
              onClick={() => setSelectedImg(photo.src)}
              className="w-5/12 md:w-auto md:h-64 rounded-xl hover:outline hover:outline-purple-800 cursor-pointer transition-all duration-75"
            />
          );
        })}
      </div>
    </section>
  );
};

export default Gallery;
