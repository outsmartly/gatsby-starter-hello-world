/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  assetPrefix: `/static/${process.env.BUILD_ID}`,
  plugins: [
    {
      resolve: "gatsby-plugin-asset-path"
    }
  ]
}
