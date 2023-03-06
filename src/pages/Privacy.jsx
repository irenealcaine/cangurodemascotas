import React from 'react'
import LegalHeader from '../components/LegalHeader'

const Privacy = () => {
  return (
    <>
      <LegalHeader />

      <div className="md:w-7/12 mx-auto rounded-3xl shadow-2xl p-4 bg-body-pattern bg-12.5">
        <div className='bg-white/90 rounded-3xl p-4'>
          <h1 className="text-2xl font-bold mb-4">Política de Privacidad</h1>
          <p className="mb-2">
            En Canguro de Mascotas nos tomamos muy en serio la privacidad de nuestros usuarios y clientes. Esta política de privacidad describe cómo recopilamos, utilizamos y compartimos la información personal que recopilamos a través de nuestro sitio web Canguro de Mascotas.
          </p>
          <h2 className="text-xl font-bold mb-2">Información que recopilamos</h2>
          <p className="mb-2">
            Recopilamos información personal de los usuarios cuando solicitan uno de nuestros servicios. La información que recopilamos puede incluir nombre, dirección de correo electrónico, dirección postal y número de teléfono.
          </p>
          <h2 className="text-xl font-bold mb-2">Cómo utilizamos la información</h2>
          <p className="mb-2">
            Utilizamos la información que recopilamos para proporcionar servicios y soporte al cliente. También podemos utilizar la información para mejorar nuestro sitio web y personalizar la experiencia del usuario.
          </p>
          <h2 className="text-xl font-bold mb-2">Cómo compartimos la información</h2>
          <p className="mb-2">
            No compartimos la información personal de los usuarios con terceros, excepto cuando sea necesario para procesar pedidos o cumplir con la ley.
          </p>
          <h2 className="text-xl font-bold mb-2">Cómo protegemos la información</h2>
          <p className="mb-2">
            Tomamos medidas de seguridad razonables para proteger la información personal de los usuarios, incluyendo el uso de medidas técnicas y organizativas apropiadas para proteger contra la pérdida, el uso indebido y la alteración de la información.
          </p>
          <h2 className="text-xl font-bold mb-2">Cambios a nuestra política de privacidad</h2>
          <p className="mb-2">
            Nos reservamos el derecho de actualizar nuestra política de privacidad en cualquier momento. Los cambios se publicarán en esta página y se le notificarán a los usuarios si es necesario.
          </p>
        </div>
      </div>

      <LegalHeader />

    </>
  )
}

export default Privacy
