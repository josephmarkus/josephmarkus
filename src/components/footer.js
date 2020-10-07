import React from "react"
import { rgba, rem } from "polished"
import styled from "styled-components"

import { OuterContainer } from "./outer-container"
import { Container } from "./container"

const Description = styled.p`
  font-size: ${rem("18px")};
  background-color: transparent;
  color: ${rgba(255, 255, 255, 0.6)};
  text-align: center;
`

const Footer = () => {
  return (
    <OuterContainer as="footer">
      <Container>
        <Description>&copy; {new Date().getFullYear()}</Description>
      </Container>
    </OuterContainer>
  )
}

export { Footer }
