import React from "react"
import { rgba, rem } from "polished"
import styled from "styled-components"

const Container = styled.footer`
  border-top: 1px solid ${rgba("#262626", 0.8)};
  padding: ${rem("16px")};
  text-align: right;

  @media (min-width: 728px) {
    padding: ${rem("24px")};
  }
`

const Description = styled.p`
  font-size: ${rem("18px")};
  font-family: "Permanent Marker", cursive;
  background-color: transparent;
  color: ${rgba(255, 255, 255, 0.2)};
  letter-spacing: ${rem("1.5px")};
`

const Footer = () => {
  return (
    <Container>
      <Description>© {new Date().getFullYear()}</Description>
    </Container>
  )
}

export { Footer }
