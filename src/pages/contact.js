import React from "react"

import { SEO } from "../components/seo"

export default function Contact() {
  return (
    <>
      <SEO title="Contact" />
      <div>
        <h1>Contact</h1>
        <p>
          You can find me on{" "}
          <a href="https://www.linkedin.com/in/joseph-markus-964a68104/">
            LinkedIn
          </a>
          , <a href="https://github.com/josephmarkus">GitHub</a> or you can
          email me{" "}
          <a href="mailto:joseph.markus@outlook.com">
            joseph.markus@outlook.com
          </a>
        </p>
      </div>
    </>
  )
}
