import React from 'react'

const Footer = () => {
  return (


    <footer className="bg-purple-800 py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex flex-wrap">
          <a
            href="/aviso-legal"
            className="text-gray-300 hover:text-white mr-4"
          >
            Aviso legal
          </a>
          <a
            href="/politica-de-cookies"
            className="text-gray-300 hover:text-white mr-4"
          >
            Política de cookies
          </a>
          <a
            href="/politica-de-privacidad"
            className="text-gray-300 hover:text-white mr-4"
          >
            Política de privacidad
          </a>
        </div>

        <a href="https://miwebpersonal.com" className="text-gray-300 hover:text-white">
          Hecho por Irene
        </a>
      </div>
    </footer>



  )
}

export default Footer
