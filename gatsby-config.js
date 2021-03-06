module.exports = {
  pathPrefix: '/gatsby-portfolio',
  siteMetadata: {
    title: `Layer's lair`,
    description: `Have a look at my portfolio, a site where you can find a showcase of my best projects!`,
    author: `Layer R-`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `thumbs`,
        path: `${__dirname}/src/projects/thumbs`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Layer's portfolio`,
        short_name: `Layer`,
        start_url: `/`,
        background_color: `#118488`,
        theme_color: `#118488`,
        display: `standalone`,
        icon: `src/images/modern-icon_teal.png`, // This path is relative to the root of the site.
      },
    },
   `gatsby-plugin-offline`,
  ],
}
