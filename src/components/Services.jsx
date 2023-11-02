import React, { useState } from "react";
import logo from "../img/Logo-removebg-preview.png";
import serviceImage from "../img/galeria2.JPG";
import serviceImage2 from "../img/galeria6.jpg";
import { MdKeyboardArrowDown } from "react-icons/md";

import services from "../components/db/servicesdb.js";

const Services = () => {

  const [activeTab, setActiveTab] = useState('tab1-content');

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  }

  return (
    <section className="bg-purple-800/30 p-4" id="services">
      <h2>Nuestros servicios</h2>
      <div className="flex flex-col md:flex-row gap-4 justify-center items-center md:items-start">
        <div className="flex gap-4 flex-col md:w-9/12 items-center md:items-end ">
          {/* {services.map((service) => {
            return (
              <details
                open
                className="w-full group border-2 border-purple-800 p-1 flex justify-between items-center gap-2 rounded-xl bg-white hover:bg-purple-100 transition-all duration-500"
              >
                <summary className="flex group-open:border-b-2 group-open:border-purple-800  text-lg md:text-2xl mx-2 cursor-pointer font-bold gap-4 justify-between items-center text-center">
                  {service.icon}
                  {service.title}
                  <MdKeyboardArrowDown className="text-3xl text-purple-800 group-open:rotate-180 transition-all duration-500" />
                </summary>
                <div className="p-4 relative">
                  <img
                    alt="/"
                    src={logo}
                    loading="lazy"
                    className="absolute top-1 left-1 w-10 opacity-30"
                  />
                  <img
                    alt="/"
                    src={logo}
                    loading="lazy"
                    className="absolute bottom-1 right-1 w-10 opacity-30"
                  />
                  <p className="text-justify indent-4">{service.paragraph1}</p>
                  <p className="text-justify indent-4">{service.paragraph2}</p>
                </div>
              </details>
            );
          })} */}

          <div className="flex flex-col gap-10 md:flex-row">

            <ul className="bg-purple-200 py-4 px-8 rounded">
              {services.map((service) => (
                <li>
                  <a
                    key={service.id}
                    className={`cursor-pointer transition-all duration-200 relative text-xl flex gap-3 items-center w-full font-bold ${service.id !== 4 ? 'mb-4 md:mb-6' : ''} ${activeTab === `tab${service.id}-content` ? 'text-purple-800 underline' : ''}`}
                    onClick={() => handleTabClick(`tab${service.id}-content`)}
                  >
                    {service.icon}
                    {service.title}

                    <span className="hidden md:block absolute -right-12 -rotate-90">{activeTab === `tab${service.id}-content` ? <MdKeyboardArrowDown className="text-4xl bg-purple-200 rounded-full" /> : ''}</span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="tab-content-wrapper">
              {services.map((service) => (
                <section
                  key={service.id}
                  className={`tab-content ${activeTab === `tab${service.id}-content` ? 'active' : 'hidden'}`}>
                  <p className="mb-4">{service.paragraph1}</p>
                  <p className="mb-4">{service.paragraph2}</p>
                  <img
                    src={serviceImage}
                    alt="perro en el jardín"
                    loading="lazy"
                    className="w-6/12 rounded-xl border border-purple-800"
                  />
                </section>
              ))}
            </div>

          </div>

        </div>
        {/* <div className="md:w-2/12 flex md:flex-col gap-4 justify-center items-center md:items-start">
          <img
            src={serviceImage}
            alt="perro en el jardín"
            loading="lazy"
            className="w-5/12 md:w-full rounded-xl border border-purple-800"
          />
          <img
            src={serviceImage2}
            alt="perro durmiendo dentro de casa"
            loading="lazy"
            className="w-5/12 md:w-full h-auto rounded-xl border border-purple-800"
          />
        </div> */}
      </div>
    </section>
  );
};

export default Services;
