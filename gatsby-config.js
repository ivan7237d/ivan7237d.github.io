module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://ivan7237d.github.io`,
    // Your Name
    name: 'Ivan Novikov',
    // Main Site Title
    title: `Ivan Novikov`,
    // Description that goes under your name in main bio
    description: `A frontend-leaning fullstack software engineer`,
    // Optional: Twitter account handle
    author: `@ivan7237d`,
    // Optional: Github account URL
    github: `https://github.com/ivan7237d`,
    // Content of the About Me section
    about: `I live in NYC. I started out as a solopreneur building web apps with most of the logic on the front end, and have since been working on A.Team projects as a front-end engineer. Don't hesitate to reach out via Twitter DMs or the email on my GitHub profile.`,
    // apps: [
    //   {
    //     name:
    //       'Obvibase v2 / A distraction-free online database editor / 2016-2020',
    //     description:
    //       'All-new client built with TypeScript, RxJS, React, Webpack, and Jest. The client is a PWA (implemented with Workbox, supports offline editing, data synced in real-time between IndexedDB, browser tabs and the server). UI components include custom widgets, a windowed list to efficiently render large tables, and a specialized rich text editor. All non-UI logic is run in a Web Worker.',
    //     link: 'https://www.obvibase.com/',
    //   },
    //   {
    //     name: 'JSCalc  / A web app for creating online calculators / 2014-2015',
    //     description:
    //       'AngularJS/Angular Material, Node, MongoDB, Express, SASS, Web Worker.',
    //     link: 'https://www.youtube.com/watch?v=bLIiqTTu8eo',
    //   },
    //   {
    //     name:
    //       'Obvibase v1 / Original version built with Google Closure Tools / 2012-2016',
    //     description:
    //       'Closure Compiler/Library/Templates/Stylesheets, Stripe, Google App Engine (Python), Google Cloud Datastore.',
    //     link: 'https://www.youtube.com/watch?v=hCPJCAen5Bw',
    //   },
    // ],
    articles: [
      {
        name:
          "I've used the pipe() function 2,560 times and I can tell you it's good! / Mar 3, 2021 / Featured by JavaScript Weekly",
        description:
          'Reasons to use a utility function that lets you replace b(a(x)) with pipe(x, a, b)',
        link:
          'https://www.obvibase.com/dev-blog/i-ve-used-the-pipe-function-2-560-times-and-i-can-tell-you-it-s-good',
      },
      {
        name: 'How Obvibase uses Web Workers / Jun 30, 2020',
        description:
          'A build process that uses TS compiler and Webpack to offload some modules to a Web Worker',
        link: 'https://www.obvibase.com/dev-blog/how-obvibase-uses-web-workers',
      },
    ],
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: '1log',
        description: 'An unopinionated JS/TS logging framework',
        link: 'https://github.com/ivan7237d/1log',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name:
          'McGraw Hill Education (via A.Team) / Front-end software engineer / May 2022 - Oct 2023',
        description:
          'Building from the ground up internal and external frontend for Sharpen project (React, TypeScript, Next, Apollo, Tailwind, Framer Motion)',
        link: 'https://www.mheducation.com/sharpen/study-app.html',
      },
      {
        name:
          'Love Stories TV (via A.Team) / Front-end software engineer / May-December 2021',
        description:
          'Transitioning the website to Next.js, implementing analytics gathering and other features (TypeScript, React, Next, styled-components)',
        link: 'https://lovestoriestv.com/',
      },
      {
        name: 'Obvibase / Solo founder / 2016 - 2021',
        description:
          'A PWA that lets users create small online databases and collaborate on them in real time (Typescript, RxJS, React, Google App Engine, Google Cloud Datastore)',
        link: 'https://www.obvibase.com',
      },
      {
        name: 'Egar Technology / Business analyst / 2004-2016',
        description: `Product manager and customer account rep in a B2B fintech company`,
        link: 'http://www.egartech.com/',
      },
    ],
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
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
