import React from "react"
import { Link } from "gatsby"
import { rem } from "polished"
import styled from "styled-components"

import { Container } from "./container"

const Navigation = styled.nav`
  display: flex;
`

const List = styled.ul`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  list-style: none;
  padding-left: 0;

  @media (min-width: 728px) {
    width: calc(100% + calc(${rem("24px")} * 2));
    margin-right: ${rem("-24px")};
    margin-left: ${rem("-24px")};
  }
`

const ListItem = styled.li`
  &:first-of-type {
    margin-right: auto;
  }
`

const StyledLink = styled(Link).attrs(props => ({
  activeStyle: {
    color: "rgba(255, 255, 255, 0.8)",
    backgroundImage: 'url("/paint-mark.svg")',
  },
}))`
  display: block;
  padding: ${rem("16px")};
  font-size: ${rem("18px")};
  color: rgb(var(--primary-color));
  border: none;
  background-color: transparent;
  background-size: 105%;
  background-position: -50% 50%;
  background-repeat: no-repeat;

  @media (min-width: 728px) {
    padding: ${rem("24px")};
  }

  &:hover,
  &:focus {
    background-color: transparent;
    color: rgba(255, 255, 255, 0.8);
    background-image: url("/paint-mark.svg");
  }
`

const LogoLink = styled(StyledLink)`
  font-weight: bold;
`

const Header = () => {
  return (
    <Container as="header">
      <Navigation>
        <List>
          <ListItem>
            <LogoLink to="/">Joseph Markus</LogoLink>
          </ListItem>
          <ListItem>
            <StyledLink to="/about/">About</StyledLink>
          </ListItem>
          <ListItem>
            <StyledLink to="/blog/" partiallyActive={true}>
              Blog
            </StyledLink>
          </ListItem>
        </List>
      </Navigation>
    </Container>
  )
}

export { Header }
