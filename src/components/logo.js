import React from "react"
import { Link } from "gatsby"
import LogoSvg from "../images/logo.svg"

const Logo = () => {
  return (
    <Link to="/" className="sticky top-0">
      <img
        className="w-screen-3/4 p-1 rounded-sm"
        src={LogoSvg}
        alt="Logo transluciddata"
      />
    </Link>
  )
}

export default Logo
