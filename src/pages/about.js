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

        <p>
          I began my career at the age of 16, working as a photojournalist for a
          major news website in the Baltic states -{" "}
          <a href="https://www.delfi.lt/">DELFI</a>. My career highlight was
          when I was nominated in the News category at a prestigious Lithuanian
          Press Photography 2009 awards.{" "}
          <a href="http://www.old2.pressphoto.lt/lt/parodos/lsfk2009_adamkus/">
            Here are a few pictures
          </a>{" "}
          of former president of Lithuania taking a look at the pictures at the
          exhibition.
        </p>

        <p>
          With the release of the original iPhone in 2007, there{" "}
          <a href="https://www.nytimes.com/2009/08/11/business/media/11photo.html">
            were widely held views
          </a>{" "}
          that it marked the beginning of an end to photojournalism as we know
          it. In 2010 I pursued my dreams by moving to the UK and taking up film
          and television studies at{" "}
          <a href="https://www.kingston.ac.uk/">Kingston University</a>.
        </p>

        <p>
          To pay the bills, I worked throughout my studies. A few odd jobs were
          quickly followed by an in-house researcher’s role at OneWeek Media.
          This is where I discovered my new passion for web development. In my
          role I was designing and building a number of small websites, using
          Photoshop, HTML and CSS. I have learnt to appreciate the delicate
          process of designing something from scratch and making many mistakes
          along the way.
        </p>

        <p>
          I then taught myself how to develop websites using WordPress. This
          allowed me to build on my existing skills and get a sense of dynamic
          websites. I thought it was quite something to have a website powered
          by a content management system, enabling other people to make changes
          as they wish.
        </p>

        <p>
          Creating custom themes and trying to use as few plugins as possible
          was one of my driving principles. But that wasn’t enough, so I moved
          on to take a role at The Creative Clinic, a digital agency. They were
          looking to raise the bar and bring their first developer in house. In
          this contract role I have gained a much deeper understanding of
          WordPress, domain and DNS management. With customers trusting me and
          the agency with their web presence, there is a lot to be said about
          expectation management too. Small business owners would ring the
          office and would expect everything to be done here and now. That
          taught me how to be agile.
        </p>

        <p>
          Soon my contract was up and away from Mill Hill, I took on a new role
          at <a href="https://www.ostmodern.co.uk/">Ostmodern</a>,
          video-on-demand experts based near Old Street. This is where
          previously unfamiliar terms such as Git, Bower, Gulp, Grunt, SASS,
          BEM, Webpack, dev, staging, preprod, and many others quickly filled up
          my vocabulary.
        </p>

        <p>
          Ostmodern was a real stepping stone for my career. This is where I
          worked on projects for the{" "}
          <a href="https://player.bbc.com/en">BBC Worldwide</a> (now BBC
          Studios), <a href="https://player.bfi.org.uk/britain-on-film">BFI</a>,
          and <a href="https://www.olympicchannel.com">Olympic Channel</a>.
          During my time there, I found myself in a unique position somewhere
          between design and engineering. When designers needed pixel-precision,
          they would come to me. My earlier struggles trying to put a design of
          my own taught me a lesson that turned into my edge.
        </p>

        <p>
          This edge is what got me hired at{" "}
          <a href="https://gocardless.com/">GoCardless</a>, where I joined as a
          front-end developer under Design. They didn’t want just an engineer,
          they wanted an engineer who cared deeply about design. They’ve got me
          and I couldn’t be more proud of my time at one of London’s fastest
          growing fintechs. The mad rush of an agency was over and it was all
          about quality and the why. You start with why and everything else
          follows. Where at Ostmodern I discovered the tools, at GoCardless I
          was utilising every single one of them, because expectations were
          higher than ever.
        </p>

        <p>
          One of my first assignments was to take a desktop-friendly website and
          make it responsive. Few months later I joined a newly formed team with
          a single goal - to increase customer acquisition. 9 months and 2
          failed A/B experiments later, we delivered with 10% increase in
          customer sign-ups.
        </p>

        <p>
          With yet another reorg on the cards, as it is common for fast scaling
          start ups, it was time for a change. This is when I joined{" "}
          <a href="https://www.eporta.com/">eporta</a>, an online sourcing
          platform. My number one task was to work in a small agile team in
          order to transform their marketing website. The process was to
          understand our customers’ needs, collaborate with design, build
          concepts, and keep iterating. Once we had something we were proud of,
          we put it in front of our customers. I then joined a team working on
          the core product, where I worked on various features.
        </p>

        <p>
          In March 2020 I joined{" "}
          <a href="https://www.simplybusiness.co.uk/">Simply Business</a>, an
          online broker of business insurance where I work in a cross-functional
          team on company’s UK and US sites.
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
