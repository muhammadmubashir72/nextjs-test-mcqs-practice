export const advancedNextJsQuestions = [
  {
    question: "How do you implement incremental static regeneration (ISR) in Next.js?",
    options: [
      "By using `getStaticProps` with a `revalidate` property",
      "By using `getServerSideProps` with a `revalidate` property",
      "By using `getStaticPaths` with `revalidate`",
      "By using `next.config.js`"
    ],
    answer: "By using `getStaticProps` with a `revalidate` property",
  },
  {
    question: "What is the purpose of `next/image` component?",
    options: [
      "To optimize images by automatically resizing and serving them in modern formats",
      "To add a placeholder for images",
      "To prefetch images",
      "To serve images from a CDN"
    ],
    answer: "To optimize images by automatically resizing and serving them in modern formats",
  },
  {
    question: "How do you handle authentication in Next.js?",
    options: [
      "By using cookies and JWT tokens in `getServerSideProps`",
      "By using `getInitialProps` to fetch user data",
      "By using the `next-auth` library",
      "By using `getStaticProps`"
    ],
    answer: "By using the `next-auth` library",
  },
  {
    question: "What is the difference between `getServerSideProps` and `getStaticProps`?",
    options: [
      "`getServerSideProps` fetches data on every request, while `getStaticProps` fetches data at build time",
      "`getServerSideProps` is used for static sites, while `getStaticProps` is used for dynamic sites",
      "`getServerSideProps` is used for client-side rendering, while `getStaticProps` is for server-side rendering",
      "`getServerSideProps` is faster than `getStaticProps`"
    ],
    answer: "`getServerSideProps` fetches data on every request, while `getStaticProps` fetches data at build time",
  },
  {
    question: "What is the purpose of `getStaticPaths` in Next.js?",
    options: [
      "To define dynamic routes that need to be statically generated",
      "To define routes for client-side rendering",
      "To define routes for server-side rendering",
      "To prefetch static pages"
    ],
    answer: "To define dynamic routes that need to be statically generated",
  },
  {
    question: "How do you enable internationalized routing in Next.js?",
    options: [
      "By configuring `i18n` in `next.config.js`",
      "By using the `next-i18next` package",
      "By creating language-specific directories under `pages`",
      "By using custom routes in `next.config.js`"
    ],
    answer: "By configuring `i18n` in `next.config.js`",
  },
  {
    question: "What is the role of `next.config.js` in a Next.js project?",
    options: [
      "To configure build settings, routing, environment variables, and plugins",
      "To define the structure of the app",
      "To configure the server-side rendering settings",
      "To handle authentication"
    ],
    answer: "To configure build settings, routing, environment variables, and plugins",
  },
  {
    question: "How do you create a custom App component in Next.js?",
    options: [
      "By creating a `pages/_app.js` file",
      "By creating a `pages/custom-app.js` file",
      "By modifying `next.config.js`",
      "By using the `useApp` hook"
    ],
    answer: "By creating a `pages/_app.js` file",
  },
  {
    question: "How do you add custom server logic in Next.js?",
    options: [
      "By creating a custom server file and modifying `next.config.js`",
      "By using `getServerSideProps`",
      "By using `next/server` API",
      "By using the `next-custom-server` package"
    ],
    answer: "By creating a custom server file and modifying `next.config.js`",
  },
  {
    question: "What is the default behavior of Next.js with regard to static file serving?",
    options: [
      "Files placed in the `public` directory are served as static assets",
      "Files are automatically bundled and served by Webpack",
      "Files are dynamically served from a CDN",
      "Files are automatically optimized"
    ],
    answer: "Files placed in the `public` directory are served as static assets",
  },
  {
    question: "How do you enable custom Webpack configuration in Next.js?",
    options: [
      "By modifying the `webpack` property in `next.config.js`",
      "By using the `webpack` command in the terminal",
      "By using the `next-webpack` package",
      "By modifying `next.build.js`"
    ],
    answer: "By modifying the `webpack` property in `next.config.js`",
  },
  {
    question: "What is the purpose of `getInitialProps` in Next.js?",
    options: [
      "To fetch data on the server before rendering a page",
      "To fetch data on the client after the page has been rendered",
      "To pre-render static pages",
      "To handle client-side routing"
    ],
    answer: "To fetch data on the server before rendering a page",
  },
  {
    question: "What is the purpose of `next/dynamic` in Next.js?",
    options: [
      "To load components dynamically with support for code splitting",
      "To optimize images dynamically",
      "To pre-render components based on route",
      "To enable client-side routing"
    ],
    answer: "To load components dynamically with support for code splitting",
  },
  {
    question: "How do you handle API routes in Next.js?",
    options: [
      "By creating a file in the `pages/api` directory",
      "By using the `next-api` package",
      "By modifying `next.config.js`",
      "By using `getServerSideProps`"
    ],
    answer: "By creating a file in the `pages/api` directory",
  },
  {
    question: "How do you handle error pages in Next.js?",
    options: [
      "By creating a `pages/_error.js` file",
      "By using the `ErrorBoundary` component",
      "By creating a `pages/500.js` file",
      "By using the `next/error` package"
    ],
    answer: "By creating a `pages/_error.js` file",
  },
  {
    question: "How do you configure custom caching behavior in Next.js?",
    options: [
      "By modifying the `Cache-Control` headers in API routes",
      "By using the `next/cache` module",
      "By modifying `next.config.js`",
      "By configuring caching in the `pages/_app.js` file"
    ],
    answer: "By modifying the `Cache-Control` headers in API routes",
  },
  {
    question: "What is the purpose of `next/pwa` in Next.js?",
    options: [
      "To enable Progressive Web App (PWA) features",
      "To enable server-side rendering",
      "To pre-render pages on every request",
      "To add custom routing features"
    ],
    answer: "To enable Progressive Web App (PWA) features",
  },
  {
    question: "How do you add custom CSS in Next.js?",
    options: [
      "By importing CSS files in `pages/_app.js`",
      "By modifying `next.config.js`",
      "By using the `next-css` package",
      "By adding a `styles.css` file in the `public` directory"
    ],
    answer: "By importing CSS files in `pages/_app.js`",
  },
  {
    question: "How do you deploy a Next.js application to Vercel?",
    options: [
      "By pushing the code to a Git repository and connecting it to Vercel",
      "By deploying the code using `vercel deploy` command",
      "By configuring the `next.config.js` for Vercel deployment",
      "By uploading the `out` directory to Vercel"
    ],
    answer: "By pushing the code to a Git repository and connecting it to Vercel",
  },
  {
    question: "How do you add custom headers in Next.js?",
    options: [
      "By modifying the `headers` property in `next.config.js`",
      "By using the `next/headers` package",
      "By using `getServerSideProps`",
      "By using custom middleware"
    ],
    answer: "By modifying the `headers` property in `next.config.js`",
  },
  {
    question: "How do you optimize performance in Next.js?",
    options: [
      "By using `getStaticProps` and `getServerSideProps` for data fetching",
      "By using `next/image` for image optimization",
      "By using dynamic imports for large components",
      "All of the above"
    ],
    answer: "All of the above",
  },
  {
    question: "What is the purpose of `next-plugins` in Next.js?",
    options: [
      "To add custom plugins and enhance Next.js functionality",
      "To optimize images in Next.js",
      "To enable server-side rendering",
      "To enable client-side routing"
    ],
    answer: "To add custom plugins and enhance Next.js functionality",
  },
  {
    question: "How do you create a custom 500 error page in Next.js?",
    options: [
      "By creating a `pages/500.js` file",
      "By modifying `next.config.js`",
      "By creating a `pages/_error.js` file",
      "By using `next/error` package"
    ],
    answer: "By creating a `pages/500.js` file",
  },
  {
    question: "What is the difference between `getStaticProps` and `getServerSideProps`?",
    options: [
      "`getStaticProps` runs at build time and is used for static generation, while `getServerSideProps` runs on every request and is used for server-side rendering.",
      "`getStaticProps` runs on every request, while `getServerSideProps` runs only at build time.",
      "`getStaticProps` is used for API routes, while `getServerSideProps` is for page components.",
      "`getStaticProps` is used only in the `pages/api` directory."
    ],
    answer: "`getStaticProps` runs at build time and is used for static generation, while `getServerSideProps` runs on every request and is used for server-side rendering.",
  },
  {
    question: "What is a custom server in Next.js and how do you set it up?",
    options: [
      "A custom server is a custom Express.js or Node.js server used to handle routing and middleware for your Next.js app.",
      "A custom server is a middleware function for handling data fetching in Next.js.",
      "A custom server is a special API route that handles dynamic routing in Next.js.",
      "A custom server is a plugin that allows for custom configuration of Next.js."
    ],
    answer: "A custom server is a custom Express.js or Node.js server used to handle routing and middleware for your Next.js app.",
  },
  {
    question: "How can you add TypeScript support to a Next.js project?",
    options: [
      "By creating a `tsconfig.json` file and installing TypeScript dependencies.",
      "By modifying `next.config.js` to include TypeScript.",
      "By installing `next-ts` package.",
      "By changing file extensions from `.js` to `.ts`."
    ],
    answer: "By creating a `tsconfig.json` file and installing TypeScript dependencies.",
  },
  {
    question: "How do you handle client-side state management in Next.js?",
    options: [
      "By using React's built-in `useState` and `useContext` hooks.",
      "By using Redux or other state management libraries.",
      "By using the `next-redux-wrapper` library.",
      "All of the above."
    ],
    answer: "All of the above.",
  },
  {
    question: "What is the purpose of `getStaticPaths` in dynamic routes?",
    options: [
      "It generates a list of paths to be statically generated for dynamic routes.",
      "It allows fetching data on each page request.",
      "It is used to fetch data for a specific path on the server.",
      "It allows the dynamic routing of components."
    ],
    answer: "It generates a list of paths to be statically generated for dynamic routes.",
  },
  {
    question: "How do you implement authentication in a Next.js app?",
    options: [
      "By using a custom middleware to handle authentication.",
      "By using `getServerSideProps` to verify tokens and session data.",
      "By using third-party authentication libraries like `next-auth`.",
      "All of the above."
    ],
    answer: "All of the above.",
  },
  {
    question: "How do you optimize images in Next.js?",
    options: [
      "By using the `next/image` component for automatic optimization.",
      "By using WebP images.",
      "By serving images from a CDN.",
      "All of the above."
    ],
    answer: "All of the above.",
  },
  {
    question: "What is the purpose of the `next.config.js` file in a Next.js app?",
    options: [
      "It is used to configure the Next.js build process, routing, environment variables, and plugins.",
      "It is used to configure custom components in Next.js.",
      "It is used to configure middleware and API routes.",
      "It is used to configure the server-side rendering options."
    ],
    answer: "It is used to configure the Next.js build process, routing, environment variables, and plugins.",
  },
  {
    question: "What is the difference between a `static` and a `dynamic` route in Next.js?",
    options: [
      "Static routes are generated at build time, while dynamic routes are generated at runtime based on data.",
      "Static routes are only for the homepage, while dynamic routes are for all other pages.",
      "Static routes are used for server-side rendering, while dynamic routes are for client-side rendering.",
      "There is no difference."
    ],
    answer: "Static routes are generated at build time, while dynamic routes are generated at runtime based on data.",
  },
  {
    question: "How do you implement API routes in Next.js?",
    options: [
      "By creating JavaScript or TypeScript files in the `pages/api` directory.",
      "By using the `next-api` package.",
      "By using the `express` module to create a server.",
      "By configuring `getServerSideProps` to handle API requests."
    ],
    answer: "By creating JavaScript or TypeScript files in the `pages/api` directory.",
  },
  {
    question: "What is the `next/image` component and how does it work?",
    options: [
      "It is a component for optimized image rendering that automatically serves images in the best format and size for the device.",
      "It is used to display images in the background of a page.",
      "It is used to handle dynamic image routes.",
      "It is a wrapper around the `img` tag for lazy loading images."
    ],
    answer: "It is a component for optimized image rendering that automatically serves images in the best format and size for the device.",
  },
  {
    question: "How do you create a custom error page in Next.js?",
    options: [
      "By creating a `pages/_error.js` file.",
      "By creating a `pages/500.js` file.",
      "By using the `next/error` package.",
      "By creating a custom error component."
    ],
    answer: "By creating a `pages/_error.js` file.",
  },
  {
    question: "What is the `next/dynamic` function used for in Next.js?",
    options: [
      "It is used for dynamic imports of components, enabling code splitting.",
      "It is used to load pages dynamically based on route parameters.",
      "It is used to implement dynamic routing in Next.js.",
      "It is used for rendering pages based on data fetched at runtime."
    ],
    answer: "It is used for dynamic imports of components, enabling code splitting.",
  },
  {
    question: "What is the purpose of the `Link` component in Next.js?",
    options: [
      "To handle client-side navigation between pages in a Next.js app.",
      "To load components dynamically.",
      "To implement API calls.",
      "To fetch data from a server."
    ],
    answer: "To handle client-side navigation between pages in a Next.js app.",
  },
  {
    question: "What is the role of the `pages/_app.js` file in a Next.js project?",
    options: [
      "It is used to initialize pages and wrap the app with custom components, such as a global layout.",
      "It is used to configure API routes.",
      "It is used to handle error pages.",
      "It is used to configure Webpack."
    ],
    answer: "It is used to initialize pages and wrap the app with custom components, such as a global layout.",
  },
  {
    question: "How do you implement client-side navigation in Next.js?",
    options: [
      "By using the `Link` component to navigate between pages.",
      "By using `getStaticProps` with client-side routing.",
      "By using `getServerSideProps` to handle client-side routes.",
      "By using `next-router`."
    ],
    answer: "By using the `Link` component to navigate between pages.",
  },
  {
    question: "How do you enable custom caching behavior in Next.js?",
    options: [
      "By modifying the `Cache-Control` headers in API routes.",
      "By using the `next/cache` package.",
      "By modifying the `next.config.js` file.",
      "By using the `getServerSideProps` function."
    ],
    answer: "By modifying the `Cache-Control` headers in API routes.",
  },
  {
    question: "How do you enable static file serving in Next.js?",
    options: [
      "By placing files in the `public` directory.",
      "By placing files in the `static` directory.",
      "By using `getStaticProps` to serve files.",
      "By using `next-serve` package."
    ],
    answer: "By placing files in the `public` directory.",
  },
  {
    question: "How can you prevent a page from being statically generated in Next.js?",
    options: [
      "By using `getServerSideProps` instead of `getStaticProps`.",
      "By using `getInitialProps`.",
      "By creating the page under the `pages/api` directory.",
      "By using the `next-static` package."
    ],
    answer: "By using `getServerSideProps` instead of `getStaticProps`.",
  },
  {
    question: "What is the purpose of `getStaticProps` in Next.js?",
    options: [
      "To fetch data at build time for static pages.",
      "To fetch data on every request for dynamic pages.",
      "To handle API requests.",
      "To handle authentication."
    ],
    answer: "To fetch data at build time for static pages.",
  },
  {
    question: "How do you add global CSS in Next.js?",
    options: [
      "By importing CSS files in `pages/_app.js`.",
      "By using the `next-css` package.",
      "By adding CSS files in the `public` directory.",
      "By modifying `next.config.js`."
    ],
    answer: "By importing CSS files in `pages/_app.js`.",
  },
  {
    question: "How do you enable image optimization in Next.js?",
    options: [
      "By using the `next/image` component.",
      "By manually resizing images in the `public` directory.",
      "By using a third-party CDN.",
      "By using `next-optimized-images` package."
    ],
    answer: "By using the `next/image` component.",
  },
  {
    question: "How do you configure custom error handling in Next.js?",
    options: [
      "By creating a `pages/_error.js` file.",
      "By using the `next/error` package.",
      "By using `getServerSideProps` to handle errors.",
      "By using a custom error component."
    ],
    answer: "By creating a `pages/_error.js` file.",
  },
  {
    question: "What is the difference between `getServerSideProps` and `getStaticProps`?",
    options: [
      "`getServerSideProps` runs on every request, while `getStaticProps` runs at build time.",
      "`getServerSideProps` is used for static sites, while `getStaticProps` is used for dynamic sites.",
      "`getServerSideProps` runs only on the client side, while `getStaticProps` runs only on the server side.",
      "`getServerSideProps` is used for API routes, while `getStaticProps` is used for page components."
    ],
    answer: "`getServerSideProps` runs on every request, while `getStaticProps` runs at build time.",
  },
  {
    question: "How do you add a custom 404 page in Next.js?",
    options: [
      "By creating a `pages/404.js` file.",
      "By creating a `pages/_error.js` file.",
      "By modifying the `next.config.js` file.",
      "By using `next-error` package."
    ],
    answer: "By creating a `pages/404.js` file.",
  },
  {
    question: "How do you deploy a Next.js app to Vercel?",
    options: [
      "By connecting your GitHub repository to Vercel and deploying automatically.",
      "By using the `next export` command to export static files.",
      "By configuring the `next.config.js` file for Vercel.",
      "By using the Vercel CLI."
    ],
    answer: "By connecting your GitHub repository to Vercel and deploying automatically.",
  },
  {
    question: "How do you implement dynamic imports with SSR in Next.js?",
    options: [
      "By using `next/dynamic` with `ssr: false`.",
      "By using `next/dynamic` with `ssr: true`.",
      "By using `next-ssr` package.",
      "By using `getServerSideProps`."
    ],
    answer: "By using `next/dynamic` with `ssr: false`.",
  },
  {
    question: "What is the difference between `getServerSideProps` and `getStaticProps` in Next.js?",
    options: [
      "`getServerSideProps` fetches data on every request, while `getStaticProps` fetches data at build time.",
      "`getServerSideProps` is used only for static pages, while `getStaticProps` is used for dynamic pages.",
      "`getServerSideProps` is for API routes, while `getStaticProps` is for pages.",
      "`getServerSideProps` is used for server-side rendering, while `getStaticProps` is for client-side rendering."
    ],
    answer: "`getServerSideProps` fetches data on every request, while `getStaticProps` fetches data at build time.",
  },
  {
    question: "How can you add a global stylesheet in Next.js?",
    options: [
      "By importing the CSS file inside the `pages/_app.js` file.",
      "By importing the CSS file in the `next.config.js` file.",
      "By placing the CSS file inside the `public` directory.",
      "By adding the CSS file in the `components` directory."
    ],
    answer: "By importing the CSS file inside the `pages/_app.js` file.",
  },
  {
    question: "How do you implement lazy loading of components in Next.js?",
    options: [
      "By using the `next/dynamic` function to dynamically import components.",
      "By using React's `Suspense` component.",
      "By using the `useEffect` hook to load components.",
      "By using the `getServerSideProps` function."
    ],
    answer: "By using the `next/dynamic` function to dynamically import components.",
  },
  {
    question: "What is the purpose of `getStaticPaths` in Next.js?",
    options: [
      "It is used to define the dynamic routes that should be statically generated.",
      "It is used to fetch data on every request.",
      "It is used to fetch data at build time.",
      "It is used to define static assets in the project."
    ],
    answer: "It is used to define the dynamic routes that should be statically generated.",
  },
  {
    question: "How can you implement authentication in a Next.js app?",
    options: [
      "By using a third-party library like `next-auth`.",
      "By using cookies and `getServerSideProps` for session management.",
      "By creating custom API routes for login and logout.",
      "All of the above."
    ],
    answer: "All of the above.",
  },
  {
    question: "What is the difference between `useEffect` and `getServerSideProps` in Next.js?",
    options: [
      "`useEffect` runs on the client side after the component renders, while `getServerSideProps` runs on the server side before the page is rendered.",
      "`useEffect` runs before the component renders, while `getServerSideProps` runs after the component renders.",
      "`useEffect` is used to fetch data at build time, while `getServerSideProps` is used to fetch data on every request.",
      "`useEffect` is used only in functional components, while `getServerSideProps` is used only in class components."
    ],
    answer: "`useEffect` runs on the client side after the component renders, while `getServerSideProps` runs on the server side before the page is rendered.",
  },
  {
    question: "How do you optimize images in Next.js?",
    options: [
      "By using the `next/image` component to automatically optimize and serve images in modern formats.",
      "By using WebP images and serving them through a CDN.",
      "By using `next-optimized-images` package.",
      "All of the above."
    ],
    answer: "All of the above.",
  },
  {
    question: "How do you create a custom error page in Next.js?",
    options: [
      "By creating a `pages/_error.js` file.",
      "By creating a `pages/404.js` file.",
      "By using the `next/error` package.",
      "By using `getServerSideProps` for error handling."
    ],
    answer: "By creating a `pages/_error.js` file.",
  },
  {
    question: "How do you deploy a Next.js app to Vercel?",
    options: [
      "By connecting your GitHub repository to Vercel and deploying automatically.",
      "By exporting static files using `next export` and uploading them to Vercel.",
      "By configuring `next.config.js` for deployment.",
      "By using the Vercel CLI to deploy the app."
    ],
    answer: "By connecting your GitHub repository to Vercel and deploying automatically.",
  },
  {
    question: "How do you implement client-side navigation in Next.js?",
    options: [
      "By using the `Link` component from `next/link` to navigate between pages.",
      "By using the `useHistory` hook from `react-router-dom`.",
      "By using the `next/router` module for navigation.",
      "Both A and C."
    ],
    answer: "Both A and C.",
  },
  {
    question: "What is the `next/dynamic` function used for in Next.js?",
    options: [
      "To dynamically import React components and enable code splitting.",
      "To handle dynamic routing in Next.js.",
      "To handle dynamic imports of stylesheets.",
      "To create dynamic API routes."
    ],
    answer: "To dynamically import React components and enable code splitting.",
  },
  {
    question: "How do you implement SEO optimization in a Next.js app?",
    options: [
      "By using the `next/head` component to add meta tags for SEO.",
      "By using `getServerSideProps` to dynamically fetch SEO data.",
      "By adding a `robots.txt` file in the `public` directory.",
      "All of the above."
    ],
    answer: "All of the above.",
  },
  {
    question: "What is the role of the `pages/_app.js` file in a Next.js project?",
    options: [
      "It is used to initialize pages and wrap the app with custom components, such as global layouts.",
      "It is used to define custom API routes.",
      "It is used to configure custom error pages.",
      "It is used to configure Webpack for the app."
    ],
    answer: "It is used to initialize pages and wrap the app with custom components, such as global layouts.",
  },
  {
    question: "How do you add environment variables in Next.js?",
    options: [
      "By adding variables in the `.env.local` file.",
      "By adding variables in the `next.config.js` file.",
      "By adding variables in the `pages/_app.js` file.",
      "By adding variables in the `package.json` file."
    ],
    answer: "By adding variables in the `.env.local` file.",
  },
  {
    question: "What is the purpose of the `next.config.js` file in Next.js?",
    options: [
      "It is used to configure the Next.js app, such as environment variables, routing, and Webpack configuration.",
      "It is used to define custom API routes.",
      "It is used to configure global styles.",
      "It is used to define the structure of the `public` directory."
    ],
    answer: "It is used to configure the Next.js app, such as environment variables, routing, and Webpack configuration.",
  },
  {
    question: "How do you implement dynamic routing in Next.js?",
    options: [
      "By using the `[param]` syntax in the `pages` directory.",
      "By using the `next/router` module to create dynamic routes.",
      "By using `getServerSideProps` to handle dynamic data.",
      "By using the `next/dynamic` function for dynamic imports."
    ],
    answer: "By using the `[param]` syntax in the `pages` directory.",
  },
  {
    question: "How can you optimize the performance of a Next.js app?",
    options: [
      "By using the `next/image` component for optimized images.",
      "By using `getStaticProps` and `getServerSideProps` for efficient data fetching.",
      "By implementing code splitting using `next/dynamic`.",
      "All of the above."
    ],
    answer: "All of the above.",
  },
  {
    question: "How do you handle API requests in Next.js?",
    options: [
      "By creating API routes in the `pages/api` directory.",
      "By using `getServerSideProps` to fetch data on the server.",
      "By using third-party API services.",
      "By using React's `useEffect` to fetch data on the client."
    ],
    answer: "By creating API routes in the `pages/api` directory.",
  },
  {
    question: "How do you implement server-side rendering (SSR) in Next.js?",
    options: [
      "By using `getServerSideProps` to fetch data on each request.",
      "By using `getStaticProps` for dynamic data fetching.",
      "By using `next/dynamic` for dynamic imports.",
      "By using `useEffect` to fetch data after the page loads."
    ],
    answer: "By using `getServerSideProps` to fetch data on each request.",
  },
  {
    question: "What is the purpose of `getStaticProps` in Next.js?",
    options: [
      "It is used to fetch data at build time for static generation.",
      "It is used to fetch data on every request for SSR.",
      "It is used to dynamically import components.",
      "It is used to fetch data on the client side."
    ],
    answer: "It is used to fetch data at build time for static generation.",
  },
  {
    question: "How do you add custom routes in Next.js?",
    options: [
      "By modifying the `next.config.js` file to define custom routing behavior.",
      "By using the `pages` directory and dynamic routes.",
      "By using the `next/router` module to handle routing.",
      "Next.js does not support custom routes."
    ],
    answer: "By modifying the `next.config.js` file to define custom routing behavior.",
  },
  {
    question: "How do you handle custom error pages in Next.js?",
    options: [
      "By creating a `pages/_error.js` file to customize error handling.",
      "By creating a `pages/404.js` file for 404 errors.",
      "By using the `next/error` module.",
      "By using `getServerSideProps` to catch errors."
    ],
    answer: "By creating a `pages/_error.js` file to customize error handling.",
  },
  {
    question: "How can you configure a custom webpack in Next.js?",
    options: [
      "By modifying the `webpack` configuration in `next.config.js`.",
      "By using the `next/webpack` module.",
      "By creating a custom `webpack.config.js` file.",
      "Next.js does not support custom webpack configurations."
    ],
    answer: "By modifying the `webpack` configuration in `next.config.js`.",
  },
  {
    question: "How do you handle dynamic imports in Next.js?",
    options: [
      "By using `next/dynamic` to dynamically import components.",
      "By using the `useEffect` hook for client-side imports.",
      "By using `getServerSideProps` for dynamic imports.",
      "By using React's `Suspense` component."
    ],
    answer: "By using `next/dynamic` to dynamically import components.",
  },
  {
    question: "What is the purpose of `getInitialProps` in Next.js?",
    options: [
      "It is used to fetch data on the server for SSR.",
      "It is used to fetch data at build time for static generation.",
      "It is used to fetch data on the client side after the page renders.",
      "It is deprecated in favor of `getServerSideProps` and `getStaticProps`."
    ],
    answer: "It is deprecated in favor of `getServerSideProps` and `getStaticProps`.",
  },
  {
    question: "How do you implement image optimization in Next.js?",
    options: [
      "By using the `next/image` component for automatic image optimization.",
      "By manually optimizing images using a third-party tool.",
      "By using the `next/optimized-images` package.",
      "By serving images from a CDN."
    ],
    answer: "By using the `next/image` component for automatic image optimization.",
  },
  {
    question: "What is the `next/head` component used for?",
    options: [
      "To manage the head section of the HTML document, such as meta tags, titles, and links.",
      "To manage the footer section of the HTML document.",
      "To load external scripts asynchronously.",
      "To manage server-side rendering."
    ],
    answer: "To manage the head section of the HTML document, such as meta tags, titles, and links.",
  },
  {
    question: "How do you implement authentication in a Next.js app?",
    options: [
      "By using `next-auth` for managing authentication.",
      "By creating custom API routes for login and session management.",
      "By using cookies to store session information.",
      "All of the above."
    ],
    answer: "All of the above.",
  },
  {
    question: "How do you implement serverless functions in Next.js?",
    options: [
      "By creating API routes in the `pages/api` directory.",
      "By using `getServerSideProps` to call external serverless functions.",
      "By using `next/serverless` for handling serverless deployments.",
      "By using the `next/dynamic` function."
    ],
    answer: "By creating API routes in the `pages/api` directory.",
  },
  {
    question: "How do you deploy a Next.js app to a serverless environment?",
    options: [
      "By using Vercel for automatic serverless deployment.",
      "By exporting the app as static HTML and deploying it to a CDN.",
      "By using AWS Lambda or other serverless platforms for deployment.",
      "All of the above."
    ],
    answer: "All of the above.",
  },
  {
    question: "How do you implement incremental static regeneration (ISR) in Next.js?",
    options: [
      "By using `getStaticProps` with the `revalidate` property for automatic regeneration of static pages.",
      "By using `getServerSideProps` with the `revalidate` property.",
      "By manually regenerating static pages via an API call.",
      "ISR is not supported in Next.js."
    ],
    answer: "By using `getStaticProps` with the `revalidate` property for automatic regeneration of static pages.",
  },
  {
    question: "What is the role of `pages/_app.js` in Next.js?",
    options: [
      "It is used to initialize pages and wrap the app with global components, such as layouts and context providers.",
      "It is used to define custom error handling.",
      "It is used to configure Webpack for the app.",
      "It is used to configure global styles."
    ],
    answer: "It is used to initialize pages and wrap the app with global components, such as layouts and context providers.",
  },
  {
    question: "How do you add environment variables in Next.js?",
    options: [
      "By adding them to `.env.local` and using `process.env.VAR_NAME`.",
      "By adding them to the `next.config.js` file.",
      "By adding them to `package.json`.",
      "By adding them to `pages/_app.js`."
    ],
    answer: "By adding them to `.env.local` and using `process.env.VAR_NAME`.",
  },
  {
    question: "What is the difference between `getStaticProps` and `getServerSideProps`?",
    options: [
      "`getStaticProps` fetches data at build time, while `getServerSideProps` fetches data on every request.",
      "`getStaticProps` is for dynamic data, while `getServerSideProps` is for static data.",
      "`getStaticProps` is used only for static pages, while `getServerSideProps` is for API routes.",
      "`getStaticProps` and `getServerSideProps` serve the same purpose."
    ],
    answer: "`getStaticProps` fetches data at build time, while `getServerSideProps` fetches data on every request.",
  },
  {
    question: "How do you handle static assets like images and fonts in Next.js?",
    options: [
      "By placing them in the `public` directory and referencing them with a relative path.",
      "By using the `next/image` component for images.",
      "By using the `next/font` component for fonts.",
      "All of the above."
    ],
    answer: "All of the above.",
  },
  {
    question: "How do you add a custom 404 page in Next.js?",
    options: [
      "By creating a `pages/404.js` file to customize the 404 page.",
      "By modifying the `next.config.js` file.",
      "By using `getServerSideProps` to render a custom 404 page.",
      "Next.js does not support custom 404 pages."
    ],
    answer: "By creating a `pages/404.js` file to customize the 404 page.",
  },
  {
    question: "How can you implement code splitting in Next.js?",
    options: [
      "By using `next/dynamic` for dynamic imports of components.",
      "By manually splitting the code using Webpack.",
      "By using `getServerSideProps` to split code based on routes.",
      "Next.js automatically splits the code without any configuration."
    ],
    answer: "By using `next/dynamic` for dynamic imports of components.",
  },
  {
    question: "How do you optimize a Next.js app for SEO?",
    options: [
      "By using `next/head` to add meta tags and SEO-related content.",
      "By using `getServerSideProps` for server-side data fetching.",
      "By implementing a `robots.txt` file in the `public` directory.",
      "All of the above."
    ],
    answer: "All of the above.",
  },
  {
    question: "How do you add a custom `Document` in Next.js?",
    options: [
      "By creating a `pages/_document.js` file and customizing the HTML structure.",
      "By modifying the `next.config.js` file.",
      "By using the `next/head` component to customize the document.",
      "Next.js does not support custom `Document`."
    ],
    answer: "By creating a `pages/_document.js` file and customizing the HTML structure.",
  },
  {
    question: "How can you enable Webpack 5 in Next.js?",
    options: [
      "By adding `webpack5: true` in `next.config.js`.",
      "Webpack 5 is enabled by default in Next.js.",
      "By installing `webpack5` package and configuring it in `next.config.js`.",
      "By adding `useWebpack5: true` in `next.config.js`."
    ],
    answer: "Webpack 5 is enabled by default in Next.js.",
  },
  {
    question: "What is the purpose of `getStaticPaths` in Next.js?",
    options: [
      "It is used to specify which dynamic pages should be pre-rendered at build time.",
      "It is used to fetch data on each request for dynamic pages.",
      "It is used to handle routing of static pages.",
      "It is used to define the fallback behavior for static pages."
    ],
    answer: "It is used to specify which dynamic pages should be pre-rendered at build time.",
  },
  {
    question: "What is the difference between `getStaticProps` and `getInitialProps`?",
    options: [
      "`getStaticProps` runs at build time, while `getInitialProps` runs on each request.",
      "`getStaticProps` fetches data on the server, while `getInitialProps` fetches data on the client.",
      "`getStaticProps` is used only in static pages, while `getInitialProps` is for dynamic pages.",
      "`getStaticProps` is used for API routes, while `getInitialProps` is used for page components."
    ],
    answer: "`getStaticProps` runs at build time, while `getInitialProps` runs on each request.",
  },
  {
    question: "How do you use middleware in Next.js?",
    options: [
      "By creating a `middleware.js` file in the root directory.",
      "By using the `next/middleware` module.",
      "By adding middleware in the `next.config.js` file.",
      "Next.js does not support middleware."
    ],
    answer: "By creating a `middleware.js` file in the root directory.",
  },
  {
    question: "How can you deploy a Next.js app to Vercel?",
    options: [
      "By linking the GitHub repository to Vercel and deploying automatically.",
      "By manually configuring the Vercel deployment settings.",
      "By exporting the Next.js app to static HTML and uploading to Vercel.",
      "All of the above."
    ],
    answer: "By linking the GitHub repository to Vercel and deploying automatically.",
  },
  {
    question: "What is the purpose of `next/image` in Next.js?",
    options: [
      "To optimize and automatically serve images in the most efficient format.",
      "To handle image resizing and cropping.",
      "To add lazy loading for images.",
      "All of the above."
    ],
    answer: "All of the above.",
  },
  {
    question: "How do you configure a custom server in Next.js?",
    options: [
      "By using the `server.js` file and the `next` package.",
      "By modifying the `next.config.js` file to include server configuration.",
      "By using the `next-server` package for custom server handling.",
      "Next.js does not support custom servers."
    ],
    answer: "By using the `server.js` file and the `next` package.",
  },
  {
    question: "What is the role of `next/head` in Next.js?",
    options: [
      "To manage the head section of the HTML document, such as meta tags, title, and links.",
      "To load external scripts asynchronously.",
      "To manage custom error pages.",
      "To manage dynamic imports of components."
    ],
    answer: "To manage the head section of the HTML document, such as meta tags, title, and links.",
  },
  {
    question: "How can you fetch data from an API in a Next.js page?",
    options: [
      "By using `getStaticProps` or `getServerSideProps` for server-side data fetching.",
      "By using `useEffect` and `fetch` in the component.",
      "By using `next/data` module to fetch data.",
      "Both A and B."
    ],
    answer: "Both A and B.",
  },
  {
    question: "How do you enable TypeScript support in Next.js?",
    options: [
      "By installing `typescript` and `@types/react` packages and creating a `tsconfig.json` file.",
      "By adding `useTypeScript: true` in `next.config.js`.",
      "Next.js automatically detects TypeScript when the `tsconfig.json` file is present.",
      "Next.js does not support TypeScript."
    ],
    answer: "Next.js automatically detects TypeScript when the `tsconfig.json` file is present.",
  },
  {
    question: "What is the difference between `getServerSideProps` and `getStaticProps`?",
    options: [
      "`getServerSideProps` fetches data on each request, while `getStaticProps` fetches data at build time.",
      "`getServerSideProps` is for static pages, while `getStaticProps` is for dynamic pages.",
      "`getServerSideProps` is used in API routes, while `getStaticProps` is for pages.",
      "`getServerSideProps` is deprecated in favor of `getStaticProps`."
    ],
    answer: "`getServerSideProps` fetches data on each request, while `getStaticProps` fetches data at build time.",
  },
  {
    question: "How do you implement dynamic routes in Next.js?",
    options: [
      "By creating a file with the dynamic route pattern (e.g., `[id].js`) in the `pages` directory.",
      "By modifying the `next.config.js` file to define custom dynamic routes.",
      "By using the `next/router` module to handle dynamic routes.",
      "By adding dynamic routes in the `getServerSideProps` function."
    ],
    answer: "By creating a file with the dynamic route pattern (e.g., `[id].js`) in the `pages` directory.",
  },
  {
    question: "How can you use CSS modules in Next.js?",
    options: [
      "By creating `.module.css` files and importing them into components.",
      "By adding CSS rules directly in `pages/_app.js`.",
      "By using `styled-components` for CSS-in-JS.",
      "By adding custom styles in `next.config.js`."
    ],
    answer: "By creating `.module.css` files and importing them into components.",
  },
  {
    question: "How can you handle authentication in Next.js?",
    options: [
      "By using `next-auth` for managing authentication.",
      "By using custom API routes to handle login and session management.",
      "By using JWT tokens for authentication and session management.",
      "All of the above."
    ],
    answer: "All of the above.",
  },
  {
    question: "How do you handle server-side rendering (SSR) in Next.js?",
    options: [
      "By using `getServerSideProps` to fetch data on each request and render the page server-side.",
      "By using `getStaticProps` for static page generation at build time.",
      "By using `next/dynamic` for dynamic imports.",
      "SSR is not supported in Next.js."
    ],
    answer: "By using `getServerSideProps` to fetch data on each request and render the page server-side.",
  },
  {
    question: "How do you use environment variables in Next.js?",
    options: [
      "By creating `.env.local` and accessing them via `process.env.VAR_NAME`.",
      "By adding them to the `next.config.js` file.",
      "By using `next/config` to access environment variables.",
      "Both A and C."
    ],
    answer: "Both A and C.",
  },
  {
    question: "How do you optimize performance in Next.js?",
    options: [
      "By using `next/image` for image optimization.",
      "By enabling static site generation (SSG) with `getStaticProps`.",
      "By enabling server-side rendering (SSR) with `getServerSideProps`.",
      "All of the above."
    ],
    answer: "All of the above.",
  },
  {
    question: "What is the purpose of `next/link` in Next.js?",
    options: [
      "To handle client-side navigation between pages.",
      "To enable lazy loading of components.",
      "To fetch data from APIs.",
      "To manage external links."
    ],
    answer: "To handle client-side navigation between pages.",
  },
  {
    question: "How can you deploy a Next.js app to a static hosting service?",
    options: [
      "By using `next export` to generate static HTML files and uploading them to the hosting service.",
      "By deploying to Vercel, which automatically supports static hosting.",
      "By manually configuring a custom server and deploying to any serverless platform.",
      "All of the above."
    ],
    answer: "All of the above.",
  },
  {
    question: "How can you use API routes in Next.js?",
    options: [
      "By creating files inside the `pages/api` directory and defining the handler functions.",
      "By using `getServerSideProps` to handle API calls.",
      "By using `next/data` for API routing.",
      "By configuring API routes in the `next.config.js` file."
    ],
    answer: "By creating files inside the `pages/api` directory and defining the handler functions.",
  },
  {
    question: "How do you implement client-side routing in Next.js?",
    options: [
      "By using the `next/router` module and `useRouter` hook.",
      "By using `getStaticProps` to fetch data on each page load.",
      "By modifying the `next.config.js` file to configure routes.",
      "Next.js does not support client-side routing."
    ],
    answer: "By using the `next/router` module and `useRouter` hook.",
  },
  {
    question: "How can you use TypeScript with Next.js?",
    options: [
      "By creating a `tsconfig.json` file and installing the necessary TypeScript packages.",
      "By using the `useTypeScript` option in `next.config.js`.",
      "Next.js supports TypeScript out of the box without any configuration.",
      "By modifying the `next.config.js` file to enable TypeScript."
    ],
    answer: "Next.js supports TypeScript out of the box without any configuration.",
  },
  {
      question: "What is the primary benefit of using `getStaticProps` over `getServerSideProps`?",
      options: [
        "`getStaticProps` allows pages to be generated at build time, making them faster.",
        "`getStaticProps` is used for dynamic data fetching, while `getServerSideProps` is used for static data.",
        "`getStaticProps` fetches data only from the server, while `getServerSideProps` works client-side.",
        "`getStaticProps` is used only in server-side applications."
      ],
      answer: "`getStaticProps` allows pages to be generated at build time, making them faster.",
    },
    {
      question: "What is the role of the `next/head` component in Next.js?",
      options: [
        "It allows for dynamic management of the document's head, such as title, meta tags, and links.",
        "It helps with routing by adding custom headers for each page.",
        "It is used for managing stylesheets.",
        "It provides server-side configuration for headers."
      ],
      answer: "It allows for dynamic management of the document's head, such as title, meta tags, and links.",
    },
    {
      question: "How can you implement dynamic imports in Next.js?",
      options: [
        "By using `next/dynamic` for code splitting and loading components only when needed.",
        "By using `import()` with `React.lazy()`.",
        "By using `useEffect` and dynamic component loading.",
        "By using the `dynamic-import` package."
      ],
      answer: "By using `next/dynamic` for code splitting and loading components only when needed.",
    },
    {
      question: "What is the `useRouter` hook used for in Next.js?",
      options: [
        "It allows you to access the Next.js router and manipulate the URL programmatically.",
        "It is used to load pages dynamically.",
        "It provides access to the server-side API routes.",
        "It is used for lazy loading of pages."
      ],
      answer: "It allows you to access the Next.js router and manipulate the URL programmatically.",
    },
    {
      question: "How do you handle authentication and authorization in Next.js?",
      options: [
        "By using `next-auth` for authentication and session management.",
        "By manually managing JWT tokens and session storage.",
        "By using server-side API routes for authentication.",
        "All of the above."
      ],
      answer: "All of the above.",
    },
    {
      question: "What is the purpose of `getServerSideProps` in Next.js?",
      options: [
        "It fetches data server-side on each request and pre-renders the page.",
        "It is used to generate static pages at build time.",
        "It is used for client-side data fetching.",
        "It is used to fetch data from API routes."
      ],
      answer: "It fetches data server-side on each request and pre-renders the page.",
    },
    {
      question: "How do you configure environment variables in Next.js?",
      options: [
        "By creating `.env.local` or `.env.production` files and using `process.env.VAR_NAME`.",
        "By modifying `next.config.js` and defining environment variables.",
        "By adding environment variables in `pages/_app.js`.",
        "By using a custom server for configuration."
      ],
      answer: "By creating `.env.local` or `.env.production` files and using `process.env.VAR_NAME`.",
    },
    {
      question: "What is the purpose of `next/image` in Next.js?",
      options: [
        "It automatically optimizes images for faster loading times.",
        "It is used for handling static assets like images and videos.",
        "It is used to handle dynamic image processing on the server.",
        "It provides custom styles for images."
      ],
      answer: "It automatically optimizes images for faster loading times.",
    },
    {
      question: "How do you deploy a Next.js app to a static hosting service like GitHub Pages?",
      options: [
        "By running `next export` to generate static HTML files and uploading them.",
        "By configuring the static site hosting provider with the Next.js build.",
        "By deploying the app using a custom server setup.",
        "By exporting the app as a `.zip` file."
      ],
      answer: "By running `next export` to generate static HTML files and uploading them.",
    },
    {
      question: "How do you implement API routes in Next.js?",
      options: [
        "By creating files in the `pages/api` directory and exporting functions to handle HTTP requests.",
        "By using `getServerSideProps` to handle API calls.",
        "By adding API endpoints to the `next.config.js` file.",
        "By using `next/router` for handling API requests."
      ],
      answer: "By creating files in the `pages/api` directory and exporting functions to handle HTTP requests.",
    },
    {
      question: "What is the difference between `getStaticPaths` and `getServerSideProps`?",
      options: [
        "`getStaticPaths` is used for dynamic static pages, while `getServerSideProps` is for server-side rendered pages.",
        "`getStaticPaths` fetches data at build time, while `getServerSideProps` fetches data on each request.",
        "`getStaticPaths` is used for API routes, while `getServerSideProps` is used for page components.",
        "`getStaticPaths` generates static HTML pages, while `getServerSideProps` generates dynamic pages."
      ],
      answer: "`getStaticPaths` is used for dynamic static pages, while `getServerSideProps` is for server-side rendered pages.",
    },
    {
      question: "How can you handle dynamic routes in Next.js?",
      options: [
        "By creating a file with the dynamic route pattern like `[id].js` in the `pages` directory.",
        "By defining custom routes in the `next.config.js` file.",
        "By using the `next/router` module for dynamic routing.",
        "By adding dynamic routing functionality in `getStaticProps`."
      ],
      answer: "By creating a file with the dynamic route pattern like `[id].js` in the `pages` directory.",
    },
    {
      question: "What is the `next/link` component used for?",
      options: [
        "To enable client-side navigation between pages in Next.js.",
        "To link external resources to your app.",
        "To pre-render pages in the background.",
        "To handle server-side navigation."
      ],
      answer: "To enable client-side navigation between pages in Next.js.",
    },
    {
      question: "What is the advantage of using `next/dynamic` for dynamic imports?",
      options: [
        "It allows for lazy loading of components to improve performance.",
        "It helps in fetching data dynamically from APIs.",
        "It enables server-side rendering for all components.",
        "It allows preloading components for faster rendering."
      ],
      answer: "It allows for lazy loading of components to improve performance.",
    },
    {
      question: "How can you optimize your Next.js app for better SEO?",
      options: [
        "By using the `next/head` component to manage meta tags and titles.",
        "By ensuring your pages are server-side rendered (SSR) or statically generated.",
        "By using structured data (JSON-LD) for rich results.",
        "All of the above."
      ],
      answer: "All of the above.",
    },
    {
      question: "How do you enable server-side rendering in Next.js?",
      options: [
        "By using `getServerSideProps` to fetch data server-side on each request.",
        "By using `getStaticProps` for pre-rendering at build time.",
        "By using `next/dynamic` for dynamic imports.",
        "By configuring SSR in the `next.config.js` file."
      ],
      answer: "By using `getServerSideProps` to fetch data server-side on each request.",
    },
    {
      question: "What is the purpose of `getInitialProps` in Next.js?",
      options: [
        "It is used to fetch data for pages before they are rendered, either server-side or client-side.",
        "It is used for fetching data only on the client side.",
        "It is used for handling API routes.",
        "It is deprecated in favor of `getStaticProps`."
      ],
      answer: "It is used to fetch data for pages before they are rendered, either server-side or client-side.",
    },
    {
      question: "How can you handle form validation in Next.js?",
      options: [
        "By using libraries like `Formik` or `React Hook Form` along with `Yup` for validation.",
        "By manually managing validation using state in React.",
        "By using the `getServerSideProps` function to validate form data.",
        "All of the above."
      ],
      answer: "By using libraries like `Formik` or `React Hook Form` along with `Yup` for validation.",
    },
    {
      question: "What is the purpose of `next/export`?",
      options: [
        "It generates a fully static site from a Next.js project that can be deployed to static hosting services.",
        "It is used to export components for dynamic imports.",
        "It is used for server-side rendering.",
        "It is used for exporting API routes."
      ],
      answer: "It generates a fully static site from a Next.js project that can be deployed to static hosting services.",
    },
    {
      question: "How can you implement code splitting in Next.js?",
      options: [
        "By using dynamic imports with `next/dynamic`.",
        "By using the `getStaticProps` method for data fetching.",
        "By creating separate JavaScript bundles for each page.",
        "Next.js does not support code splitting."
      ],
      answer: "By using dynamic imports with `next/dynamic`.",
    },
    {
      question: "How do you create custom error pages in Next.js?",
      options: [
        "By creating `pages/_error.js` to handle custom error handling.",
        "By using `getServerSideProps` to handle errors.",
        "By using `next/head` for custom error page meta tags.",
        "By configuring custom error handling in `next.config.js`."
      ],
      answer: "By creating `pages/_error.js` to handle custom error handling.",
    },
    {
      question: "What is the `next/image` component's benefit over using a regular `img` tag?",
      options: [
        "It automatically optimizes images for better performance and supports responsive layouts.",
        "It allows images to be lazy-loaded by default.",
        "It optimizes image formats for faster loading times.",
        "All of the above."
      ],
      answer: "All of the above.",
    },
    {
      question: "How do you handle 404 pages in Next.js?",
      options: [
        "By creating a custom `pages/404.js` component.",
        "By configuring a 404 route in `next.config.js`.",
        "By using `getServerSideProps` for custom 404 handling.",
        "By adding a `404.html` file."
      ],
      answer: "By creating a custom `pages/404.js` component.",
    },
    {
      question: "What is the benefit of using TypeScript with Next.js?",
      options: [
        "It provides type safety and better developer tooling for Next.js projects.",
        "It improves the performance of Next.js apps.",
        "It automatically generates API routes.",
        "It allows for static type checking."
      ],
      answer: "It provides type safety and better developer tooling for Next.js projects.",
    },
    {
      question: "How do you create a global state management solution in Next.js?",
      options: [
        "By using Context API or third-party libraries like Redux or Zustand.",
        "By using `getStaticProps` for state management.",
        "By managing state within the `pages/_app.js` file.",
        "By using local storage for state management."
      ],
      answer: "By using Context API or third-party libraries like Redux or Zustand.",
    }


  

];

