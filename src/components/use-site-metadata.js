import { useStaticQuery, graphql } from "gatsby"

const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteURL
            author
          }
        }
      }
    `
  )
  return site.siteMetadata
}

export { useSiteMetadata }
