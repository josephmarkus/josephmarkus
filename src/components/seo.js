import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

import { useSiteMetadata } from "../components/use-site-metadata"

const SEO = ({ meta = [], title, pathname }) => {
  const { description, author, siteUrl } = useSiteMetadata()
  const metaTitle = title || ""

  return (
    <Helmet
      htmlAttributes={{
        lang: `en`,
      }}
      title={metaTitle}
      meta={[
        {
          name: `description`,
          content: description,
        },
        {
          property: `og:title`,
          content: metaTitle,
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          property: `og:url`,
          content: pathname,
        },
        {
          property: `og:image`,
          content: `${siteUrl}/icons/icon-512x512.png`,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: author,
        },
        {
          name: `twitter:title`,
          content: metaTitle,
        },
        {
          name: `twitter:description`,
          content: description,
        },
      ].concat(meta)}
    />
  )
}

SEO.propTypes = {
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
  pathname: PropTypes.string,
}

export { SEO }
