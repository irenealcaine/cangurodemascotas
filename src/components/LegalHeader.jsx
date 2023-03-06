import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../img/Logo-removebg-preview.png'

const LegalHeader = () => {
  return (
    <>
      <div>
        <Link
          to="/"
          className='flex items-center mx-4 my-2'>
          <img src={logo} alt="logo" className='w-4' />
          <p className='text-purple-800 text-xl font-semibold px-2 hover:underline'>Volver</p>
          <img src={logo} alt="logo" className='w-4' />
        </Link>
      </div>
    </>
  )
}

export default LegalHeader
