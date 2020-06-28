import React from "react"
// import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactForm from "../components/contactForm"
// import Fade from "react-reveal/Fade"
import fotoContacto from "../images/foto_contacto.jpg"

const Contacto = () => {
  return (
    <>
      <SEO title="Contacto" />
      <div className="my-32">
        <div className="flex flex-wrap w-full my-8 px-10">
          <div className="w-full xl:w-1/2">
            <img
              src={fotoContacto}
              className="xl:w-11/12 rounded-lg shadow-xs hover:shadow-2xl mx-auto my-auto"
              alt=""
            />
          </div>
          <div className="w-full xl:w-1/2">
            <h1 className="text-2xl text-center mt-24 xl:mt-0">Contactanos</h1>
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  )
}

export default Contacto
