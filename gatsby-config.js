module.exports = {
  siteMetadata: {
    title: 'Aidil Safwan',
    author: 'Aidil Safwan',
    description:
      'Analyst Programmer @ Public Bank | Full-Stack JavaScript Web and Mobile Developer | UI/UX Designer | NodeJS, ReactJS & React Native',
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
    'gatsby-theme-material-ui',
  ],
}
