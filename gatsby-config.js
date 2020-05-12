require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    siteTitleAlt: `Jiazi Cai | Full Stack Developer`,
    siteTitle: `Jiazi Cai`,
    siteHeadline: `Full Stack Developer with 2 years' Experience in MERN Stack`,
    siteUrl: `https://jiazi.dev`,
    siteDescription: `Jiazi Cai's portfolio for full stack applications`,
    siteLanguage: `en`,
    siteImage: `/android-chrome-512x512.png`,
    author: `Jiazi Cai`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-cara`,
      // See the theme's README for all available options
      options: {},
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jiazi Cai Website`,
        short_name: `Jiazi`,
        description: `Jiazi Cai's portofolio as a full-stack developer`,
        start_url: `/`,
        background_color: `#141821`,
        theme_color: `#f6ad55`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
  ],
}
