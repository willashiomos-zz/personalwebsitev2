module.exports = {
  siteMetadata: {
    title: `Willa Shiomos`
  },
  pathPrefix: "/personalwebsitev2",
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: 'src/files/favicon.png'
      }
    }
  ]
}
