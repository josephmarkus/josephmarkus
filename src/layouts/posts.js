import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { rem } from "polished"
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader"

import { SEO } from "../components/seo"

deckDeckGoHighlightElement()

const Container = styled.div`
  > *:first-child {
    margin-top: 0;
  }

  deckgo-highlight-code {
    margin-top: ${rem("28px")};
  }
`

const PostsLayout = props => {
  const { children } = props

  return (
    <>
      <SEO title={props.pageContext.frontmatter.title} />
      <Container>{children}</Container>
    </>
  )
}

PostsLayout.propTypes = {
  children: PropTypes.node,
}

export default PostsLayout
