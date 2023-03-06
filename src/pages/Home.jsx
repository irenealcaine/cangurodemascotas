import React from 'react'
import { useState } from "react";
import BannerPToW from "../components/BannerPToW";
import BannerWToP from "../components/BannerWToP";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Header from "../components/Header";
import Modal from "../components/Modal";
import Opinions from "../components/Opinions";
import Services from "../components/Services";

const Home = () => {

  const [selectedImg, setSelectedImg] = useState(null)

  return (
    <>
      <div className="p-4 bg-body-pattern bg-12.5">
        <div className="bg-white/90 rounded-xl shadow-3xl max-w-[1900px] mx-auto">
          <Header />
          <BannerWToP />
          <Services />
          <BannerPToW />
          <Opinions />
          <BannerWToP />
          <Gallery setSelectedImg={setSelectedImg} />
          {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />}
          <BannerPToW />
          <Contact />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home
