const path = require(`path`)

require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Joseph Markus`,
    description: `I am a Software Engineer based in London, UK. I have been coding since 2011. I currently work at Simply Business, an online broker of business insurance.`,
    siteUrl: "https://www.josephmarkus.co.uk/",
  },
  plugins: [
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
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve("./src/layouts/posts.js"),
        },
        gatsbyRemarkPlugins: [
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
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: process.env.AWS_BUCKET_NAME,
        protocol: "https",
        hostname: "www.josephmarkus.co.uk",
      },
    },
    `gatsby-plugin-sitemap`,
  ],
}
