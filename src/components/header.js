import { useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
// import NavBar from "../components/navbar"
import BackgroundSlider from "gatsby-image-background-slider"
// import "../styles/header.css"
import Logo from "./logo"
// import SocialNav from "./socialNav"

const Header = ({ siteTitle }) => (
  <header className="flex flex-wrap md:flex-col top-0 left-0 relative w-full h-screen px-4 my-auto">
    <BackgroundSlider
      query={useStaticQuery(graphql`
        query {
          backgrounds: allFile(
            filter: { sourceInstanceName: { eq: "backgrounds" } }
          ) {
            nodes {
              relativePath
              childImageSharp {
                fluid(
                  maxWidth: 4000
                  quality: 100
                  duotone: {
                    highlight: "#192550"
                    shadow: "#f00e2e"
                    opacity: 50
                  }
                ) {
                  ...GatsbyImageSharpFluid_noBase64
                }
              }
            }
          }
        }
      `)}
      loading={"eager"}
      initDelay={2} // delay before the first transition (if left at 0, the first image will be skipped initially)
      transition={4} // transition duration between images
      duration={6} // how long an image is shown
      // specify images to include (and their order) according to `relativePath`
      images={[
        "cesar-couto-S3Dt3iMWs_U-unsplash.jpg",
        "sime-basioli-BRkikoNP0KQ-unsplash.jpg",
        "abstract-1022206_1920.jpg",
        "broccoli-3959386_1920.jpg",
        "dragonfly-1729157_1920.jpg",
      ]}
      style={{
        top: "0",
        maxHeight: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
        // transform: "rotate(-1deg) scale(1.4) ",
      }}
      // className="bg-blend-screen"
    >
      {/* Captions in sync with background images */}
      <span className="pt-10 text-xl text-gray-400 md:text-4xl bg-yellow-600 opacity-75 rounded-sm w-auto p-1 shadow-inner ml-10 text-center">
        Desarrollo digital
      </span>
      <span className="text-xl text-gray-400 md:text-4xl bg-yellow-600 opacity-75 rounded-sm w-auto p-1 shadow-inner ml-10  text-center">
        Visualizacion de datos
      </span>
      <span className="text-xl text-gray-400 md:text-4xl bg-yellow-600 opacity-75 rounded-sm w-auto p-1 shadow-inner ml-10 text-center">
        Desarrollo de E-commerce
      </span>
      <span className="text-xl text-gray-400 md:text-4xl bg-yellow-600 opacity-75 rounded-sm w-auto p-1 shadow-inner ml-10 text-center">
        Asesoria de desarrollo web
      </span>
      <span className="text-xl text-gray-400 md:text-4xl bg-yellow-600 opacity-75 rounded-sm w-auto p-1 shadow-inner ml-10 text-center">
        Integracion con datos externos
      </span>
    </BackgroundSlider>
    <div className="sticky top-0 mx-auto">
      <Logo />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
