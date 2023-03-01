import Link from "next/link";
import Image from "next/image";
import logo from "../assests/images/logoBlack.webp";
import image1 from "../assests/images/image1.webp";
import image2 from "../assests/images/image2.webp";
import image3 from "../assests/images/image3.webp";
import image4 from "../assests/images/image4.webp";
import image5 from "../assests/images/image5.webp";
import image6 from "../assests/images/image6.webp";
import styles from "../main.module.css";
import { Playfair_Display } from "@next/font/google";

const playfair = Playfair_Display({
  display: "swap",
  weight: ["800"],
  subsets: ["latin"],
});

export default function About() {
  return (
    <>
      <main>
        {/* start about content */}
        <section className="about">
          <div
            className={`${styles.aboutContent} flex justify-center items-center gap-6`}
          >
            <div className={`${styles.left}`}>
              <h1 className={`${playfair.className} dark:text-white text-7xl`}>
                ABOUT ME
              </h1>
              <p className="my-8 leading-10 dark:text-white">
                As a Front-end Developer, I bring expertise in designing and
                developing the user-facing aspect of web applications. I
                collaborate with designers and back-end developers to craft
                visually appealing and interactive user interfaces. My strong
                proficiency in HTML, CSS, and JavaScript allows me to create
                responsive and dynamic web pages. Furthermore, I have hands-on
                experience with React.js, enabling me to build complex user
                interfaces. My skill set also encompasses cross-browser
                compatibility issues, debugging, problem-solving abilities, and
                a deep understanding of user experience and accessibility.
              </p>
              <Link href="/cv.pdf" download="cv" target="_blank">
                <button className={`${styles.button} ${styles.btnShine}`}>
                  <span>Download Resume</span>
                </button>
              </Link>
            </div>
            <div className={`${styles.right} w-full`}></div>
          </div>
        </section>
        {/* end about content */}
        {/* start skills */}
        <section className="skills">
          <h1
            className={`${playfair.className} text-center text-7xl dark:text-white my-12`}
          >
            MY SKILLS
          </h1>
          <div className="skills-box">
            {/* start skill 1 */}
            <div className="flex items-center justify-center gap-8 sm:h-full md:h-screen skill1 md:pr-12">
              <div className="w-full left">
                <h2 className={`${playfair.className}`}>HTML</h2>
              </div>
              <div className="w-full right">
                <p className="leading-10 min-[290px]:pl-6 md:pl-0">
                  The HyperText Markup Language or HTML is the standard markup
                  language for documents designed to be displayed in a web
                  browser. It is frequently assisted by technologies such as
                  Cascading Style Sheets and scripting languages such as
                  JavaScript.
                </p>
              </div>
            </div>
            {/* end skill 1 */}
            {/* start skill 2 */}
            <div className="flex items-center justify-center gap-8 md:h-screen skill2 md:pr-12">
              <div className="w-full left">
                <h2 className={`${playfair.className}`}>CSS</h2>
              </div>
              <div className="w-full right">
                <p className="leading-10 min-[290px]:pl-6 md:pl-0">
                  Cascading Style Sheets is a style sheet language used for
                  describing the presentation of a document written in a markup
                  language such as HTML or XML. CSS is a cornerstone technology
                  of the World Wide Web, alongside HTML and JavaScript.
                </p>
              </div>
            </div>
            {/* end skill 2 */}
            {/* start skill 3 */}
            <div className="flex items-center justify-center gap-8 md:h-screen skill3 md:pr-12">
              <div className="w-full left">
                <h2 className={`${playfair.className}`}>JAVASCRIPT</h2>
              </div>
              <div className="w-full right">
                <p className="leading-10 min-[290px]:pl-6 md:pl-0">
                  JavaScript, often abbreviated as JS, is a programming language
                  that is one of the core technologies of the World Wide Web,
                  alongside HTML and CSS. As of 2022, 98% of websites use
                  JavaScript on the client side for webpage behavior, often
                  incorporating third-party libraries.
                </p>
              </div>
            </div>
            {/* end skill 3 */}
            {/* start skill 4 */}
            <div className="flex items-center justify-center gap-8 md:h-screen skill4 md:pr-12">
              <div className="w-full left">
                <h2 className={`${playfair.className}`}>JQUERY</h2>
              </div>
              <div className="w-full right">
                <p className="leading-10 min-[290px]:pl-6 md:pl-0">
                  jQuery is a JavaScript library designed to simplify HTML DOM
                  tree traversal and manipulation, as well as event handling,
                  CSS animation, and Ajax. It is free, open-source software
                  using the permissive MIT License. As of Aug 2022, jQuery is
                  used by 77% of the 10 million most popular websites.
                </p>
              </div>
            </div>
            {/* end skill 4 */}
            {/* start skill 5 */}
            <div className="flex items-center justify-center gap-8 md:h-screen skill5 md:pr-12">
              <div className="w-full left">
                <h2 className={`${playfair.className}`}>AJAX</h2>
              </div>
              <div className="w-full right">
                <p className="leading-10 min-[290px]:pl-6 md:pl-0">
                  Ajax is a set of web development techniques that uses various
                  web technologies on the client-side to create asynchronous web
                  applications. With Ajax, web applications can send and
                  retrieve data from a server asynchronously without interfering
                  with the display and behaviour of the existing page.
                </p>
              </div>
            </div>
            {/* end skill 5 */}
            {/* start skill 6 */}
            <div className="flex items-center justify-center gap-8 md:h-screen skill6 md:pr-12">
              <div className="w-full left">
                <h2 className={`${playfair.className}`}>JSON</h2>
              </div>
              <div className="w-full right">
                <p className="leading-10 min-[290px]:pl-6 md:pl-0">
                  JSON is an open standard file format and data interchange
                  format that uses human-readable text to store and transmit
                  data objects consisting of attribute–value pairs and arrays.
                  It is a common data format with diverse uses in electronic
                  data interchange, including that of web applications with
                  servers.
                </p>
              </div>
            </div>
            {/* end skill 6 */}
            {/* start skill 7 */}
            <div className="flex items-center justify-center gap-8 md:h-screen skill7 md:pr-12">
              <div className="w-full left">
                <h2 className={`${playfair.className}`}>SCSS</h2>
              </div>
              <div className="w-full right">
                <p className="leading-10 min-[290px]:pl-6 md:pl-0">
                  Sass is a preprocessor scripting language that is interpreted
                  or compiled into Cascading Style Sheets. SassScript is the
                  scripting language itself. Sass consists of two syntaxes. The
                  original syntax, called the indented syntax, uses a syntax
                  similar to Haml.
                </p>
              </div>
            </div>
            {/* end skill 7 */}
            {/* start skill 8 */}
            <div className="flex items-center justify-center gap-8 md:h-screen skill8 md:pr-12">
              <div className="w-full left">
                <h2 className={`${playfair.className}`}>BOOTSTRAP</h2>
              </div>
              <div className="w-full right">
                <p className="leading-10 min-[290px]:pl-6 md:pl-0">
                  Bootstrap is a free and open-source CSS framework directed at
                  responsive, mobile-first front-end web development. It
                  contains HTML, CSS and JavaScript-based design templates for
                  typography, forms, buttons, navigation, and other interface
                  components.
                </p>
              </div>
            </div>
            {/* end skill 8 */}
            {/* start skill 9 */}
            <div className="flex items-center justify-center gap-8 md:h-screen skill9 md:pr-12">
              <div className="w-full left">
                <h2 className={`${playfair.className}`}>TAILWIND CSS</h2>
              </div>
              <div className="w-full right">
                <p className="leading-10 min-[290px]:pl-6 md:pl-0">
                  Tailwind CSS is an open source CSS framework. The main feature
                  of this library is that, unlike other CSS frameworks like
                  Bootstrap, it does not provide a series of predefined classes
                  for elements such as buttons or tables.
                </p>
              </div>
            </div>
            {/* end skill 9 */}
            {/* start skill 10 */}
            <div className="flex items-center justify-center gap-8 md:h-screen skill10 md:pr-12">
              <div className="w-full left">
                <h2 className={`${playfair.className}`}>GULP JS</h2>
              </div>
              <div className="w-full right">
                <p className="leading-10 min-[290px]:pl-6 md:pl-0">
                  gulp is an open-source JavaScript toolkit created by Eric
                  Schoffstall used as a streaming build system in front-end web
                  development.
                </p>
              </div>
            </div>
            {/* end skill 10 */}
            {/* start skill 11 */}
            <div className="flex items-center justify-center gap-8 md:h-screen skill11 md:pr-12">
              <div className="w-full left">
                <h2 className={`${playfair.className}`}>JEST</h2>
              </div>
              <div className="w-full right">
                <p className="leading-10 min-[290px]:pl-6 md:pl-0">
                  Jest is a JavaScript testing framework built on top of Jasmine
                  and maintained by Meta. It was designed and built by Christoph
                  Nakazawa with a focus on simplicity and support for large web
                  applications. It works with projects using Babel, TypeScript,
                  Node.js, React, Angular, Vue.js and Svelte
                </p>
              </div>
            </div>
            {/* end skill 11 */}
            {/* start skill 12 */}
            <div className="flex items-center justify-center gap-8 md:h-screen skill12 md:pr-12">
              <div className="w-full left">
                <h2 className={`${playfair.className}`}>NPM</h2>
              </div>
              <div className="w-full right">
                <p className="leading-10 min-[290px]:pl-6 md:pl-0">
                  npm is a package manager for the JavaScript programming
                  language maintained by npm, Inc. npm is the default package
                  manager for the JavaScript runtime environment Node.js. It
                  consists of a command line client, also called npm, and an
                  online database of public and paid-for private packages,
                  called the npm registry.
                </p>
              </div>
            </div>
            {/* end skill 12 */}
            {/* start skill 13 */}
            <div className="flex items-center justify-center gap-8 md:h-screen skill13 md:pr-12">
              <div className="w-full left">
                <h2 className={`${playfair.className}`}>REACT JS</h2>
              </div>
              <div className="w-full right">
                <p className="leading-10 min-[290px]:pl-6 md:pl-0">
                  React is a free and open-source front-end JavaScript library
                  for building user interfaces based on components. It is
                  maintained by Meta and a community of individual developers
                  and companies.
                </p>
              </div>
            </div>
            {/* end skill 13 */}
            {/* start skill 14 */}
            <div className="flex items-center justify-center gap-8 md:h-screen skill14 md:pr-12">
              <div className="w-full left">
                <h2 className={`${playfair.className}`}>NEXT JS</h2>
              </div>
              <div className="w-full right">
                <p className="leading-10 min-[290px]:pl-6 md:pl-0">
                  Next.js is an open-source web development framework created by
                  Vercel enabling React-based web applications with server-side
                  rendering and generating static websites.
                </p>
              </div>
            </div>
            {/* end skill 14 */}
            {/* start skill 15 */}
            <div className="flex items-center justify-center gap-8 md:h-screen skill15 md:pr-12">
              <div className="w-full left">
                <h2 className={`${playfair.className}`}>MATERIAL UI</h2>
              </div>
              <div className="w-full right">
                <p className="leading-10 min-[290px]:pl-6 md:pl-0">
                  MUI offers a comprehensive suite of UI tools to help you ship
                  new features faster. Start with Material UI, our fully-loaded
                  component library, or bring your own design system to our
                  production-ready components.
                </p>
              </div>
            </div>
            {/* end skill 15 */}
            {/* start skill 16 */}
            <div className="flex items-center justify-center gap-8 md:h-screen skill16 md:pr-12">
              <div className="w-full left">
                <h2 className={`${playfair.className}`}>SPLINE</h2>
              </div>
              <div className="w-full right">
                <p className="leading-10 min-[290px]:pl-6 md:pl-0">
                  Spline is a free, real-time collaborative 3D design tool to
                  create interactive experiences within the browser.
                </p>
              </div>
            </div>
            {/* end skill 16 */}
            {/* start skill 17 */}
            <div className="flex items-center justify-center gap-8 md:h-screen skill17 md:pr-12">
              <div className="w-full left">
                <h2 className={`${playfair.className}`}>WEBPACK</h2>
              </div>
              <div className="w-full right">
                <p className="leading-10 min-[290px]:pl-6 md:pl-0">
                  Webpack is a free and open-source module bundler for
                  JavaScript. It is made primarily for JavaScript, but it can
                  transform front-end assets such as HTML, CSS, and images if
                  the corresponding loaders are included. Webpack takes modules
                  with dependencies and generates static assets representing
                  those modules.
                </p>
              </div>
            </div>
            {/* end skill 17 */}
            {/* start skill 18 */}
            <div className="flex items-center justify-center gap-8 md:h-screen skill18 md:pr-12">
              <div className="w-full left">
                <h2 className={`${playfair.className} `}>GIT</h2>
              </div>
              <div className="w-full right">
                <p className="leading-10 min-[290px]:pl-6 md:pl-0">
                  Git is a distributed version control system that tracks
                  changes in any set of computer files, usually used for
                  coordinating work among programmers collaboratively developing
                  source code during software development. Its goals include
                  speed, data integrity, and support for distributed, non-linear
                  workflows.
                </p>
              </div>
            </div>
            {/* end skill 18 */}
            {/* start skill 19 */}
            <div className="flex items-center justify-center gap-8 md:h-screen skill19 md:pr-12">
              <div className="w-full left">
                <h2 className={`${playfair.className}`}>GITHUB</h2>
              </div>
              <div className="w-full right">
                <p className="leading-10 min-[290px]:pl-6 md:pl-0">
                  GitHub, Inc. is an Internet hosting service for software
                  development and version control using Git. It provides the
                  distributed version control of Git plus access control, bug
                  tracking, software feature requests, task management,
                  continuous integration, and wikis for every project.
                </p>
              </div>
            </div>
            {/* end skill 19 */}
            {/* start skill 20 */}
            <div className="flex items-center justify-center gap-8 md:h-screen skill20 md:pr-12">
              <div className="w-full left">
                <h2 className={`${playfair.className}`}>Node.js</h2>
              </div>
              <div className="w-full right">
                <p className="leading-10 min-[290px]:pl-6 md:pl-0">
                  Node.js is a cross-platform, open-source server environment
                  that can run on Windows, Linux, Unix, macOS, and more. Node.js
                  is a back-end JavaScript runtime environment, runs on the V8
                  JavaScript Engine, and executes JavaScript code outside a web
                  browser.
                </p>
              </div>
            </div>
            {/* end skill 20 */}
            {/* start skill 21 */}
            <div className="flex items-center justify-center gap-8 md:h-screen skill21 md:pr-12">
              <div className="w-full left">
                <h2 className={`${playfair.className}`}>Express.js</h2>
              </div>
              <div className="w-full right">
                <p className="leading-10 min-[290px]:pl-6 md:pl-0">
                  Express.js, or simply Express, is a back end web application
                  framework for building RESTful APIs with Node.js, released as
                  free and open-source software under the MIT License. It is
                  designed for building web applications and APIs. It has been
                  called the de facto standard server framework for Node.js.
                </p>
              </div>
            </div>
            {/* end skill 21 */}
            {/* start skill 22 */}
            <div className="flex items-center justify-center gap-8 md:h-screen skill22 md:pr-12">
              <div className="w-full left">
                <h2 className={`${playfair.className}`}>MongoDB</h2>
              </div>
              <div className="w-full right">
                <p className="leading-10 min-[290px]:pl-6 md:pl-0">
                  MongoDB is a source-available cross-platform document-oriented
                  database program. Classified as a NoSQL database program,
                  MongoDB uses JSON-like documents with optional schemas.
                  MongoDB is developed by MongoDB Inc. and licensed under the
                  Server Side Public License which is deemed non-free by several
                  distributions.
                </p>
              </div>
            </div>
            {/* end skill 22 */}
            {/* start skill 23 */}
            <div className="flex items-center justify-center gap-8 md:h-screen skill23 md:pr-12">
              <div className="w-full left">
                <h2 className={`${playfair.className}`}>JWT</h2>
              </div>
              <div className="w-full right">
                <p className="leading-10 min-[290px]:pl-6 md:pl-0">
                  JSON Web Token is a proposed Internet standard for creating
                  data with optional signature and/or optional encryption whose
                  payload holds JSON that asserts some number of claims. The
                  tokens are signed either using a private secret or a
                  public/private key.
                </p>
              </div>
            </div>
            {/* end skill 23 */}
          </div>
        </section>
        {/* end skills */}
        {/* start gallery */}
        <section className="gallery min-[290px]:hidden md:block">
          <section className="text-white body-font">
            <div className="container flex flex-wrap px-5 py-24 mx-auto">
              <div className="flex flex-wrap w-full mb-20">
                <h1
                  className={`${playfair.className} sm:text-3xl md:text-7xl font-medium title-font text-zinc-900 dark:text-white lg:w-1/3 lg:mb-0 mb-4`}
                >
                  Some Previous Projects
                </h1>
              </div>
              <div className="flex flex-wrap -m-1 md:-m-2">
                <div className="flex flex-wrap w-1/2">
                  <div className="w-1/2 p-1 md:p-2">
                    <Link
                      href="https://www.exceptiondesigns.com/"
                      target="_blank"
                    >
                      <Image
                        src={image1}
                        alt="project 1"
                        className="block object-cover object-center w-full h-full"
                      />
                    </Link>
                  </div>
                  <div className="w-1/2 p-1 md:p-2">
                    <Link href="https://green-army.vercel.app/" target="_blank">
                      <Image
                        src={image2}
                        alt="project 2"
                        className="block object-cover object-center w-full h-full"
                      />
                    </Link>
                  </div>
                  <div className="w-full p-1 md:p-2">
                    <Link href="https://wyre-ten.vercel.app/" target="_blank">
                      <Image
                        src={image3}
                        alt="project 3"
                        className="block object-cover object-center w-full h-full"
                      />
                    </Link>
                  </div>
                </div>
                <div className="flex flex-wrap w-1/2">
                  <div className="w-full p-1 md:p-2">
                    <Link href="https://argor.vercel.app/" target="_blank">
                      <Image
                        src={image4}
                        alt="project 4"
                        className="block object-cover object-center w-full h-full"
                      />
                    </Link>
                  </div>
                  <div className="w-1/2 p-1 md:p-2">
                    <Link
                      href="https://ieee-community.vercel.app/"
                      target="_blank"
                    >
                      <Image
                        src={image5}
                        alt="project 5"
                        className="block object-cover object-center w-full h-full"
                      />
                    </Link>
                  </div>
                  <div className="w-1/2 p-1 md:p-2">
                    <Link
                      href="https://final-touch-interior.vercel.app/"
                      target="_blank"
                    >
                      <Image
                        src={image6}
                        alt="project 6"
                        className="block object-cover object-center w-full h-full"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
        {/* end gallery */}
        {/* start quote */}
        <section className="quote-section">
          <div className="container px-5 py-24 mx-auto">
            <div
              className={`${styles.quote} xl:w-1/2 lg:w-3/4 mx-auto text-center md:p-20 min-[290px]:p-4`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="inline-block w-8 h-8 mb-8 text-sky-900 dark:text-cyan-200"
                viewBox="0 0 975.036 975.036"
              >
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
              </svg>
              <p className="leading-relaxed sm:text-lg md:text-6xl">
                THINK TWICE CODE ONCE
              </p>
              <span className="inline-block w-10 h-1 mt-8 mb-6 rounded bg-sky-900 dark:bg-cyan-200"></span>
              <h2 className="text-sm font-medium tracking-wider text-white title-font">
                SEIF ELDIN SAMEH
              </h2>
              <p className="text-sky-900 dark:text-cyan-200">
                Front End Web Developer
              </p>
            </div>
          </div>
        </section>
        {/* end quote */}
      </main>
      {/* start footer */}
      <footer className="py-6 bg-white dark:bg-zinc-900 ">
        <div className="container flex flex-col items-center px-5 mx-auto sm:flex-row">
          <a className="flex items-center justify-center font-medium title-font md:justify-start text-zinc-900 dark:text-white">
            <Link href="/">
              <Image
                src={logo}
                alt="logo"
                width={100}
                height={100}
                className="dark:bg-white"
                priority
              />
            </Link>
            <span className="ml-3 text-xl">Seif Eldin Sameh</span>
          </a>
          <p className="mt-4 text-sm text-zinc-900 dark:text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-zinc-900 dark:border-white sm:py-2 sm:mt-0">
            &copy; 2023 Seif Eldin Sameh
          </p>
          <span className="inline-flex justify-center mt-4 sm:ml-auto sm:mt-0 sm:justify-start">
            <Link
              href="https://www.facebook.com/seif.sameh.50596/"
              target="_blank"
              className="text-zinc-900 dark:text-white"
            >
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </Link>
            <Link
              href="https://www.instagram.com/mernstackdev_/"
              target="_blank"
              className="ml-3 text-zinc-900 dark:text-white"
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </Link>
            <Link
              href="https://www.linkedin.com/in/seif-sameh-aaa06b217/"
              target="_blank"
              className="ml-3 text-zinc-900 dark:text-white"
            >
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </Link>
            <Link
              href="https://github.com/seifsamehh"
              target="_blank"
              className="ml-3 text-zinc-900 dark:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-github"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
            </Link>
            <Link
              href="tel:+201060865699"
              className="ml-3 text-zinc-900 dark:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-telephone"
                viewBox="0 0 16 16"
              >
                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
              </svg>
            </Link>
            <Link
              href="mailto:seiffsameh00@gmail.com"
              className="ml-3 text-zinc-900 dark:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-envelope"
                viewBox="0 0 16 16"
              >
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
              </svg>
            </Link>
          </span>
        </div>
      </footer>
      {/* end footer */}
    </>
  );
}
