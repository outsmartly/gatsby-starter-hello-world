/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  assetPrefix: `assets/${process.env.DEPLOY_ID}`,
  plugins: [
    {
      resolve: "gatsby-plugin-asset-path"
    }
  ]
}
