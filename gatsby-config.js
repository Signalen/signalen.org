module.exports = {
  siteMetadata: {
    title: `Signalen`,
    description: `Signalen is een opensource proces- en taaksysteem voor overheden, dat meldingen over de openbare ruimte automatisch categoriseert en routeert voor afhandeling door de juiste behandelaar.`,
    author: `VNG Realisatie`,
    repositoryUrl: `https://www.github.com/signalen`,
    slackUrl: `https://join.slack.com/t/samenorganiseren/shared_invite/zt-dex1d7sk-wy11sKYWCF0qQYjJHSMW5Q`,
    languages: ['en' ,'nl'],
    defaultLanguage: 'nl'
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-check-links`,
          `gatsby-remark-prismjs`,
          `gatsby-remark-images`,
        ]
      }
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Signalen`,
        short_name: `signalen`,
        start_url: `/`,
        display: `standalone`,
        icon: `src/images/logo.png`,
      },
    },
    `gatsby-plugin-i18n`,
    {
      resolve: `gatsby-plugin-i18n`,
      options: {
        langKeyDefault: 'nl',
        useLangKeyLayout: false,
        prefixDefault: false,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
