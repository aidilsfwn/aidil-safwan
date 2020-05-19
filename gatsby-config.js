module.exports = {
  siteMetadata: {
    title: 'Aidil Safwan',
    author: 'Aidil Safwan',
    description: 'Web and Mobile Developer || Data Science Enthusiast',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/avatar-aidilsafwancom.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-theme-material-ui'
  ],
}
