import { rgba } from "polished"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  ::selection {
    background-color: ${rgba("#262626", 0.7)};;
    color: ${rgba(255, 255, 255, 0.8)};
  }

  body {
    font-family: "Overpass", sans-serif;
    background-color: #021226;
    color: ${rgba(255, 255, 255, 0.8)};
    font-size: 16px;
  }

  a {
    background-color: ${rgba("#DB0B77", 0.5)};
    color: ${rgba(255, 255, 255, 0.8)};
    text-decoration: none;
  }

  a:hover,
  a:focus,
  a:active {
    background-color: ${rgba("#DB0B77", 0.9)};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #DB0B77;
  }
`

export { GlobalStyle }
