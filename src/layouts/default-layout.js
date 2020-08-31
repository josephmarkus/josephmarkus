import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { rem } from "polished"

import { Header } from "../components/header"
import { Footer } from "../components/footer"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${rem("32px")} ${rem("16px")};

  @media (min-width: 728px) {
    padding: ${rem("24px")};
    padding-top: 8%;
    padding-bottom: 8%;
    flex-direction: row;
    justify-content: center;
  }

  h1 {
    margin-bottom: ${rem("12px")};
    font-family: "Permanent Marker", cursive;
    font-size: ${rem("32px")};
    line-height: ${rem("36px")};

    @media (min-width: 728px) {
      font-size: ${rem("70px")};
      line-height: ${rem("80px")};
    }
  }

  p {
    font-size: ${rem("18px")};
    line-height: ${rem("24px")};
    max-width: 50ch;

    @media (min-width: 728px) {
      font-size: ${rem("24px")};
      line-height: ${rem("32px")};
    }
  }
`

const DefaultLayout = props => {
  const { children, path } = props

  return (
    <>
      <Header path={path} />
      <main>
        <Container>{children}</Container>
      </main>
      <Footer />
    </>
  )
}

DefaultLayout.propTypes = {
  children: PropTypes.node,
  path: PropTypes.string,
}

export { DefaultLayout }
