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

export default function Home({ data }) {
  return (
    <>
      <SEO title="Software Engineer" />
      <Image
        fluid={data.file.childImageSharp.fluid}
        alt="Joseph Markus, a Software Engineer based in London, UK"
      />
      <div>
        <h1>Joseph Markus</h1>
        <p>
          Hi! I am a Software Engineer based in London, UK. I have been coding
          since 2011. I began my engineering career working for different
          digital agencies, including{" "}
          <a href="https://www.ostmodern.co.uk/">Ostmodern</a> before joining
          fintech <a href="https://gocardless.com/">GoCardless</a> and online
          sourcing platform <a href="https://www.eporta.com/">eporta</a>. During
          my time I have worked on{" "}
          <a href="https://player.bbc.com/">BBC Player</a> for BBC Worldwide
          (now <a href="https://www.bbcstudios.com/">BBC Studios</a>),{" "}
          <a href="https://player.bfi.org.uk/britain-on-film">
            Britain on Film
          </a>{" "}
          for <a href="https://www.bfi.org.uk/">BFI</a>, as well as{" "}
          <a href="https://www.olympicchannel.com/">Olympic Channel</a>. I
          currently work at{" "}
          <a href="https://www.simplybusiness.co.uk/">Simply Business</a>, an
          online broker of business insurance.
        </p>
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
