import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { rem } from "polished"

import { SEO } from "../components/seo"

const Image = styled(Img)`
  width: 100%;
  flex-shrink: 0;
  max-width: 200px;
  margin-bottom: ${rem("12px")};
  border-radius: 50%;
  filter: grayscale(100%) contrast(1.7);

  @media (min-width: 728px) {
    max-width: 300px;
    max-height: 300px;
    margin-bottom: ${rem("24px")};
    margin-right: ${rem("48px")};
  }
`

export default function About({ data }) {
  return (
    <>
      <SEO title="About" />
      <Image
        fluid={data.file.childImageSharp.fluid}
        alt="Joseph Markus, a Software Engineer based in London, UK"
      />
      <div>
        <h1>About</h1>
        <p>...</p>
      </div>
    </>
  )
}

export const query = graphql`
  query {
    file(relativePath: { eq: "joseph-markus.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
