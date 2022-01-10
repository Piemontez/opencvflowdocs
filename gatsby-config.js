module.exports = {
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
    ],
    sidebarConfig: {
      forcedNavOrder: ['/overview', '/installation', '/components', '/properties'],
      ignoreIndex: true,
    },
  },
  plugins: [{ resolve: `gatsby-theme-document` }],
};
