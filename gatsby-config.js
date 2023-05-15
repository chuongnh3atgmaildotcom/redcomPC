const routes = [
  {
    type: "blog",
    path: "/blog/:uid",
  },
];

module.exports = {
  // flags: {
  //   DEV_SSR: true
  // },
  siteMetadata: {
    title: `RedcomPC`,
    siteUrl: `https://pc.redcomgrp.com`,
    description: `RedcomPC`,
  },
  partytownProxiedURLs: [
    `https://www.googletagmanager.com/gtm.js?id=${process.env.GATSBY_GTM}`,
  ],
  plugins: [
    'gatsby-plugin-netlify',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `RedcomPC`,
        short_name: `RedcomPC`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#ffffff`,
        display: `standalone`,
        icon: 'src/assets/favicon.png',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `products`,
        path: `${__dirname}/src/helpers/product.json`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `FAQs`,
        path: `${__dirname}/src/helpers/faq.json`,
      },
    },
    'gatsby-transformer-json',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `productImages`,
        path: `${__dirname}/static/products/`,
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,
        accessToken: process.env.PRISMIC_ACCESS_TOKEN,
        customTypesApiToken: process.env.PRISMIC_CUSTOM_TYPES_API_TOKEN,
        routes: routes
      },
    },
    `gatsby-plugin-advanced-sitemap`,
  ],
};
