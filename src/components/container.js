import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { rem } from "polished"

const StyledContainer = styled.div`
  max-width: ${rem("670px")};
  margin: 0 auto;
`

const Container = props => {
  const { children, as, ...otherProps } = props

  return (
    <StyledContainer as={as} {...otherProps}>
      {children}
    </StyledContainer>
  )
}

Container.propTypes = {
  children: PropTypes.node,
}

export { Container }
