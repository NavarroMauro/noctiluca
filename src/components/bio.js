import React from "react"
import rocket from "../images/rocket.svg"
import mobile from "../images/mobile.svg"
import bulb from "../images/bulb.svg"
import thunder from "../images/thunder.svg"
import Zoom from "react-reveal/Zoom"

const about = [
  {
    name: "Velocidad",
    description:
      "Como usuario por sobre todo quiero navegar en una pagina rapida, sin mayores demoras",
    svgUrl: rocket,
  },
  {
    name: "Adaptable",
    description:
      "Todos mis desarrollos estan adaptados y optimisados para fucionar visualmente en distintos tipos de dispositivos",
    svgUrl: mobile,
  },
  {
    name: "Intuitivos",
    description:
      "Me inclino siempre por una interfaz limpia y mi eleccion tiene que ver con la facilidad de uso, UX/UI intuitivo.",
    svgUrl: bulb,
  },
  {
    name: "Dinamicos",
    description:
      "Incluso sitios Web estaticos deben ser dinamicos. El usuario  interaccionan con ",
    svgUrl: thunder,
  },
]

const Bio = () => {
  return (
    <div className="mx-auto">
      <h1 className="text-center text-gray-600 text-2xl mt-16 uppercase">
        Focus
      </h1>
      <div className="flex flex-wrap justify-around">
        {about.map(each => {
          return (
            <Zoom ssrFadeout key={each.name}>
              <div className="max-w-xs rounded overflow-hidden shadow-lg my-10 md:w-1/5 text-justify  hover:text-gray-600 bg-gray-300 hover:bg-opacity-25 p-1">
                <img
                  className="w-9/12 mx-auto"
                  src={each.svgUrl}
                  alt={each.name}
                />
                <div className="px-6 py-4 h-full">
                  <h1 className="font-bold text-xl mb-2">{each.name}</h1>
                  <p className="text-gray-700 text-base  hover:text-justify">
                    {each.description}
                  </p>
                </div>
              </div>
            </Zoom>
          )
        })}
      </div>
    </div>
  )
}

export default Bio
