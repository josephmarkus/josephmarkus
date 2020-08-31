import React from "react"
import { Link } from "gatsby"
import { rgba, rem } from "polished"
import styled from "styled-components"

const Container = styled.header`
  border-bottom: 1px solid ${rgba("#262626", 0.8)};
`

const Navigation = styled.nav`
  display: flex;
`

const List = styled.ul`
  display: flex;
  justify-content: flex-end;
  margin-left: auto;
`

const ListItem = styled.li`
  border-left: 1px solid ${rgba("#262626", 0.8)};
`

const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  padding: ${rem("16px")};
  font-size: ${rem("18px")};
  font-family: "Permanent Marker", cursive;
  background-color: transparent;
  color: #db0b77;

  &:hover,
  &:focus,
  &:active {
    background-color: transparent;
  }
`

const StyledLink = styled(Link)`
  display: block;
  padding: ${rem("16px")};
  font-size: ${rem("18px")};
  font-family: "Permanent Marker", cursive;
  background-color: transparent;
  color: #db0b77;

  @media (min-width: 728px) {
    padding: ${rem("24px")};
  }

  &:hover,
  &:focus,
  &:active {
    background-color: ${rgba("#DB0B77", 0.5)};
    color: ${rgba(255, 255, 255, 0.8)};
  }
`

const Header = props => {
  const { path } = props
  return (
    <Container>
      <Navigation>
        {path !== "/" && <LogoLink to="/">Joseph Markus</LogoLink>}
        <List>
          <ListItem>
            <StyledLink to="/about">About</StyledLink>
          </ListItem>
          <ListItem>
            <StyledLink to="/contact">Contact</StyledLink>
          </ListItem>
        </List>
      </Navigation>
    </Container>
  )
}

export { Header }
