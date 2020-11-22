import React from "react"
import PropTypes from "prop-types"
import { rem } from "polished"
import styled from "styled-components"

const Container = styled.div`
  > *:first-child {
    margin-top: 0;
  }

  ol {
    list-style: none;
    padding: 0;
  }

  .strapline {
    display: block;
    margin-bottom: ${rem("-4px")};
  }

  .date {
    font-size: ${rem("16px")};
  }
`

const Employment = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  )
}

Employment.propTypes = {
  children: PropTypes.node,
}

export { Employment }