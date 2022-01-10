module.exports = {
  pathPrefix: `/docs/v_0`,
  siteMetadata: {
    title: `OpenCV-Flow`,
    name: `OpenCV-Flow`,
    siteUrl: `https://opencvflow.org`,
    description: `This is my description that will be used in the meta tags and important for search results`,
    social: [
      {
        name: `github`,
        url: `https://github.com/piemontez/opencvflow`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/piemontez/`,
      },
    ],
    sidebarConfig: {
      forcedNavOrder: ['/overview', '/installation', '/components', '/properties'],
      ignoreIndex: false,
    },
  },
  plugins: [{ resolve: `gatsby-theme-document` }],
};
