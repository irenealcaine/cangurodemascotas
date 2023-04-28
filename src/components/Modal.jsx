import React from "react";

const Modal = ({ selectedImg, setSelectedImg }) => {
  const handleClick = () => {
    setSelectedImg(null);
  };

  return (
    <div
      className="h-screen w-full fixed left-0 top-0 z-10 flex justify-center items-center bg-black/70"
      onClick={handleClick}
    >
      <img
        src={selectedImg}
        alt="foto de instagram"
        className="block w-11/12 md:h-4/5 md:w-auto rounded-xl mx-auto my-16"
      />
    </div>
  );
};

export default Modal;
