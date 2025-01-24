export const nextJsQuestions = [
  {
    question: "What is Next.js?",
    options: [
      "A JavaScript framework for building static websites",
      "A React framework for building dynamic websites",
      "A server-side JavaScript engine",
      "A CSS preprocessor",
    ],
    answer: "A React framework for building dynamic websites",
  },
  {
    question: "Which feature is built into Next.js for handling routes?",
    options: ["React Router", "Next.js Router", "Hash Router", "Vue Router"],
    answer: "Next.js Router",
  },
  {
    question: "How do you fetch data on the server side in Next.js?",
    options: ["getServerSideProps", "useEffect", "useState", "getInitialProps"],
    answer: "getServerSideProps",
  },
  {
    question:
      "Which of the following is a Next.js feature for image optimization?",
    options: ["next/image", "react-image", "img-optimizer", "next-optimized"],
    answer: "next/image",
  },
  {
    question: "What is `getStaticProps` used for in Next.js?",
    options: [
      "Fetching data on the client side",
      "Fetching data at build time",
      "Fetching data at runtime",
      "Managing state",
    ],
    answer: "Fetching data at build time",
  },
  {
    question: "What is the default routing method in Next.js?",
    options: [
      "Dynamic Routing",
      "File-based Routing",
      "Query-based Routing",
      "Hash Routing",
    ],
    answer: "File-based Routing",
  },
  {
    question: "Which method is used for server-side rendering in Next.js?",
    options: [
      "getStaticProps",
      "getServerSideProps",
      "getInitialProps",
      "useEffect",
    ],
    answer: "getServerSideProps",
  },
  {
    question: "Which command is used to start a Next.js development server?",
    options: ["npm run dev", "next start", "next run", "npm start"],
    answer: "npm run dev",
  },
  {
    question: "What does `next export` do in Next.js?",
    options: [
      "Generates a static site",
      "Starts the Next.js development server",
      "Creates a production build",
      "Compiles JSX files",
    ],
    answer: "Generates a static site",
  },
  {
    question: "Which file in Next.js defines global styles?",
    options: [
      "pages/_app.js",
      "styles/global.css",
      "pages/index.js",
      "public/styles.css",
    ],
    answer: "pages/_app.js",
  },
  {
    question: "What does the `next/head` component do?",
    options: [
      "Manages routing",
      "Handles SEO meta tags",
      "Optimizes images",
      "Adds CSS to the page",
    ],
    answer: "Handles SEO meta tags",
  },
  {
    question: "What is `next/image` used for in Next.js?",
    options: [
      "Handling images in a React project",
      "Optimizing images automatically",
      "Rendering images server-side",
      "Serving images as Base64",
    ],
    answer: "Optimizing images automatically",
  },
  {
    question: "How do you enable TypeScript in a Next.js project?",
    options: [
      "Install @types/next",
      "Run `next create`",
      "Create a tsconfig.json file",
      "Install next-ts",
    ],
    answer: "Create a tsconfig.json file",
  },
  {
    question: "Which function is used to pre-render a page at build time?",
    options: [
      "getStaticProps",
      "getServerSideProps",
      "getInitialProps",
      "useStatic",
    ],
    answer: "getStaticProps",
  },
  {
    question: "What does the `next/link` component do?",
    options: [
      "Creates a static link",
      "Handles navigation between pages",
      "Fetches data from the server",
      "Links to external resources",
    ],
    answer: "Handles navigation between pages",
  },
  {
    question: "Which is the default static site generation method in Next.js?",
    options: [
      "getStaticProps",
      "getServerSideProps",
      "getInitialProps",
      "getStaticPaths",
    ],
    answer: "getStaticProps",
  },
  {
    question: "Which of the following is a valid Next.js file-based route?",
    options: ["/about", "/home/index.js", "/products/[id].js", "/app/home"],
    answer: "/products/[id].js",
  },
  {
    question: "Which command builds a production version of a Next.js project?",
    options: ["next build", "npm run build", "next deploy", "next start"],
    answer: "next build",
  },
  {
    question:
      "Which function is used to pre-render a page at runtime in Next.js?",
    options: [
      "getStaticProps",
      "getServerSideProps",
      "getInitialProps",
      "useEffect",
    ],
    answer: "getServerSideProps",
  },
  {
    question: "What is the file extension for a Next.js page?",
    options: [".html", ".js", ".jsx", ".ts"],
    answer: ".js",
  },
  {
    question: "How can you create dynamic routes in Next.js?",
    options: [
      "By using `next/dynamic`",
      "By using file-based routing with dynamic segments",
      "By adding routes in `next.config.js`",
      "By using `getDynamicProps`",
    ],
    answer: "By using file-based routing with dynamic segments",
  },
  {
    question: "What is the role of `getStaticPaths` in Next.js?",
    options: [
      "To generate dynamic routes at build time",
      "To fetch data from the server",
      "To handle routing",
      "To optimize images",
    ],
    answer: "To generate dynamic routes at build time",
  },
  {
    question: "Which of the following is a valid API route in Next.js?",
    options: [
      "/api/users",
      "/pages/api/users",
      "/api/hello",
      "/api/user/index.js",
    ],
    answer: "/api/users",
  },
  {
    question: "How can you add global styles in Next.js?",
    options: [
      "By importing CSS in `pages/_app.js`",
      "By adding a `styles.css` file in the public folder",
      "By adding CSS to the component",
      "By using inline styles",
    ],
    answer: "By importing CSS in `pages/_app.js`",
  },
  {
    question: "What is `getInitialProps` used for in Next.js?",
    options: [
      "Fetching data at build time",
      "Fetching data on the server-side",
      "Handling server-side redirects",
      "Fetching data on the client-side",
    ],
    answer: "Fetching data on the server-side",
  },
  {
    question: "How do you handle API routes in Next.js?",
    options: [
      "Create files inside `pages/api/` directory",
      "Use `next/api`",
      "Use `server/api`",
      "Use `api.js`",
    ],
    answer: "Create files inside `pages/api/` directory",
  },
  {
    question: "What is the default behavior for unhandled routes in Next.js?",
    options: [
      "404 Error",
      "Redirect to home page",
      "Load a default page",
      "Display a loading spinner",
    ],
    answer: "404 Error",
  },
  {
    question: "Which method can you use to deploy a Next.js application?",
    options: ["Vercel", "Netlify", "GitHub Pages", "Firebase Hosting"],
    answer: "Vercel",
  },
  {
    question: "Which command is used to install Next.js in a project?",
    options: [
      "npm install next",
      "npm install nextjs",
      "next init",
      "next create",
    ],
    answer: "npm install next",
  },
  {
    question:
      "How do you add metadata like title and description to a Next.js page?",
    options: [
      "By using `next/head`",
      "By using `next/meta`",
      "By using `document.head`",
      "By using `pages/head`",
    ],
    answer: "By using `next/head`",
  },
  {
    question: "How can you add a favicon to a Next.js application?",
    options: [
      "By adding a `favicon.ico` file in the `public` directory",
      "By using `next/favicon`",
      "By using `next/public/favicon`",
      "By importing the favicon into `_app.js`",
    ],
    answer: "By adding a `favicon.ico` file in the `public` directory",
  },
  {
    question: "What is the default server-side rendering method in Next.js?",
    options: [
      "getStaticProps",
      "getServerSideProps",
      "getInitialProps",
      "No SSR by default",
    ],
    answer: "getServerSideProps",
  },

  {
    question: "What is the purpose of `getStaticPaths` in Next.js?",
    options: [
      "To specify which dynamic routes should be pre-rendered",
      "To fetch data from an external API",
      "To handle page redirections",
      "To handle client-side navigation",
    ],
    answer: "To specify which dynamic routes should be pre-rendered",
  },
  {
    question: "What is the main benefit of using Next.js for SEO?",
    options: [
      "Automatic SEO meta tags generation",
      "Server-side rendering for faster content delivery",
      "Image optimization",
      "Code splitting",
    ],
    answer: "Server-side rendering for faster content delivery",
  },
  {
    question: "Which component is used to add custom error pages in Next.js?",
    options: ["Error.js", "_error.js", "CustomError.js", "404.js"],
    answer: "_error.js",
  },
  {
    question: "How do you use environment variables in Next.js?",
    options: [
      "By creating a .env.local file",
      "By using the config.js file",
      "By setting them directly in the component",
      "By adding them in next.config.js",
    ],
    answer: "By creating a .env.local file",
  },
  {
    question: "What is the use of `next/dynamic` in Next.js?",
    options: [
      "To create dynamic imports for components",
      "To enable server-side rendering",
      "To handle dynamic routes",
      "To manage state dynamically",
    ],
    answer: "To create dynamic imports for components",
  },
  {
    question: "What does the `getServerSideProps` function do in Next.js?",
    options: [
      "Fetches data on the server side for each request",
      "Fetches data at build time",
      "Handles form submission",
      "Optimizes images",
    ],
    answer: "Fetches data on the server side for each request",
  },
  {
    question:
      "Which of the following methods allows you to add custom headers in Next.js?",
    options: ["next.config.js", "headers.js", "app.config.js", "server.js"],
    answer: "next.config.js",
  },
  {
    question: "How do you add custom CSS styles to a Next.js component?",
    options: [
      "By importing CSS files directly in the component",
      "By adding inline styles in the component",
      "By using a custom CSS-in-JS library",
      "By adding a CSS file in the public directory",
    ],
    answer: "By importing CSS files directly in the component",
  },
  {
    question: "How can you use TypeScript in a Next.js project?",
    options: [
      "Install TypeScript and create tsconfig.json",
      "Install ts-loader",
      "Use .ts files directly in the project",
      "Add TypeScript as a dependency in package.json",
    ],
    answer: "Install TypeScript and create tsconfig.json",
  },
  {
    question:
      "What is the difference between `getStaticProps` and `getServerSideProps`?",
    options: [
      "getStaticProps fetches data at build time, getServerSideProps fetches data at runtime",
      "getStaticProps fetches data on the client-side, getServerSideProps fetches data on the server-side",
      "getStaticProps is used for static content, getServerSideProps is used for dynamic content",
      "There is no difference",
    ],
    answer:
      "getStaticProps fetches data at build time, getServerSideProps fetches data at runtime",
  },
  {
    question:
      "Which method is used for pre-rendering a page at build time in Next.js?",
    options: [
      "getStaticProps",
      "getServerSideProps",
      "getInitialProps",
      "useEffect",
    ],
    answer: "getStaticProps",
  },
  {
    question: "What is the purpose of the `pages/api` directory in Next.js?",
    options: [
      "To create server-side API routes",
      "To manage static files",
      "To handle image optimization",
      "To manage stylesheets",
    ],
    answer: "To create server-side API routes",
  },
  {
    question: "What does `next export` do in a Next.js project?",
    options: [
      "Generates a static version of the site",
      "Deploys the site to Vercel",
      "Compiles the project for production",
      "Builds the site for dynamic rendering",
    ],
    answer: "Generates a static version of the site",
  },
  {
    question: "How can you add custom headers in Next.js?",
    options: [
      "By modifying next.config.js",
      "By creating a custom _headers file",
      "By using a middleware",
      "By using `getInitialProps`",
    ],
    answer: "By modifying next.config.js",
  },
  {
    question: "Which of the following can you use to deploy a Next.js app?",
    options: ["Vercel", "Heroku", "AWS", "All of the above"],
    answer: "All of the above",
  },
  {
    question:
      "Which of the following methods can be used to add dynamic imports in Next.js?",
    options: ["next/dynamic", "next/import", "react-dynamic", "dynamic-import"],
    answer: "next/dynamic",
  },
  {
    question: "How do you add a favicon to a Next.js application?",
    options: [
      "By placing it in the public folder",
      "By importing it in _app.js",
      "By using next/favicon",
      "By adding it in next.config.js",
    ],
    answer: "By placing it in the public folder",
  },
  {
    question: "How do you handle authentication in Next.js?",
    options: [
      "By using `next-auth`",
      "By creating custom API routes for authentication",
      "By using Firebase Authentication",
      "All of the above",
    ],
    answer: "All of the above",
  },
  {
    question: "What is the role of `pages/_document.js` in Next.js?",
    options: [
      "To customize the initial HTML document structure",
      "To add custom CSS to the application",
      "To define routes",
      "To configure server-side rendering",
    ],
    answer: "To customize the initial HTML document structure",
  },
  {
    question: "What is the default value of `fallback` in `getStaticPaths`?",
    options: ["true", "false", "blocking", "no-fallback"],
    answer: "false",
  },
  {
    question: "How do you implement dynamic routing in Next.js?",
    options: [
      "By creating files with square brackets",
      "By using React Router",
      "By using HashRouter",
      "By adding routes manually in next.config.js",
    ],
    answer: "By creating files with square brackets",
  },
  {
    question: "Which of the following is true about `getStaticProps`?",
    options: [
      "It is used to fetch data at build time",
      "It is used to fetch data on every request",
      "It is used to handle client-side data fetching",
      "It cannot be used in Next.js",
    ],
    answer: "It is used to fetch data at build time",
  },
  {
    question:
      "Which file is responsible for custom app-level configuration in Next.js?",
    options: ["_app.js", "_document.js", "next.config.js", "index.js"],
    answer: "_app.js",
  },
  {
    question: "What is the default value of `revalidate` in `getStaticProps`?",
    options: ["false", "true", "3600", "86400"],
    answer: "false",
  },
  {
    question: "What is the role of `next/image` component?",
    options: [
      "Optimizes images automatically",
      "Handles client-side image rendering",
      "Creates image compression",
      "Manages image file size",
    ],
    answer: "Optimizes images automatically",
  },
  {
    question:
      "Which of the following methods can be used to add custom error pages in Next.js?",
    options: [
      "By creating a custom _error.js file",
      "By using `next/error`",
      "By using a custom ErrorBoundary",
      "By modifying next.config.js",
    ],
    answer: "By creating a custom _error.js file",
  },
  {
    question:
      "What is the difference between `getServerSideProps` and `getStaticProps`?",
    options: [
      "getServerSideProps runs on every request, getStaticProps runs at build time",
      "getServerSideProps is used for static data, getStaticProps is used for dynamic data",
      "getServerSideProps can only be used for server-side rendering, getStaticProps cannot",
      "getServerSideProps is used for client-side rendering",
    ],
    answer:
      "getServerSideProps runs on every request, getStaticProps runs at build time",
  },
  {
    question: "Which method allows you to create dynamic routes in Next.js?",
    options: [
      "getStaticPaths",
      "getServerSideProps",
      "useRouter",
      "next/dynamic",
    ],
    answer: "getStaticPaths",
  },
  {
    question: "What is the role of `pages/api` in Next.js?",
    options: [
      "It contains serverless functions",
      "It handles the routing of static pages",
      "It defines the global layout for the app",
      "It manages client-side API calls",
    ],
    answer: "It contains serverless functions",
  },
  {
    question: "How can you implement authentication in Next.js?",
    options: [
      "By using NextAuth.js",
      "By creating custom authentication routes",
      "By using Firebase authentication",
      "All of the above",
    ],
    answer: "All of the above",
  },
  {
    question: "How can you add custom error pages in Next.js?",
    options: [
      "By creating a _error.js file",
      "By modifying the next.config.js file",
      "By using a custom ErrorBoundary component",
      "By adding an error page in the public folder",
    ],
    answer: "By creating a _error.js file",
  },
  {
    question:
      "Which file in Next.js is used to customize the initial HTML document structure?",
    options: ["_document.js", "_app.js", "index.js", "next.config.js"],
    answer: "_document.js",
  },
  {
    question: "What is the purpose of `next/dynamic`?",
    options: [
      "To dynamically import components",
      "To handle server-side rendering",
      "To manage dynamic routes",
      "To add dynamic styling",
    ],
    answer: "To dynamically import components",
  },
  {
    question: "How do you add environment variables in Next.js?",
    options: [
      "By creating a .env.local file",
      "By adding them in next.config.js",
      "By using process.env",
      "By storing them in the public directory",
    ],
    answer: "By creating a .env.local file",
  },
  {
    question: "What is the role of `getInitialProps` in Next.js?",
    options: [
      "It is used to fetch data before rendering a page",
      "It is used for server-side rendering only",
      "It is used for handling client-side navigation",
      "It is used to manage the global state of the app",
    ],
    answer: "It is used to fetch data before rendering a page",
  },
  {
    question:
      "Which component is used for adding custom app-level configuration in Next.js?",
    options: ["_app.js", "_document.js", "index.js", "next.config.js"],
    answer: "_app.js",
  },
  {
    question: "Which Next.js feature helps with image optimization?",
    options: ["next/image", "next/optimize", "next/img", "next/static"],
    answer: "next/image",
  },
  {
    question: "How can you handle redirects in Next.js?",
    options: [
      "By using the `next.config.js` file",
      "By using `useRouter` hook",
      "By using `getServerSideProps`",
      "By using `getStaticProps`",
    ],
    answer: "By using the `next.config.js` file",
  },
  {
    question:
      "Which method is used to enable incremental static regeneration in Next.js?",
    options: ["Revalidate", "Rebuild", "Regenerate", "Static"],
    answer: "Revalidate",
  },
  {
    question: "How do you deploy a Next.js application?",
    options: [
      "By using Vercel",
      "By using AWS",
      "By using Netlify",
      "All of the above",
    ],
    answer: "All of the above",
  },
  {
    question: "What is the purpose of the `next export` command in Next.js?",
    options: [
      "To generate a static version of the site",
      "To optimize images",
      "To bundle the application for production",
      "To deploy the app to a server",
    ],
    answer: "To generate a static version of the site",
  },
  {
    question: "What is the default static file directory in Next.js?",
    options: ["public", "static", "assets", "files"],
    answer: "public",
  },
  {
    question: "Which hook is used for routing in Next.js?",
    options: ["useRouter", "useHistory", "useNavigate", "useRoute"],
    answer: "useRouter",
  },
  {
    question:
      "Which of the following is used for server-side rendering in Next.js?",
    options: [
      "getServerSideProps",
      "getStaticProps",
      "getInitialProps",
      "All of the above",
    ],
    answer: "getServerSideProps",
  },
  {
    question: "How can you add custom metadata in the `<head>` tag in Next.js?",
    options: [
      "By using the `Head` component from `next/head`",
      "By modifying the _document.js file",
      "By adding metadata directly in the page component",
      "By using a custom layout",
    ],
    answer: "By using the `Head` component from `next/head`",
  },
  {
    question: "What does the `next/image` component do in Next.js?",
    options: [
      "Optimizes images for faster loading",
      "Compresses images",
      "Displays images from an external source",
      "All of the above",
    ],
    answer: "Optimizes images for faster loading",
  },
  {
    question: "Which method allows you to add custom routes in Next.js?",
    options: [
      "By modifying the `next.config.js` file",
      "By using the `pages` directory",
      "By creating custom routing components",
      "By using `useRouter`",
    ],
    answer: "By modifying the `next.config.js` file",
  },
];


