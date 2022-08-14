module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://ivan7237d.github.io`,
    // Your Name
    name: 'Ivan Novikov',
    // Main Site Title
    title: `Ivan Novikov`,
    // Description that goes under your name in main bio
    description: `NYC-based front-end software engineer`,
    // Optional: Twitter account handle
    author: `@ivan7237d`,
    // Optional: Github account URL
    github: `https://github.com/ivan7237d`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/ivan-novikov-1881981b3/`,
    // Content of the About Me section
    about: `I have worked as a solopreneur building front-end-heavy web apps from start to finish, and also as a freelance front-end engineer. I have extensive experience with TypeScript, React, RxJS, Next.js, GraphQL/Apollo and various browser APIs, but would love to try out new stuff such as Remix or Elm in my future missions. Don't hesitate to reach out: Twitter DMs are open, and my email is on my GitHub profile.`,
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
          'Reasons to use a utility function that lets you replace b(a(x)) with pipe(x, a, b).',
        link:
          'https://www.obvibase.com/dev-blog/i-ve-used-the-pipe-function-2-560-times-and-i-can-tell-you-it-s-good',
      },
      {
        name: 'Log and test RxJS observables with 1log / Feb 1, 2021',
        description: 'Introduction to 1log library for RxJS users.',
        link:
          'https://www.obvibase.com/dev-blog/log-and-test-rxjs-observables-with-1log',
      },
      {
        name: 'How Obvibase uses Web Workers / Jun 30, 2020',
        description:
          'A build process that uses TS compiler and Webpack to offload some modules to a Web Worker.',
        link: 'https://www.obvibase.com/dev-blog/how-obvibase-uses-web-workers',
      },
    ],
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: '1log  / Log function with superpowers / 2020-2021',
        description:
          'This library provides a function log() that can be used as the regular console.log(), but has two superpowers: you can insert it into any expression, as in f(log(x)), and it supports plugins.',
        link: 'https://github.com/ivan7237d/1log',
      },
      {
        name:
          "Antiutils  / TS/JS utilities for those who don't like utilities / 2020-2021",
        description:
          'Based on "only one way to do it" principle, this library provides a utility only when something can\'t be easily and readably accomplished with vanilla JavaScript.',
        link: 'https://github.com/ivan7237d/antiutils',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name:
          'McGraw Hill Education (via A.Team) / Front-end software engineer / May 2022 - present',
        description:
          'Helped build from the ground up an internal web app focused on data entry, implemented with Next.js and Apollo.',
        link: 'https://www.mheducation.com/',
      },
      {
        name:
          'Love Stories TV (via A.Team) / Front-end software engineer / May-December 2021',
        description:
          'Helped transition the website to Next.js, developed a framework for reporting UI interactions to analytics platforms, implemented new UI components and features with TypeScript, React and styled-components.',
        link: 'https://lovestoriestv.com/',
      },
      {
        name: 'Obvibase / Founder / 2016 - 2021',
        description:
          'Worked as a full-time solopreneur on Obvibase. Obvibase is a PWA that lets you easily create online databases. It supports real-time data sync and offline editing, and uses web workers and windowed lists to achieve good performance for larger databases. The backend runs on Google App Engine (Python) and Google Cloud Datastore, the front end is implemented with Typescript, RxJS and React.',
        link: 'https://www.obvibase.com',
      },
      {
        name: 'Egar Technology / Business analyst / 2004-2016',
        description: `Custom enhancements to the company's B2B software (from gathering initial requirements to deployment), institutional sales/support, negotiation/design/deployment of integrations with partner services.`,
        link: 'http://www.egartech.com/',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Technologies',
        description:
          'JavaScript, TypeScript, RxJS, React, CSS/SCSS/CSS-in-JS, Next.js, GraphQL/Apollo, web/service workers, Indexed DB, Jest, Google App Engine & Cloud Datastore, Stripe API, Python.',
      },
      {
        name: 'Languages',
        description: 'English, Russian, French.',
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
