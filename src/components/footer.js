import React from "react"
// import Img from "gatsby-image"
import Logo from "./logo"

const Footer = () => {
  return (
    <footer className="flex flex-wrap justify-between items-center w-full bg-yellow-600 py-16">
      <div className="text-sm text-center md:w-1/2 lg:w-1/3 my-6 mx-auto text-gray-600 w-1/2">
        © {new Date().getFullYear()} - Transluciddata <br /> Disenado &
        Desarrollado <br /> por @Transluciddata
      </div>
      <div className="w-full md:w-1/2 lg:w-1/3 text-center mx-auto my-6">
        Here is something
      </div>
      <div className="w-full md:w-1/2 lg:w-1/4 mx-10 my-6 text-center">
        <Logo />
      </div>
    </footer>
  )
}

export default Footer
