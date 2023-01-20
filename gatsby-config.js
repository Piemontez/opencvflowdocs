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
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "UA-18861122-3",
          //"AW-CONVERSION_ID", // Google Ads / Adwords / AW
          //"DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          optimize_id: "OPT_CONTAINER_ID",
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          //exclude: ["/preview/**", "/do-not-track/me/too/"],
          // Defaults to https://www.googletagmanager.com
          origin: "https://www.googletagmanager.com",
          // Delays processing pageview events on route update (in milliseconds)
          delayOnRouteUpdate: 0,
        },
      },
    },
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
