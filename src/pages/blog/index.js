import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import { rem } from "polished"

import { SEO } from "../../components/seo"
import { PublicationDate } from "../../components/publication-date"

const StyledPublicationDate = styled(PublicationDate)`
  font-size: ${rem("16px")};
`

const List = styled.ul`
  padding-left: 0;
  list-style: none;
`

const PostTitle = styled.h2`
  margin: 0;
`

export default function Blog({ data }) {
  const {
    allMdx: { nodes },
  } = data

  return (
    <>
      <SEO title="Blog" />
      <h1>Blog</h1>
      <List>
        {nodes.map(node => {
          const {
            slug,
            frontmatter: { date, title },
          } = node
          return (
            <li key={slug}>
              <Link to={`/blog/${slug}`}>
                <PostTitle>{title}</PostTitle>
              </Link>
              <StyledPublicationDate date={date} />
            </li>
          )
        })}
      </List>
    </>
  )
}

export const query = graphql`
  {
    allMdx {
      nodes {
        frontmatter {
          date
          title
        }
        slug
      }
    }
  }
`
