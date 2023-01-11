module.exports = {
  siteMetadata: {
    siteTitle: `OpenCV-Flow`,
    defaultTitle: `OpenCV-Flow Doc`,
    siteTitleShort: `OpenCV-Flow  Doc`,
    siteDescription: `Computer Vision IDE`,
    siteUrl: `https://opencvflow.org`,
    siteAuthor: `Rafael Alexandre Piemontez`,
    siteImage: `/banner.png`,
    siteLanguage: `pt`,
    themeColor: `#8257E6`,
    basePath: `/`,
  },
  plugins: [
    {
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        configPath: `src/config`,
        docsPath: `src/docs`,
        yamlFilesPath: `src/yamlFiles`,
        repositoryUrl: `https://github.com/Piemontez/opencvflowdocs`,
        baseDir: ``,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `OpenCV-Flow Doc`,
        short_name: `OpenCV-Flow Doc`,
        start_url: `/`,
        background_color: `#ffffff`,
        display: `standalone`,
        icon: `static/favicon.png`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-131606801-1`,
      },
    },
    `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://opencvflow.org`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
