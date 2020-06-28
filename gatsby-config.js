module.exports = {
  siteMetadata: {
    title: `Transluciddata`,
    author: `Mauricio Cifuentes`,
    description: `Web & visualizations`,
    menuLinks: [
      {
        name: "HOME",
        link: "/",
      },
      {
        name: "BLOG",
        link: "/blog",
      },
      {
        name: "CONTACTO",
        link: "/contacto",
      },
    ],
  },
  plugins: [
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `backgrounds`,
        path: `${__dirname}/src/images/bg`, // wherever background images are stored
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `transluciddata`,
        short_name: `transluciddata`,
        start_url: `https://transluciddata.com/`,
        background_color: `#d69e2e`,
        theme_color: `#d69e2e`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: "UA-165631318-1",
      },
    },
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: "UA-165631318-1",
          // Setting this parameter is optional
          anonymize: true,
        },
        facebookPixel: {
          pixelId: "YOUR_FACEBOOK_PIXEL_ID",
        },
        // Defines the environments where the tracking should be available  - default is ["production"]
        environments: ["production", "development"],
      },
    },
    {
      resolve: "gatsby-plugin-transition-link",
      options: {
        layout: require.resolve(`./src/components/layout.js`),
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
