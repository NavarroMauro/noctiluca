import React, { useState, useRef, useEffect } from "react"
// import { Link } from "gatsby"
import SocialNav from "./socialNav"
import { useSiteMetadata } from "../hooks/useSiteMetadata"
import Logo from "./logo"
// import Link from "gatsby-plugin-transition-link"
import AniLink from "gatsby-plugin-transition-link/AniLink"

// import "../styles/navbar.css"

const NavBar = () => {
  const { title, menuLinks } = useSiteMetadata()
  const [isExpanded, toggleExpansion] = useState(false)
  const [isActive, setMenuState] = useState(false)

  const node = useRef()
  console.log(node)

  useEffect(() => {
    // add when mounted
    document.addEventListener("mousedown", handleClick) // return function to be called when unmounted
    return () => {
      document.removeEventListener("mousedown", handleClick)
    }
  }, [])

  const handleClick = e => {
    if (node.current.contains(e.target)) {
      // inside click
      return
    } // outside click
    // ... do whatever on click outside here ...
    toggleExpansion(isExpanded)
  }

  return (
    <nav
      ref={node}
      className="flex items-center justify-around flex-wrap sticky top-0 bg-yellow-600 z-10"
    >
      <div className="w-64 mr-6">
        <Logo />
      </div>
      <div className="block lg:hidden">
        <button
          role="menu"
          className="flex items-center px-3 py-2 border rounded text-teal-200 border-yellow-500 hover:text-white hover:border-white mr-2"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="fill-current h-3 w-3 text-yellow-500"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>

      <div
        className={`${
          isExpanded ? `block` : `hidden`
        } w-full block lg:flex lg:items-center lg:w-auto`}
      >
        <div
          className="text-sm lg:flex-grow"
          onClick={() => setMenuState(!isActive)}
        >
          {menuLinks.map(link => (
            <AniLink
              fade
              // paintDrip
              // swipe
              // color="#d69e"
              // swipe
              // direction="left"
              // top="entry"
              // entryOffset={80}
              // direction="left"
              // duration={1}
              // exit={{
              //   trigger: ({ exit, node }) =>
              //     this.interestingExitAnimation(exit, node),
              //   length: 1,
              // }}
              // entry={{
              //   delay: 0.6,
              // }}
              key={link.name}
              to={link.link}
              className="block mt-4 lg:inline-block lg:mt-0 px-2 py-0 text-yellow-500 text-xl rounded-sm transition duration-500 ease-in-out hover:bg-yellow-500 hover:text-yellow-700 transform hover:scale-105 shadow-xl mx-4"
              activeClassName="bg-yellow-500 text-yellow-600"
              onClick={() => toggleExpansion(!isExpanded)}
            >
              {link.name}
            </AniLink>
          ))}
        </div>
      </div>
      <SocialNav />
    </nav>
  )
}

export default NavBar
