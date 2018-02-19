module.exports = {
  siteMetadata: {
    title: 'Gina Zhang',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/content`,
      }
    },
    'gatsby-transformer-json',
    'gatsby-transformer-remark'
  ]
};
