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
    `gatsby-plugin-sharp`, `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.API_TOKEN,
        preview: false,
        disableLiveReload: false,
      },
    },
  ],
}
