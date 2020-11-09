/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {

  /* Your site config here */
  siteMetadata: {
    title: "Candy Fluffs",
    description: "just a girl who likes drawing",
  },
  plugins: [
    // {
    //   resolve: `gatsby-source-datocms`,
    //   options: {
    //     apiToken: `f1c41492095c2a4b8c49581c53baae`,
    //     preview: false,
    //     disableLiveReload: false,
    //   },
    // },
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: process.env.API_URL || "http://localhost:1337",
        contentTypes: [
          // List of the Content Types you want to be able to request from Gatsby.
          "product"
        ],
        queryLimit: 1000,
      },
    },
  ],
}