const basicNextJsQuestions = [
  {
    question: "What is Next.js?",
    options: [
      "A React framework for building static and dynamic websites",
      "A JavaScript library for building user interfaces",
      "A CSS framework for responsive design",
      "A Node.js package for server-side rendering"
    ],
    answer: "A React framework for building static and dynamic websites",
  },
  {
    question: "What does SSR stand for in Next.js?",
    options: [
      "Static Site Rendering",
      "Server Side Rendering",
      "Single Page Rendering",
      "Simple Server Routing"
    ],
    answer: "Server Side Rendering",
  },
  {
    question: "Which method in Next.js is used for pre-rendering a page at build time?",
    options: [
      "getServerSideProps",
      "getStaticProps",
      "getInitialProps",
      "useEffect"
    ],
    answer: "getStaticProps",
  },
  {
    question: "What is the purpose of the `pages` directory in Next.js?",
    options: [
      "It stores the app's static files",
      "It contains components and logic for pages",
      "It holds the routing logic of the application",
      "It stores global state management logic"
    ],
    answer: "It contains components and logic for pages",
  },
  {
    question: "What is the default port number for a Next.js application?",
    options: [
      "3000",
      "5000",
      "8080",
      "4000"
    ],
    answer: "3000",
  },
  {
    question: "How do you define dynamic routes in Next.js?",
    options: [
      "By using the `pages` directory with dynamic filenames",
      "By using the `useRouter` hook",
      "By creating a custom route file",
      "By modifying the `next.config.js` file"
    ],
    answer: "By using the `pages` directory with dynamic filenames",
  },
  {
    question: "What is the purpose of the `_app.js` file in Next.js?",
    options: [
      "It customizes the global layout and state of the application",
      "It defines the static pages of the app",
      "It configures the server-side rendering settings",
      "It handles routing and navigation"
    ],
    answer: "It customizes the global layout and state of the application",
  },
  {
    question: "Which of the following is used for dynamic imports in Next.js?",
    options: [
      "next/dynamic",
      "useEffect",
      "useState",
      "next/async"
    ],
    answer: "next/dynamic",
  },
  {
    question: "Which command is used to create a new Next.js project?",
    options: [
      "npx create-next-app",
      "npm init next-app",
      "create-next-app",
      "next create"
    ],
    answer: "npx create-next-app",
  },
  {
    question: "How do you deploy a Next.js app?",
    options: [
      "By using Vercel",
      "By using GitHub Pages",
      "By using AWS S3",
      "By using Firebase Hosting"
    ],
    answer: "By using Vercel",
  },
  {
    question: "What is the default behavior of Next.js for static files?",
    options: [
      "Static files are served from the `public` directory",
      "Static files are bundled with the app",
      "Static files are stored in the `src` directory",
      "Static files are not supported"
    ],
    answer: "Static files are served from the `public` directory",
  },
  {
    question: "Which hook is used to handle routing in Next.js?",
    options: [
      "useRouter",
      "useHistory",
      "useNavigate",
      "useRoute"
    ],
    answer: "useRouter",
  },
  {
    question: "What does the `getStaticProps` method do in Next.js?",
    options: [
      "Fetches data at build time for static generation",
      "Fetches data on every request for server-side rendering",
      "Sets up the global state for the application",
      "Manages routing logic"
    ],
    answer: "Fetches data at build time for static generation",
  },
  {
    question: "How do you handle client-side routing in Next.js?",
    options: [
      "By using the `Link` component from `next/link`",
      "By using the `Router` component",
      "By using the `useRouter` hook",
      "By modifying the `next.config.js` file"
    ],
    answer: "By using the `Link` component from `next/link`",
  },
  {
    question: "What does the `next/image` component do?",
    options: [
      "Optimizes and serves images with automatic resizing",
      "Displays images from an external source",
      "Converts images to a specific format",
      "Preloads images for faster loading"
    ],
    answer: "Optimizes and serves images with automatic resizing",
  },
  {
    question: "Which method is used for static file handling in Next.js?",
    options: [
      "By placing them in the `public` directory",
      "By adding them to the `static` directory",
      "By using the `next/static` package",
      "By uploading them to a CDN"
    ],
    answer: "By placing them in the `public` directory",
  },
  {
    question: "What is the purpose of the `next/head` component?",
    options: [
      "It allows you to add metadata and elements to the head of the HTML document",
      "It defines the layout for the header section of the app",
      "It provides a global header for all pages",
      "It manages the routing of header links"
    ],
    answer: "It allows you to add metadata and elements to the head of the HTML document",
  },
  {
    question: "How can you enable CSS support in Next.js?",
    options: [
      "By installing the `@next/css` package",
      "By importing CSS files directly in components",
      "By using styled-components only",
      "By adding the CSS in the `next.config.js` file"
    ],
    answer: "By importing CSS files directly in components",
  },
  {
    question: "How can you create API routes in Next.js?",
    options: [
      "By creating files inside the `pages/api` directory",
      "By using `next/api` module",
      "By creating a `server.js` file",
      "By modifying `next.config.js`"
    ],
    answer: "By creating files inside the `pages/api` directory",
  },
  {
    question: "Which of the following is a method for server-side rendering in Next.js?",
    options: [
      "getServerSideProps",
      "getStaticProps",
      "getInitialProps",
      "All of the above"
    ],
    answer: "getServerSideProps",
  },
  {
    question: "What is the default method of rendering in Next.js?",
    options: [
      "Static Site Generation (SSG)",
      "Server-Side Rendering (SSR)",
      "Client-Side Rendering (CSR)",
      "Incremental Static Regeneration (ISR)"
    ],
    answer: "Static Site Generation (SSG)",
  },
  {
    question: "Which Next.js feature allows you to pre-render a page at build time?",
    options: [
      "getServerSideProps",
      "getStaticProps",
      "getInitialProps",
      "getStaticPaths"
    ],
    answer: "getStaticProps",
  },
  {
    question: "Which function is used to fetch data at request time in Next.js?",
    options: [
      "getStaticProps",
      "getServerSideProps",
      "getInitialProps",
      "getStaticPaths"
    ],
    answer: "getServerSideProps",
  },
  {
    question: "Which file is used to configure global styles in Next.js?",
    options: [
      "styles/global.css",
      "pages/_app.js",
      "pages/_document.js",
      "next.config.js"
    ],
    answer: "pages/_app.js",
  },

];

