import React from "react"
import { Link, graphql } from "gatsby"
// import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
// import { rhythm, scale } from "../utils/typography"

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext
  return (
    <div location={location} title={siteTitle} className="w-8/12 mx-auto my-20">
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />

      <article>
        <header className="mb-8">
          <h1 className="text-2xl">{post.frontmatter.title}</h1>
          <p className="text-lg">{post.frontmatter.date}</p>
        </header>

        <section
          dangerouslySetInnerHTML={{ __html: post.html }}
          className="leading-10"
        />
        <h />
        <footer></footer>
      </article>

      <nav>
        <ul>
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
