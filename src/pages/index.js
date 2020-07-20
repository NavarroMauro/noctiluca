import React from "react"
import Ecosystem from "../components/ecosystem"
import Bio from "../components/bio"
import SEO from "../components/seo"
import SkillsPlot from "../components/skillsPlot"
import Bounce from "react-reveal/Bounce"

const IndexPage = () => (
  // <Layout>
  <>
    <SEO title="Home" />
    <div className="w-4/5 mx-auto">
      <div className="">
        <Bio />
        <Bounce>
          <SkillsPlot />
        </Bounce>
      </div>
      <Ecosystem />
    </div>
  </>
  // </Layout>
)

export default IndexPage
