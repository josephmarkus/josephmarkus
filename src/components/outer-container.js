import React from "react"
import styled from "styled-components"
import { rem } from "polished"

const Container = styled.div`
  padding: ${rem("24px")} ${rem("16px")};

  @media (min-width: 728px) {
    padding: ${rem("24px")};
  }
`

const OuterContainer = props => {
  const { children, as, ...otherProps } = props

  return (
    <Container as={as} {...otherProps}>
      {children}
    </Container>
  )
}

export { OuterContainer }
