
export const intermediateNextJsQuestions = [
    {
      question: "What is the purpose of `getServerSideProps` in Next.js?",
      options: [
        "To fetch data on each request for server-side rendering",
        "To pre-render pages at build time",
        "To enable static site generation",
        "To define the structure of the app"
      ],
      answer: "To fetch data on each request for server-side rendering",
    },
    {
      question: "Which hook is used for data fetching in a Next.js component?",
      options: [
        "useState",
        "useEffect",
        "useQuery",
        "getStaticProps"
      ],
      answer: "useEffect",
    },
    {
      question: "Which of the following methods is used to generate dynamic pages in Next.js?",
      options: [
        "getStaticProps",
        "getServerSideProps",
        "getStaticPaths",
        "getDynamicProps"
      ],
      answer: "getStaticPaths",
    },
    {
      question: "What is the purpose of `next/image` in Next.js?",
      options: [
        "To optimize images for better performance",
        "To lazy load images",
        "To provide a responsive image component",
        "All of the above"
      ],
      answer: "All of the above",
    },
    {
      question: "How do you configure custom server-side redirects in Next.js?",
      options: [
        "By adding a `redirects` property in `next.config.js`",
        "By using `getServerSideProps` to manage redirects",
        "By modifying the `pages/_document.js` file",
        "By setting up redirects in the `public` folder"
      ],
      answer: "By adding a `redirects` property in `next.config.js`",
    },
    {
      question: "What is the `getStaticPaths` function used for?",
      options: [
        "To specify which paths need to be statically generated at build time",
        "To pre-render pages at build time with dynamic content",
        "To fetch data from an API before rendering the page",
        "To manage static assets"
      ],
      answer: "To specify which paths need to be statically generated at build time",
    },
    {
      question: "What is Incremental Static Regeneration (ISR) in Next.js?",
      options: [
        "A method to regenerate static pages after deployment",
        "A technique to cache server-side pages",
        "A way to pre-render pages with dynamic content",
        "A way to render pages at runtime"
      ],
      answer: "A method to regenerate static pages after deployment",
    },
    {
      question: "How can you enable TypeScript support in a Next.js project?",
      options: [
        "By installing the `@types/next` package",
        "By creating a `tsconfig.json` file",
        "By running `next create --typescript`",
        "Next.js automatically detects TypeScript in the project"
      ],
      answer: "By creating a `tsconfig.json` file",
    },
    {
      question: "Which of the following statements is true about static generation in Next.js?",
      options: [
        "Pages are generated at build time and served as static HTML",
        "Pages are generated at runtime for every request",
        "Static pages are only generated on the client side",
        "Static generation can only be used with `getServerSideProps`"
      ],
      answer: "Pages are generated at build time and served as static HTML",
    },
    {
      question: "What does the `next.config.js` file do in a Next.js project?",
      options: [
        "It is used to configure various settings and features of the Next.js app",
        "It stores all static assets for the app",
        "It defines the global state for the app",
        "It is used for API route configuration"
      ],
      answer: "It is used to configure various settings and features of the Next.js app",
    },
    {
      question: "How can you define custom error pages in Next.js?",
      options: [
        "By creating `pages/_error.js` or `pages/_error.tsx`",
        "By modifying `next.config.js` to include custom error handling",
        "By using the `ErrorBoundary` component",
        "Next.js automatically handles error pages"
      ],
      answer: "By creating `pages/_error.js` or `pages/_error.tsx`",
    },
    {
      question: "What is the default behavior of Next.js when you deploy an app?",
      options: [
        "The app is built with Static Site Generation (SSG) by default",
        "The app is built with Server-Side Rendering (SSR) by default",
        "The app is client-side rendered by default",
        "The app is not pre-rendered by default"
      ],
      answer: "The app is built with Static Site Generation (SSG) by default",
    },
    {
      question: "Which function is used to fetch data during server-side rendering in Next.js?",
      options: [
        "getStaticProps",
        "getServerSideProps",
        "getInitialProps",
        "getDataProps"
      ],
      answer: "getServerSideProps",
    },
    {
      question: "What is the `next/head` component used for in Next.js?",
      options: [
        "To modify the `<head>` section of the HTML document",
        "To manage global state",
        "To fetch data for a page",
        "To enable server-side rendering"
      ],
      answer: "To modify the `<head>` section of the HTML document",
    },
    {
      question: "How can you implement client-side navigation in Next.js?",
      options: [
        "By using the `Link` component from `next/link`",
        "By using `next/router`",
        "By using `getServerSideProps`",
        "By using `useRouter`"
      ],
      answer: "By using the `Link` component from `next/link`",
    },
    {
      question: "What is the default file extension for a page component in Next.js?",
      options: [
        ".jsx",
        ".ts",
        ".tsx",
        ".js"
      ],
      answer: ".js",
    },
    {
      question: "What is the difference between `getStaticProps` and `getServerSideProps`?",
      options: [
        "`getStaticProps` fetches data at build time, while `getServerSideProps` fetches data on each request",
        "`getStaticProps` is for static pages, while `getServerSideProps` is for dynamic pages",
        "There is no difference between the two",
        "`getStaticProps` is used for dynamic data fetching"
      ],
      answer: "`getStaticProps` fetches data at build time, while `getServerSideProps` fetches data on each request",
    },
    {
      question: "How do you set up custom routing in Next.js?",
      options: [
        "By modifying `next.config.js`",
        "By using `pages/api/*`",
        "By creating dynamic routes using file naming conventions in the `pages` directory",
        "By using `next/router`"
      ],
      answer: "By creating dynamic routes using file naming conventions in the `pages` directory",
    },
    {
      question: "Which function allows you to pre-render pages with dynamic content at build time?",
      options: [
        "getServerSideProps",
        "getStaticProps",
        "getStaticPaths",
        "getInitialProps"
      ],
      answer: "getStaticProps",
    },
    {
      question: "How can you add global CSS styles in Next.js?",
      options: [
        "By importing the CSS file in `pages/_app.js`",
        "By adding the CSS file to `next.config.js`",
        "By importing the CSS file in `pages/_document.js`",
        "By adding the CSS file in `public/styles`"
      ],
      answer: "By importing the CSS file in `pages/_app.js`",
    },
    {
      question: "What is the main advantage of using Static Site Generation (SSG) in Next.js?",
      options: [
        "It generates static pages at build time for faster loading",
        "It renders pages on the server on each request",
        "It allows you to create dynamic pages with a custom backend",
        "It fetches data on the client-side"
      ],
      answer: "It generates static pages at build time for faster loading",
    },
    {
      question: "What is the role of the `next.config.js` file in a Next.js project?",
      options: [
        "It is used to configure custom server behavior",
        "It is used to define the file structure for the app",
        "It is used to define the routes for the app",
        "It is used to configure how Next.js pre-renders pages"
      ],
      answer: "It is used to configure custom server behavior",
    },
    {
      question: "What is the default directory for static assets in a Next.js project?",
      options: [
        "public",
        "assets",
        "static",
        "images"
      ],
      answer: "public",
    },
    {
      question: "How can you add custom server-side logic to a Next.js app?",
      options: [
        "By using API routes in the `pages/api` directory",
        "By adding logic in `next.config.js`",
        "By using `getServerSideProps`",
        "By using `getStaticProps`"
      ],
      answer: "By using API routes in the `pages/api` directory",
    },
    {
      question: "Which method would you use for fetching data from an API at build time in Next.js?",
      options: [
        "getServerSideProps",
        "getStaticProps",
        "getStaticPaths",
        "getInitialProps"
      ],
      answer: "getStaticProps",
    },
    {
      question: "What does the `next/head` component allow you to modify?",
      options: [
        "The `<head>` section of the HTML document",
        "The layout of the page",
        "The URL of the page",
        "The global state of the app"
      ],
      answer: "The `<head>` section of the HTML document",
    },
    {
        question: "What is the main difference between `getServerSideProps` and `getStaticProps`?",
        options: [
          "`getServerSideProps` fetches data at runtime, while `getStaticProps` fetches data at build time",
          "`getServerSideProps` is used for static content, while `getStaticProps` is used for dynamic content",
          "`getStaticProps` is used for server-side rendering, while `getServerSideProps` is used for static rendering",
          "There is no difference between them"
        ],
        answer: "`getServerSideProps` fetches data at runtime, while `getStaticProps` fetches data at build time",
      },
      {
        question: "What does the `useRouter` hook provide in Next.js?",
        options: [
          "Access to the router object for handling routing programmatically",
          "Access to server-side data",
          "Access to static site generation methods",
          "Access to global CSS styles"
        ],
        answer: "Access to the router object for handling routing programmatically",
      },
      {
        question: "How can you define a dynamic route in Next.js?",
        options: [
          "By creating a file with square brackets, e.g., `[id].js`",
          "By creating a file named `dynamic.js`",
          "By using `next/router` to handle dynamic routes",
          "By modifying `next.config.js`"
        ],
        answer: "By creating a file with square brackets, e.g., `[id].js`",
      },
      {
        question: "How do you add a custom 404 error page in Next.js?",
        options: [
          "By creating a `pages/404.js` file",
          "By creating a `pages/_error.js` file",
          "By adding a custom error handler in `next.config.js`",
          "By using `getServerSideProps` for error handling"
        ],
        answer: "By creating a `pages/404.js` file",
      },
      {
        question: "What is the purpose of `getStaticPaths` in Next.js?",
        options: [
          "To define which dynamic routes should be pre-rendered at build time",
          "To fetch data from an API during server-side rendering",
          "To create custom API routes",
          "To specify static assets"
        ],
        answer: "To define which dynamic routes should be pre-rendered at build time",
      },
      {
        question: "Which method is used to generate a static site with dynamic data in Next.js?",
        options: [
          "getStaticProps",
          "getServerSideProps",
          "getStaticPaths",
          "getInitialProps"
        ],
        answer: "getStaticProps",
      },
      {
        question: "How do you fetch data for a page at runtime in Next.js?",
        options: [
          "By using `getServerSideProps`",
          "By using `getStaticProps`",
          "By using `getInitialProps`",
          "By using `useEffect`"
        ],
        answer: "By using `getServerSideProps`",
      },
      {
        question: "What is the purpose of the `next/link` component?",
        options: [
          "To enable client-side navigation between pages",
          "To enable server-side rendering",
          "To fetch data from an API",
          "To manage global state"
        ],
        answer: "To enable client-side navigation between pages",
      },
      {
        question: "Which of the following is used to create API routes in Next.js?",
        options: [
          "`pages/api` directory",
          "`pages/server` directory",
          "`api/routes.js` file",
          "The `next.config.js` file"
        ],
        answer: "`pages/api` directory",
      },
      {
        question: "How do you enable CSS Modules in Next.js?",
        options: [
          "By importing CSS files as modules with `.module.css` extension",
          "By adding CSS files in `pages/_document.js`",
          "By configuring `next.config.js`",
          "By using global CSS files only"
        ],
        answer: "By importing CSS files as modules with `.module.css` extension",
      },
      {
        question: "How do you implement dynamic imports in Next.js?",
        options: [
          "By using `next/dynamic`",
          "By using `import()` syntax",
          "By using `getServerSideProps`",
          "By using `next/router`"
        ],
        answer: "By using `next/dynamic`",
      },
      {
        question: "What does `getStaticProps` return?",
        options: [
          "An object with `props` to be passed to the component",
          "A promise that resolves with data from an API",
          "A component that can be rendered server-side",
          "A static HTML page"
        ],
        answer: "An object with `props` to be passed to the component",
      },
      {
        question: "Which method is used to define a custom server in Next.js?",
        options: [
          "By creating a custom server with Express.js or other Node.js frameworks",
          "By adding `next.config.js`",
          "By using `getServerSideProps`",
          "By creating a `pages/_document.js` file"
        ],
        answer: "By creating a custom server with Express.js or other Node.js frameworks",
      },
      {
        question: "How can you add environment variables in a Next.js app?",
        options: [
          "By creating a `.env.local` file",
          "By modifying `next.config.js`",
          "By adding variables in `pages/_app.js`",
          "By setting variables in `next/head`"
        ],
        answer: "By creating a `.env.local` file",
      },
      {
        question: "How do you implement dynamic page routes in Next.js?",
        options: [
          "By creating files with dynamic route parameters like `[id].js`",
          "By using `getServerSideProps` for dynamic routes",
          "By creating static routes in `next.config.js`",
          "By modifying the URL directly"
        ],
        answer: "By creating files with dynamic route parameters like `[id].js`",
      },
      {
        question: "How do you enable automatic static optimization in Next.js?",
        options: [
          "By ensuring that the page does not use `getServerSideProps`",
          "By adding a `getStaticProps` function to the page",
          "By setting `next.config.js` to static",
          "By creating static files in the `public` directory"
        ],
        answer: "By ensuring that the page does not use `getServerSideProps`",
      },
      {
        question: "How do you add custom metadata (like title, description) to a page in Next.js?",
        options: [
          "By using the `next/head` component",
          "By modifying `next.config.js`",
          "By adding meta tags directly in `pages/_document.js`",
          "By adding metadata in `pages/_app.js`"
        ],
        answer: "By using the `next/head` component",
      },
      {
        question: "What is the purpose of `getInitialProps` in Next.js?",
        options: [
          "To fetch data before rendering the page on the server",
          "To fetch data on each request",
          "To pre-render static pages",
          "To handle client-side navigation"
        ],
        answer: "To fetch data before rendering the page on the server",
      },
      {
        question: "How can you deploy a Next.js app to Vercel?",
        options: [
          "By linking the GitHub repository to Vercel",
          "By running `vercel deploy` in the terminal",
          "By uploading the build folder to Vercel",
          "By using the `next export` command"
        ],
        answer: "By linking the GitHub repository to Vercel",
      },
      {
        question: "What is the `next/image` component used for?",
        options: [
          "To optimize and lazy-load images automatically",
          "To add background images",
          "To manage static assets",
          "To fetch images from external APIs"
        ],
        answer: "To optimize and lazy-load images automatically",
      },
      {
        question: "What is the difference between `getServerSideProps` and `getInitialProps`?",
        options: [
          "`getServerSideProps` runs on the server at runtime, while `getInitialProps` runs on both server and client",
          "`getServerSideProps` runs on the client, while `getInitialProps` runs on the server",
          "There is no difference between them",
          "`getServerSideProps` is used only for static pages"
        ],
        answer: "`getServerSideProps` runs on the server at runtime, while `getInitialProps` runs on both server and client",
      },
      {
        question: "How do you add global CSS in Next.js?",
        options: [
          "By importing the CSS file in `pages/_app.js`",
          "By importing the CSS file in `pages/_document.js`",
          "By using CSS modules in the component",
          "By adding CSS directly in `next.config.js`"
        ],
        answer: "By importing the CSS file in `pages/_app.js`",
      },
      {
        question: "What is the default behavior of Next.js when a page does not use `getServerSideProps` or `getStaticProps`?",
        options: [
          "It will pre-render the page as static",
          "It will render the page on the client side only",
          "It will render the page dynamically each time",
          "It will return a 404 error"
        ],
        answer: "It will pre-render the page as static",
      },
      {
        question: "What does `next/dynamic` do in Next.js?",
        options: [
          "It dynamically imports a module or component only when it's needed",
          "It generates dynamic routes based on URL parameters",
          "It allows dynamic server-side rendering",
          "It creates dynamic pages with a delay"
        ],
        answer: "It dynamically imports a module or component only when it's needed",
      },
      {
        question: "What is the purpose of `getStaticPaths` in Next.js?",
        options: [
          "To specify which dynamic routes should be pre-rendered at build time",
          "To fetch data for a page at runtime",
          "To create a custom 404 page",
          "To define the layout for a dynamic page"
        ],
        answer: "To specify which dynamic routes should be pre-rendered at build time",
      },
      {
        question: "Which hook is used to programmatically navigate to another page in Next.js?",
        options: [
          "useRouter",
          "useNavigate",
          "useHistory",
          "useLocation"
        ],
        answer: "useRouter",
      },
      {
        question: "What is the default behavior of Next.js when a page is built using `getStaticProps`?",
        options: [
          "The page is pre-rendered at build time and cached",
          "The page is rendered on every request",
          "The page is only rendered on the server",
          "The page is rendered on the client-side"
        ],
        answer: "The page is pre-rendered at build time and cached",
      },
      {
        question: "How can you implement custom document structure in Next.js?",
        options: [
          "By creating a `pages/_document.js` file",
          "By modifying the `next.config.js` file",
          "By adding a custom component in `pages/_app.js`",
          "By using the `next/head` component"
        ],
        answer: "By creating a `pages/_document.js` file",
      },
      {
        question: "Which of the following is a feature of `getServerSideProps` in Next.js?",
        options: [
          "It runs only on the server for every request",
          "It is used for pre-rendering static pages",
          "It allows fetching data during build time",
          "It caches the page for faster performance"
        ],
        answer: "It runs only on the server for every request",
      },
      {
        question: "What is the default behavior of Next.js for static file handling?",
        options: [
          "Static files are served from the `public` directory",
          "Static files are bundled in the `.next` folder",
          "Static files are placed inside the `pages` directory",
          "Static files are fetched dynamically at runtime"
        ],
        answer: "Static files are served from the `public` directory",
      },
      {
        question: "How do you implement a custom error page in Next.js?",
        options: [
          "By creating a `pages/_error.js` file",
          "By using the `next/error` module",
          "By modifying `next.config.js`",
          "By creating a `pages/404.js` file"
        ],
        answer: "By creating a `pages/_error.js` file",
      },
      {
        question: "How can you implement code splitting in Next.js?",
        options: [
          "By using dynamic imports with `next/dynamic`",
          "By adding `getServerSideProps`",
          "By creating multiple entry points in `next.config.js`",
          "By using the `React.lazy()` function"
        ],
        answer: "By using dynamic imports with `next/dynamic`",
      },
      {
        question: "What is the main benefit of using `getStaticProps` in Next.js?",
        options: [
          "It allows you to pre-render a page at build time for better performance",
          "It fetches data on every request for the page",
          "It enables real-time updates on the page",
          "It renders pages dynamically on the server"
        ],
        answer: "It allows you to pre-render a page at build time for better performance",
      },
      {
        question: "How can you enable internationalization (i18n) in Next.js?",
        options: [
          "By configuring the `i18n` option in `next.config.js`",
          "By creating separate directories for each language",
          "By using the `next-i18next` library",
          "By using custom `getServerSideProps` for each language"
        ],
        answer: "By configuring the `i18n` option in `next.config.js`",
      },
      {
        question: "What is the role of `next/head` in Next.js?",
        options: [
          "To modify the HTML `<head>` section for the page",
          "To handle dynamic imports of components",
          "To manage static assets",
          "To enable client-side routing"
        ],
        answer: "To modify the HTML `<head>` section for the page",
      },
      {
        question: "Which of the following is true about Next.js pages?",
        options: [
          "Pages are automatically routed based on the file name",
          "Pages require a routing configuration in `next.config.js`",
          "Pages can only be rendered using `getServerSideProps`",
          "Pages are not pre-rendered by default"
        ],
        answer: "Pages are automatically routed based on the file name",
      },
      {
        question: "How do you fetch data in Next.js at build time for a static page?",
        options: [
          "By using `getStaticProps`",
          "By using `getServerSideProps`",
          "By using `getInitialProps`",
          "By using `useEffect`"
        ],
        answer: "By using `getStaticProps`",
      },
      {
        question: "How do you optimize images in Next.js?",
        options: [
          "By using the `next/image` component",
          "By using the `next/optimize` component",
          "By using the `next/img` tag",
          "By using `getStaticProps` for image optimization"
        ],
        answer: "By using the `next/image` component",
      },
      {
        question: "What is the main benefit of `getStaticPaths` in Next.js?",
        options: [
          "It defines which dynamic routes should be pre-rendered",
          "It helps with fetching data during server-side rendering",
          "It is used to configure static file handling",
          "It manages dynamic imports"
        ],
        answer: "It defines which dynamic routes should be pre-rendered",
      },
      {
        question: "How do you define custom server logic in Next.js?",
        options: [
          "By creating a custom server with Express.js or other Node.js frameworks",
          "By modifying `next.config.js`",
          "By using `getServerSideProps`",
          "By using the `next/express` module"
        ],
        answer: "By creating a custom server with Express.js or other Node.js frameworks",
      },
      {
        question: "What is the default routing method in Next.js?",
        options: [
          "File-based routing",
          "Custom routing configuration in `next.config.js`",
          "React Router",
          "Dynamic routing with API calls"
        ],
        answer: "File-based routing",
      },
      {
        question: "How do you prevent a page from being statically optimized in Next.js?",
        options: [
          "By using `getServerSideProps`",
          "By using `getInitialProps`",
          "By using `getStaticProps` with `revalidate` set to `false`",
          "By adding `noSSR` to the component"
        ],
        answer: "By using `getServerSideProps`",
      },
      {
        question: "Which of the following is the correct way to define dynamic routes in Next.js?",
        options: [
          "By creating a file with the `[param].js` syntax",
          "By using `getDynamicRoutes` in `next.config.js`",
          "By defining routes in the `pages/api` folder",
          "By manually setting routes in the `router` configuration"
        ],
        answer: "By creating a file with the `[param].js` syntax",
      },
      {
        question: "How do you pre-render pages at build time in Next.js?",
        options: [
          "By using `getStaticProps`",
          "By using `getServerSideProps`",
          "By using `getInitialProps`",
          "By manually specifying pre-rendering logic in `next.config.js`"
        ],
        answer: "By using `getStaticProps`",
      },
      {
        question: "What is the primary use of `next/image` in Next.js?",
        options: [
          "To optimize images for performance and responsive design",
          "To dynamically load images based on user interactions",
          "To create custom image galleries",
          "To preload images for faster rendering"
        ],
        answer: "To optimize images for performance and responsive design",
      },
      {
        question: "Which of the following can you use to define metadata for your Next.js pages?",
        options: [
          "The `next/head` component",
          "The `next/meta` component",
          "The `head` HTML tag directly",
          "The `next/metadata` API"
        ],
        answer: "The `next/head` component",
      },
      {
        question: "How can you add custom error pages for 404 or other errors in Next.js?",
        options: [
          "By creating a `pages/_error.js` or `pages/404.js` file",
          "By adding a custom error handler in `next.config.js`",
          "By using a global error boundary",
          "By using the `next/error` module"
        ],
        answer: "By creating a `pages/_error.js` or `pages/404.js` file",
      },
      {
        question: "How do you deploy a Next.js app to Vercel?",
        options: [
          "By pushing the app to a GitHub repository and linking it to Vercel",
          "By running `next build` and manually uploading the output to Vercel",
          "By creating a custom deployment configuration in `next.config.js`",
          "By using the `next deploy` command"
        ],
        answer: "By pushing the app to a GitHub repository and linking it to Vercel",
      },
      {
        question: "How can you add API routes in Next.js?",
        options: [
          "By creating a file inside the `pages/api` directory",
          "By using `getServerSideProps` to handle API requests",
          "By creating an API server in `next.config.js`",
          "By adding API endpoints in the `pages/_api.js` file"
        ],
        answer: "By creating a file inside the `pages/api` directory",
      },
      {
        question: "What is the function of `getStaticPaths` in Next.js?",
        options: [
          "It defines which dynamic pages to pre-render based on data",
          "It fetches data on each request for the page",
          "It defines the fallback behavior for missing paths",
          "It allows you to configure dynamic routes at runtime"
        ],
        answer: "It defines which dynamic pages to pre-render based on data",
      },
      {
        question: "Which of the following is used to create a custom server in Next.js?",
        options: [
          "`next express`",
          "`next server`",
          "`next custom-server`",
          "`next.config.js`"
        ],
        answer: "`next server`",
      },
      {
        question: "How can you implement server-side authentication in Next.js?",
        options: [
          "By using `getServerSideProps` to fetch user data from the server",
          "By using `getStaticProps` for user authentication",
          "By implementing a custom hook in `useAuth`",
          "By adding the `Auth` component in `next.config.js`"
        ],
        answer: "By using `getServerSideProps` to fetch user data from the server",
      },
      {
        question: "What is the purpose of `getServerSideProps` in Next.js?",
        options: [
          "To fetch data on each request and pre-render the page",
          "To fetch data at build time and optimize static generation",
          "To handle user input on the client-side",
          "To define the layout of a page"
        ],
        answer: "To fetch data on each request and pre-render the page",
      },
      {
        question: "Which of the following hooks is used for client-side data fetching in Next.js?",
        options: [
          "`useEffect`",
          "`useState`",
          "`useData`",
          "`useQuery`"
        ],
        answer: "`useEffect`",
      },
      {
        question: "How do you enable TypeScript in a Next.js project?",
        options: [
          "By installing `typescript` and `@types/react` and creating a `tsconfig.json` file",
          "By installing `ts-next` package",
          "By renaming the `pages` folder to `ts-pages`",
          "By setting the `type: 'typescript'` in `next.config.js`"
        ],
        answer: "By installing `typescript` and `@types/react` and creating a `tsconfig.json` file",
      },
      {
        question: "How can you handle dynamic imports in Next.js?",
        options: [
          "By using `next/dynamic`",
          "By using `import` with `async` keyword",
          "By importing the module inside `useEffect`",
          "By adding the `dynamicImport` method in `next.config.js`"
        ],
        answer: "By using `next/dynamic`",
      },
      {
        question: "What is the purpose of `next/image` component?",
        options: [
          "To optimize images for faster loading and responsiveness",
          "To add static images without optimization",
          "To serve images from external sources only",
          "To handle SVG images"
        ],
        answer: "To optimize images for faster loading and responsiveness",
      },
      {
        question: "How do you enable static file serving in Next.js?",
        options: [
          "By placing files in the `public` directory",
          "By adding `static` directory inside `pages` folder",
          "By using `next-static` package",
          "By adding a custom server configuration in `next.config.js`"
        ],
        answer: "By placing files in the `public` directory",
      },
      {
        question: "Which Next.js feature allows you to generate static pages for dynamic routes?",
        options: [
          "`getStaticPaths`",
          "`getServerSideProps`",
          "`getStaticProps`",
          "`useSWR`"
        ],
        answer: "`getStaticPaths`",
      },
      {
        question: "How do you prevent a page from being statically optimized and force server-side rendering in Next.js?",
        options: [
          "By using `getServerSideProps`",
          "By using `getStaticProps`",
          "By using `getInitialProps`",
          "By using `next/ssr`"
        ],
        answer: "By using `getServerSideProps`",
      },
      {
        question: "Which method is used to handle page redirects in Next.js?",
        options: [
          "`redirect()` in `getServerSideProps`",
          "`redirect()` in `getStaticProps`",
          "`next.redirect`",
          "`useRedirect`"
        ],
        answer: "`redirect()` in `getServerSideProps`",
      },
      {
        question: "What is the default behavior for a Next.js page?",
        options: [
          "It is pre-rendered as static HTML at build time",
          "It is always server-side rendered",
          "It is always client-side rendered",
          "It uses `getInitialProps` to fetch data"
        ],
        answer: "It is pre-rendered as static HTML at build time",
      },
      {
        question: "How can you add a custom 404 page in Next.js?",
        options: [
          "By creating a `pages/404.js` file",
          "By creating a `pages/notfound.js` file",
          "By modifying the `next.config.js` file",
          "By adding a `404.html` file in the `public` directory"
        ],
        answer: "By creating a `pages/404.js` file",
      },
      {
        question: "Which function is used to fetch data during the build process in Next.js?",
        options: [
          "`getStaticProps`",
          "`getServerSideProps`",
          "`getInitialProps`",
          "`useStaticData`"
        ],
        answer: "`getStaticProps`",
      },
      {
        question: "How can you access the query parameters in a Next.js page?",
        options: [
          "Using `useRouter()` from `next/router`",
          "Using `getServerSideProps()`",
          "Using `getStaticProps()`",
          "Using `useQueryParams()`"
        ],
        answer: "Using `useRouter()` from `next/router`",
      },
      {
        question: "Which Next.js feature allows you to statically generate pages for dynamic routes?",
        options: [
          "`getStaticPaths`",
          "`getServerSideProps`",
          "`getStaticProps`",
          "`getInitialProps`"
        ],
        answer: "`getStaticPaths`",
      },
      {
        question: "Which function is used to pre-render pages on each request in Next.js?",
        options: [
          "`getServerSideProps`",
          "`getStaticProps`",
          "`getStaticPaths`",
          "`getInitialProps`"
        ],
        answer: "`getServerSideProps`",
      },
      {
        question: "How do you handle environment variables in Next.js?",
        options: [
          "By creating `.env.local` file",
          "By using `process.env` directly in the code",
          "By using `next.config.js`",
          "By using the `dotenv` package"
        ],
        answer: "By creating `.env.local` file",
      },
      {
        question: "What is the `getInitialProps` method used for in Next.js?",
        options: [
          "To fetch data before rendering a page",
          "To fetch data after rendering a page",
          "To handle server-side redirects",
          "To generate static pages"
        ],
        answer: "To fetch data before rendering a page",
      },
      {
        question: "Which of the following is a correct way to enable static file serving in Next.js?",
        options: [
          "Place files in the `public` directory",
          "Place files in the `static` directory",
          "Use `next/static` to import files",
          "Define static assets in `next.config.js`"
        ],
        answer: "Place files in the `public` directory",
      },
      {
        question: "How can you optimize images in Next.js?",
        options: [
          "By using the `next/image` component",
          "By using the `img` HTML tag with `loading=lazy`",
          "By using `next/optimize` package",
          "By importing images with `require`"
        ],
        answer: "By using the `next/image` component",
      },
      {
        question: "What is the primary purpose of `getServerSideProps` in Next.js?",
        options: [
          "To fetch data on each request and pre-render the page",
          "To generate static pages at build time",
          "To fetch data at runtime on the client-side",
          "To handle static files"
        ],
        answer: "To fetch data on each request and pre-render the page",
      },
      {
        question: "How do you add a custom `_document.js` in Next.js?",
        options: [
          "By creating a `pages/_document.js` file",
          "By creating a `pages/_customDocument.js` file",
          "By modifying the `next.config.js` file",
          "By using `next/document` module"
        ],
        answer: "By creating a `pages/_document.js` file",
      },
      {
        question: "Which of the following is a valid way to create a custom error page in Next.js?",
        options: [
          "By creating a `pages/_error.js` file",
          "By creating a `pages/404.js` file",
          "By adding a custom error handler in `next.config.js`",
          "By creating an `error.js` file inside the `pages` folder"
        ],
        answer: "By creating a `pages/_error.js` file",
      }

  ];
  