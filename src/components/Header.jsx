import React from 'react'
// import placeholder from '../img/placeholder header.png'
import headerphoto from '../img/cabecera.png'
import biglogo from '../img/Logo_Canguro_de_mascotas_Redes2-removebg-preview.png'

const Header = () => {
  return (
    <div className="p-4">
      <div className='flex flex-col-reverse md:flex-row justify-center gap-4 items-center'>
        <img src={headerphoto} alt='/' className='md:w-5/12' />
        <div className='md:w-5/12'>
          {/* <h1 className='text-6xl text-purple-800 text-center'>Paula Blasco</h1> */}
          <img src={biglogo} alt='/' className='mx-auto' />
        </div>
      </div>
      <div className='flex flex-col md:flex-row flex-wrap gap-2 md:gap-6 justify-center items-center my-4'>
        <a href="https://www.instagram.com/canguro.mascotas/" target="_blank" rel='noreferrer'>
          <div className='flex gap-1 justify-center items-center  cursor-pointer hover:underline hover:text-purple-800  transition-all duration-500 ease-in-out'>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png' className="w-4 h-4" alt="/" />
            <p className='font-bold text-2xl'>canguro.mascotas</p>
          </div>
        </a>
        <a href="https://api.whatsapp.com/send?phone=34664051872&text=Hola!" target="_blank" rel='noreferrer'>
          <div className='flex gap-1 justify-center items-center hover:underline hover:text-purple-800 cursor-pointer transition-all duration-500'>
            <img src='https://cdn-icons-png.flaticon.com/512/174/174879.png' className="w-4 h-4" alt="/" />
            <p className='font-bold text-2xl'>664 05 18 72</p>
          </div>
        </a>
        <a href="mailto:paulablasco3@gmail.com" target="_blank" rel='noreferrer'>
          <div className='flex gap-1 justify-center items-center hover:underline hover:text-purple-800 cursor-pointer transition-all duration-500'>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/2560px-Gmail_icon_%282020%29.svg.png' className="w-4 h-4" alt="/" />
            <p className='font-bold text-2xl'>paulablasco3@gmail.com</p>
          </div>
        </a>
      </div>
    </div >
  )
}

export default Header
