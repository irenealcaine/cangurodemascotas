import React from 'react'
import LegalHeader from '../components/LegalHeader'


const Legal = () => {
  return (
    <>
      <LegalHeader />

      <div className="md:w-7/12 mx-auto rounded-3xl shadow-2xl p-4 bg-body-pattern bg-12.5">
        <div className='bg-white/90 rounded-3xl p-4'>
          <h1 className="text-2xl font-bold mb-4">Aviso Legal</h1>
          <p className="mb-2">
            Este sitio web es propiedad de Canguro de Mascotas. El acceso y uso de este sitio web está sujeto a los términos y condiciones descritos a continuación.
          </p>
          <h2 className="text-xl font-bold mb-2">Propiedad intelectual</h2>
          <p className="mb-2">
            Todos los derechos de propiedad intelectual sobre el contenido de este sitio web (incluyendo, pero no limitado a, textos, imágenes, gráficos, logotipos, iconos, audio y video) son propiedad de Canguro de Mascotas o de sus respectivos propietarios. Está prohibido copiar, reproducir, distribuir o modificar cualquier parte del contenido de este sitio web sin el permiso previo por escrito de Canguro de Mascotas o del propietario correspondiente.
          </p>
          <h2 className="text-xl font-bold mb-2">Limitación de responsabilidad</h2>
          <p className="mb-2">
            El contenido de este sitio web se proporciona "tal cual" y Canguro de Mascotas no garantiza su exactitud, integridad o idoneidad para ningún propósito en particular. En ningún caso Canguro de Mascotas será responsable por cualquier daño directo, indirecto, especial, incidental o consecuente que surja del uso o la imposibilidad de uso de este sitio web.
          </p>
          <h2 className="text-xl font-bold mb-2">Enlaces a sitios de terceros</h2>
          <p className="mb-2">
            Este sitio web puede incluir enlaces a sitios web de terceros. Canguro de Mascotas no es responsable del contenido de estos sitios web de terceros y no respalda ni garantiza ningún producto o servicio ofrecido por ellos.
          </p>
          <h2 className="text-xl font-bold mb-2">Cambios a este aviso legal</h2>
          <p className="mb-2">
            Nos reservamos el derecho de actualizar este aviso legal en cualquier momento. Los cambios se publicarán en esta página y se le notificarán a los usuarios si es necesario.
          </p>
        </div>
      </div>

      <LegalHeader />

    </>
  )
}

export default Legal
