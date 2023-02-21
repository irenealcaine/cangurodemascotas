import React from 'react'

const Modal = ({ selectedImg, setSelectedImg }) => {

  const handleClick = () => {
    setSelectedImg(null)
  }

  return (
    <div
      className='h-screen w-full fixed left-0 top-0 z-10 flex justify-center items-center bg-black/70'
      onClick={handleClick}>
      <img
        src={selectedImg}
        alt="/"
        className='block sm:w-12/12 md:h-4/5 rounded-xl mx-auto my-16' />
    </div>
  )
}

export default Modal
