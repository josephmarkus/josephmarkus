const path = require(`path`)

require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Joseph Markus`,
    titleTemplate: "%s",
    description: `Based in London, UK. Currently at Simply Business, an online broker of business insurance.`,
    siteUrl: "https://josephmarkus.co.uk",
    image: "/opengraph.png",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-layout`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/blog/`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-remark-images`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve("./src/layouts/posts.js"),
        },
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 670,
              linkImagesToOriginal: false,
              backgroundColor: "none",
              disableBgImage: true,
              withWebp: true,
              showCaptions: true,
            },
          },
          {
            resolve: `gatsby-remark-highlight-code`,
            options: {
              terminal: "carbon",
              theme: "A11y-dark",
            },
          },
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              icon: false,
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: process.env.AWS_BUCKET_NAME,
        protocol: "https",
        hostname: "josephmarkus.co.uk",
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Software Engineer Joseph Markus`,
        short_name: `Joseph Markus`,
        start_url: `/`,
        background_color: `#021326`,
        theme_color: `#DB0B77`,
        display: `standalone`,
        icon: `src/images/icon.png`,
      },
    },
  ],
}