//   {
//     question: "Which feature of Next.js allows pages to be updated without rebuilding the entire site?",
//     options: [
//       "Static Site Generation (SSG)",
//       "Incremental Static Regeneration (ISR)",
//       "Server-Side Rendering (SSR)",
//       "Dynamic Imports"
//     ],
//     answer: "Incremental Static Regeneration (ISR)",
//   },
//   {
//     question: "How do you create dynamic routes in Next.js?",
//     options: [
//       "By creating files with dynamic segment names like `[slug].js`",
//       "By using `getStaticPaths` and `getStaticProps`",
//       "By using `getServerSideProps`",
//       "By using query parameters in `pages/index.js`"
//     ],
//     answer: "By creating files with dynamic segment names like `[slug].js`",
//   },
//   {
//     question: "What is the purpose of `getStaticPaths` in Next.js?",
//     options: [
//       "To specify which paths need to be statically generated",
//       "To fetch data for a page before rendering",
//       "To enable server-side rendering",
//       "To configure the router for dynamic pages"
//     ],
//     answer: "To specify which paths need to be statically generated",
//   },
//   {
//     question: "Which file in Next.js allows you to customize the document structure of the page?",
//     options: [
//       "pages/_app.js",
//       "pages/_document.js",
//       "next.config.js",
//       "public/index.html"
//     ],
//     answer: "pages/_document.js",
//   },
//   {
//     question: "Which of the following can be used for API routes in Next.js?",
//     options: [
//       "pages/api/*",
//       "pages/endpoint/*",
//       "public/api/*",
//       "next/api/*"
//     ],
//     answer: "pages/api/*",
//   },
//   {
//     question: "What is the purpose of `getInitialProps` in Next.js?",
//     options: [
//       "To fetch data before the page is rendered on the server",
//       "To manage routing for dynamic pages",
//       "To handle page-specific styles",
//       "To initialize global state for the app"
//     ],
//     answer: "To fetch data before the page is rendered on the server",
//   },
//   {
//     question: "Which method does Next.js use to pre-render pages for better SEO?",
//     options: [
//       "Static Site Generation (SSG)",
//       "Server-Side Rendering (SSR)",
//       "Client-Side Rendering (CSR)",
//       "All of the above"
//     ],
//     answer: "Static Site Generation (SSG)",
//   },
//   {
//     question: "How do you define global CSS styles in Next.js?",
//     options: [
//       "By importing the CSS file in `pages/_app.js`",
//       "By adding CSS rules directly in `next.config.js`",
//       "By using `next/css` package",
//       "By including the CSS file in `public` directory"
//     ],
//     answer: "By importing the CSS file in `pages/_app.js`",
//   },
