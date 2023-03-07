import React from 'react'
import LegalHeader from '../components/LegalHeader'


const Cookies = () => {
  return (
    <>
      <LegalHeader />

      <div className="md:w-7/12 mx-auto rounded-3xl shadow-2xl p-4 bg-body-pattern bg-12.5">
        <div className='bg-white/90 rounded-3xl p-4'>
          <h1 className="text-2xl font-bold mb-4">Política de Cookies</h1>
          <p className="mb-2 text-justify indent-4">
            En nuestro sitio web no utilizamos cookies ni tecnologías similares para recopilar información sobre el usuario.
          </p>
          <p className="mb-2 text-justify indent-4">
            Si en el futuro decidimos utilizar cookies, actualizaremos nuestra política de cookies para informar a los usuarios sobre los cambios y proporcionaremos la opción de aceptar o rechazar el uso de cookies.
          </p>
          <p className="mb-2 text-justify indent-4">
            Si tienes alguna pregunta o inquietud acerca de nuestra política de privacidad y el uso de cookies, no dudes en ponerte en contacto con nosotros.
          </p>
        </div>
      </div>

      <LegalHeader />

    </>
  )
}

export default Cookies
