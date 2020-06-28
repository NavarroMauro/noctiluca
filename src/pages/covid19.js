import React from "react"
// import { Link } from "gatsby"
import Confirmed from "../components/covid-charts/confirmed"
import Death from "../components/covid-charts/deaths"
import Recovered from "../components/covid-charts/recovered"
import Active from "../components/covid-charts/active"

// import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const Covid19 = () => (
  // <Layout>
  <>
    <SEO title="Home" />
    <div className="flex flex-wrap w-screen mx-auto justify-center mt-20">
      <div className="w-screen mb-10 py-10 px-10 xl:w-1/2">
        <Confirmed />
      </div>
      <div className="w-screen mb-10 py-10 px-10 xl:w-1/2">
        <Active />
      </div>
      <div className="w-screen mb-10 py-10 px-10 xl:w-1/2">
        <Death />
      </div>
      <div className="w-screen mb-10 py-10 px-10 xl:w-1/2">
        <Recovered />
      </div>
    </div>
  </>
  // </Layout>
)

export default Covid19
