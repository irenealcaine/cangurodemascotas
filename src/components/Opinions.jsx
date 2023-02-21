import React from 'react'
import logo from '../img/Logo-removebg-preview.png'

const Opinions = () => {
  return (
    <div className='p-4'>
      <h2>Las opiniones de nuestros clientes</h2>
      <div className='flex flex-wrap flex-col md:flex-row justify-center items-center gap-4'>
        <div className='md:w-5/12 border-2 border-purple-800 rounded-xl relative p-4'>
          <img alt='/' src={logo} className='absolute top-0 left-0 w-10 opacity-30' />
          <img alt='/' src={logo} className='absolute bottom-0 right-0 w-10 opacity-30' />
          <p className="text-center text-xl">Gracias Paula por cuidar de Travis tan bien. Volveremos. ❤️🐶</p>
          <p className="text-end italic">-- garridocanolaura</p>
        </div>
        <div className='md:w-5/12 border-2 border-purple-800 rounded-xl relative p-4'>
          <img alt='/' src={logo} className='absolute top-0 left-0 w-10 opacity-30' />
          <img alt='/' src={logo} className='absolute bottom-0 right-0 w-10 opacity-30' />
          <p className="text-center text-xl">Max se lo pasó genial cuando os lo deje las pasadas vacaciones. Gracias</p>
          <p className="text-end italic">-- davidpascualsoriano</p>
        </div>
        <div className='md:w-5/12 border-2 border-purple-800 rounded-xl relative p-4'>
          <img alt='/' src={logo} className='absolute top-0 left-0 w-10 opacity-30' />
          <img alt='/' src={logo} className='absolute bottom-0 right-0 w-10 opacity-30' />
          <p className="text-center text-xl">¡Rayo y Mía están felices! Muchas gracias ❤️ contigo los dejo tranquila 😊</p>
          <p className="text-end italic">-- carmen.c.c.r</p>
        </div>
        <div className='md:w-5/12 border-2 border-purple-800 rounded-xl relative p-4'>
          <img alt='/' src={logo} className='absolute top-0 left-0 w-10 opacity-30' />
          <img alt='/' src={logo} className='absolute bottom-0 right-0 w-10 opacity-30' />
          <p className="text-center text-xl">Que bien lo pasan y que felices están 😍👏</p>
          <p className="text-end italic">-- annablascosoria</p>
        </div>
      </div>
    </div>
  )
}

export default Opinions
