import React from "react"
import Ecosystem from "../components/ecosystem"
// import { Link } from "gatsby"
import Bio from "../components/bio"
// import Layout from "../components/layout"
import SEO from "../components/seo"
// import Fullstack from "../components/charts-skills/fullstack-skills"
// import Skills from "../components/skills"
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
      {/* <Fullstack /> */}
      {/* <Skills /> */}
    </div>
  </>
  // </Layout>
)

export default IndexPage
