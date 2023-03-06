import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (


    <footer className="bg-purple-800 py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex md:flex-row flex-col">
          <Link
            to="/legal"
            className="text-gray-300 hover:text-white mr-4"
          >
            Aviso legal
          </Link>
          <Link
            to="/cookies"
            className="text-gray-300 hover:text-white mr-4"
          >
            Política de cookies
          </Link>
          <Link
            to="/privacy"
            className="text-gray-300 hover:text-white mr-4"
          >
            Política de privacidad
          </Link>
        </div>

        <a href="https://irenealcainealvarez.es" target="_blank" rel='noreferrer' className="text-gray-300 hover:text-white">
          Hecho por Irene
        </a>
      </div>
    </footer>



  )
}

export default Footer
