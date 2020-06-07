module.exports = {
  pathPrefix: `/medijatorserbia`,
  siteMetadata: {
    title: `Svetlana Milenković`,
    description: `Medijator`,
    author: `Milos Djakovic`,
    quote: {
      text: `"Mnogi ljudi ne slušaju da bi razumeli, već da bi odgovorili"`,
      author: `Stiven R. Kovi`
    }
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-meta-redirect`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-classes`,
            options: {
              classMap: {
                "heading[depth=1]": "text-4xl",
                "heading[depth=2]": "subtitle",
                paragraph: "mt-4 text-lg",
                listItem: "ml-8",
                "list[ordered=false]": "mt-4 list-disc",
                "list[ordered=true]": "mt-4 list-disc",
                "link": "underline text-teal-500"
              },
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages`,
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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
