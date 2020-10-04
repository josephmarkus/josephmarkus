import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { rem } from "polished"

const Image = styled(Img)`
  width: 100%;
  flex-shrink: 0;
  max-width: 200px;
  margin-bottom: ${rem("16px")};
  filter: grayscale(100%) contrast(1.7);

  @media (min-width: 728px) {
    max-width: 225px;
    max-height: 225px;
    margin-bottom: ${rem("16px")};
  }
`

const Avatar = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "joseph-markus.png" }) {
        childImageSharp {
          fluid(maxWidth: 250) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Image
      fluid={data.file.childImageSharp.fluid}
      alt="Joseph Markus, a Software Engineer based in London, UK"
    />
  )
}

export { Avatar }
