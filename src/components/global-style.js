import { rgba, rem } from "polished"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  :root {
    /* #DB0B77 */
    --primary-color: 219, 11, 119;
  }

  ::selection {
    background-color: ${rgba("#262626", 0.7)};;
    color: ${rgba(255, 255, 255, 0.7)};
  }

  body {
    font-family: "Overpass", sans-serif;
    background-color: #021226;
    color: ${rgba(255, 255, 255, 0.7)};
    font-size: 16px;
  }

  a {
    background-color: rgba(var(--primary-color), 0.5);
    color: ${rgba(255, 255, 255, 0.7)};
    text-decoration: none;
  }

  a:hover,
  a:focus,
  a:active {
    background-color: rgba(var(--primary-color), 0.9);
  }

  code {
    background-color: ${rgba("#262626", 0.7)};;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: rgb(var(--primary-color));
  }

  h1 {
    margin-top: ${rem("20px")};
    font-size: ${rem("34px")};
    line-height: ${rem("42px")};

    @media (min-width: 728px) {
      margin-top: ${rem("26px")};
      font-size: ${rem("48px")};
      line-height: ${rem("60px")};
    }
  }

  h2 {
    margin-top: ${rem("34px")};
    font-size: ${rem("22px")};
    line-height: ${rem("28px")};

    @media (min-width: 728px) {
      margin-top: ${rem("64px")};
      font-size: ${rem("24px")};
      line-height: ${rem("32px")};
    }
  }

  main {
    p,
    pre,
    time,
    li {
      margin-top: ${rem("28px")}; 
      font-size: ${rem("18px")};
      line-height: ${rem("28px")};

      @media (min-width: 728px) {
        font-size: ${rem("21px")};
        line-height: ${rem("32px")};
      }
    }
  }

  figure {
    margin: 0;
  }

  figcaption {
    display: block;
    margin-top: ${rem("10px")};
    font-size: ${rem("14px")};
    line-height: ${rem("24px")};
  }

  .gatsby-resp-image-image {
    box-shadow: none  !important;
  }
`

export { GlobalStyle }
