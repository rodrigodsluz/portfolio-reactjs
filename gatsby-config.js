module.exports = {
  siteMetadata: {
    title: "Rodrigo Luz - Front End Developer",
    description:
      "I am a motivated developer with skills in HTML5, CSS3, Sass, JavaScript, jQuery, Bootstrap, React, Gatsby.js, Next.js, Node.js, MongoDB, MySQL and PostgreSQL. I’m also confident with backend frameworks like Laravel, API & PHP development.",
    author: "Rodrigo Luz",
    twitterUsername: "rodrigodsluz",
    image: "/portfolio.jpg",
    siteUrl: "https://www.google.com/",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-smoothscroll`,
  ],
}
