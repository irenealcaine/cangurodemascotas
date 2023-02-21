import React from 'react'
// import insta1 from '../img/insta1.jpg'
// import insta2 from '../img/insta2.jpg'
// import insta3 from '../img/insta3.jpg'
// import insta4 from '../img/insta4.jpg'
// import insta5 from '../img/insta5.jpg'
// import insta6 from '../img/insta6.jpg'
// import insta7 from '../img/insta7.jpg'
// import insta8 from '../img/insta8.jpg'
import gallery from './db/gallerydb.js'


const Gallery = ({ setSelectedImg }) => {
  return (
    <div className='bg-purple-800/30 p-4'>
      <h2>Nuestros clientes peludos</h2>
      <div className='flex flex-wrap gap-4 justify-center items-center'>
        {/* <img alt='/' src={insta2} className='showModal sm:w-12/12 md:w-auto md:h-64 rounded-xl hover:outline hover:outline-purple-800 cursor-pointer transition-all duration-75' />

        <div className='modal h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black/70 hidden'>
          <img alt='/' src={insta3} className='sm:w-12/12 md:h-4/5 rounded-xl' />
        </div>

        <img alt='/' src={insta3} className='sm:w-12/12 md:w-auto md:h-64 rounded-xl hover:outline hover:outline-purple-800 cursor-pointer transition-all duration-75' />
        <img alt='/' src={insta4} className='sm:w-12/12 md:w-auto md:h-64 rounded-xl hover:outline hover:outline-purple-800 cursor-pointer transition-all duration-75' />
        <img alt='/' src={insta5} className='sm:w-12/12 md:w-auto md:h-64 rounded-xl hover:outline hover:outline-purple-800 cursor-pointer transition-all duration-75' />
        <img alt='/' src={insta1} className='sm:w-12/12 md:w-auto md:h-64 rounded-xl hover:outline hover:outline-purple-800 cursor-pointer transition-all duration-75' />
        <img alt='/' src={insta6} className='sm:w-12/12 md:w-auto md:h-64 rounded-xl hover:outline hover:outline-purple-800 cursor-pointer transition-all duration-75' />
        <img alt='/' src={insta7} className='sm:w-12/12 md:w-auto md:h-64 rounded-xl hover:outline hover:outline-purple-800 cursor-pointer transition-all duration-75' />
        <img alt='/' src={insta8} className='sm:w-12/12 md:w-auto md:h-64 rounded-xl hover:outline hover:outline-purple-800 cursor-pointer transition-all duration-75' /> */}
        {gallery.map((photo) => {
          return (
            <img
              alt='/'
              src={photo.src}
              onClick={() => setSelectedImg(photo.src)}
              className='w-5/12 md:w-auto md:h-64 rounded-xl hover:outline hover:outline-purple-800 cursor-pointer transition-all duration-75' />
          )
        })}
      </div>
    </div>
  )
}

export default Gallery
