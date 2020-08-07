import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Bounce from "react-reveal/Bounce"
import SEO from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges
  console.log(posts)

  return (
    <div className="w-3/4 mx-auto my-6">
      <h1 className="text-2xl my-6">Blog</h1>
      <div location={location} title={siteTitle}>
        <SEO title="All posts" />
        {/* <Bio /> */}
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <Bounce key={node.fields.slug} bottom>
              <article>
                <header>
                  <h3 className="text-xl">
                    <Link to={node.fields.slug}>{title}</Link>
                  </h3>
                  <small>{node.frontmatter.date}</small>
                </header>
                <section className="flex">
                  <Img
                    fixed={node.frontmatter.featuredImage.childImageSharp.fixed}
                    className="mr-10 rounded-md shadow-2xl float-left"
                  />
                  <p
                    dangerouslySetInnerHTML={{
                      __html: node.frontmatter.description || node.excerpt,
                    }}
                  />
                </section>
              </article>
            </Bounce>
          )
        })}
      </div>
    </div>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            featuredImage {
              childImageSharp {
                fixed(width: 200, height: 200) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
`
