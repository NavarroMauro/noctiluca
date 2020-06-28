import { useStaticQuery, graphql } from "gatsby"

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            author
            description
            menuLinks {
              link
              name
            }
            title
          }
        }
      }
    `
  )
  return site.siteMetadata
}
