require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const exclusions = [
  {
    enabled: process.env.DE_ENABLED,
    ignorePattern: `**/de/*.tsx`,
  },
  {
    enabled: process.env.AU_ENABLED,
    ignorePattern: `**/au/*.tsx`,
  },
  {
    enabled: process.env.NL_ENABLED,
    ignorePattern: `**/nl/*.tsx`,
  },
  {
    enabled: process.env.US_ENABLED,
    ignorePattern: `**/us/*.tsx`,
  },
]
  .filter(exclusion => exclusion.enabled === "false")
  .map(exclusion => exclusion.ignorePattern)

module.exports = {
  siteMetadata: {
    title: `Stop The Spread`,
    description: `All the coronavirus information you need in one place. Find out what you should do. Together we can stop the spread!`,
    language: `en`,
    ogLanguage: `en_us`,
    siteUrl: `https://stopthespread.info`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/pages`,
        ignore: {
          patterns: exclusions,
        },
      },
    },
    `gatsby-transformer-csv`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-160602101-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
        // Setting this parameter is optional
        anonymize: false,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        // exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
      },
    },
    {
      resolve: `gatsby-plugin-mixpanel`,
      options: {
        apiToken: `5224087be4c2077f603b7675bfabf552`,
        pageViews: `all`,
      },
    },
    `gatsby-plugin-netlify`,
    `gatsby-plugin-sitemap`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        stripMetadata: true,
        defaultQuality: 100,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Stop The Spread`,
        short_name: `Stop The Spread`,
        start_url: `/`,
        background_color: `#ffbf58`,
        theme_color: `#ffbf58`,
        display: `minimal-ui`,
        icon: `./src/images/favicons/android-chrome-192x192.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-typescript`,
    `gatsby-plugin-sass`,
    // {
    //   resolve: "gatsby-plugin-prefetch-google-fonts",
    //   options: {
    //     fonts: [
    //       {
    //         family: `Open Sans`,
    //         subsets: [`latin`],
    //         variants: [`400`],
    //       },
    //     ],
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
