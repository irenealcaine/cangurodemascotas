import React from "react";
import socialMedia from "../components/db/socialdb.js";

const NavBar = () => {
  return (
    <nav className="bg-purple-800 py-2 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4">
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
                <p className="hidden md:block md:mx-2">{media.title}</p>
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
