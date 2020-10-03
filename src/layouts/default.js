import React from "react"
import PropTypes from "prop-types"

import { Header } from "../components/header"
import { Footer } from "../components/footer"
import { OuterContainer } from "../components/outer-container"
import { Container } from "../components/container"
import { SEO } from "../components/seo"
import { useSiteMetadata } from "../components/use-site-metadata"

const DefaultLayout = props => {
  const { children, path } = props
  const { siteURL } = useSiteMetadata()
  const pathname = `${siteURL}${path}`

  return (
    <>
      <SEO pathname={pathname} />
      <Header path={path} />
      <OuterContainer as="main">
        <Container>{children}</Container>
      </OuterContainer>
      <Footer />
    </>
  )
}

DefaultLayout.propTypes = {
  children: PropTypes.node,
  path: PropTypes.string,
}

export { DefaultLayout }
