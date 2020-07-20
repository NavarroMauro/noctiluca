import React from "react"
import SEO from "../components/seo"
import MuertosHistoricos from "../components/muertosHistoricos"
import ConfirmedHistoricos from "../components/confirmedHistoricos"
import Muertos100k from "../components/muertos100K"
import MuertosMillon from "../components/muertosMillon"

const Covid19 = () => (
  <>
    <SEO title="Home" />
    <div className="flex flex-wrap w-full mx-auto justify-center">
      <div className="py-10">
        <MuertosHistoricos />
        <Muertos100k />
        <MuertosMillon />
        <ConfirmedHistoricos />
      </div>
    </div>
  </>
)

export default Covid19
