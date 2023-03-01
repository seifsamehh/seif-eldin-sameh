import Link from "next/link";
import Image from "next/image";
import logo from "../assests/images/logoBlack.webp";
import styles from "../main.module.css";
import { Playfair_Display } from "@next/font/google";

const playfair = Playfair_Display({
  display: "swap",
  weight: ["800"],
  subsets: ["latin"],
});

export default function Projects() {
  return (
    <>
      <main>
        {/* start projects title */}
        <section className="projects-title min-[290px]:h-[50vh] md:h-screen flex justify-center items-center">
          <h1
            className={`${playfair.className} text-center min-[290px]:text-5xl md:text-8xl`}
          >
            MY PROJECTS
          </h1>
        </section>
        {/* start project 1 */}
        <section className="project project1 flex items-center gap-8">
          <div className="left w-full"></div>
          <div className="right w-full min-[290px]:ml-4 md:ml-0">
            <h2 className={`${playfair.className} text-6xl`}>BRIEF</h2>
            <p className="dark:text-white leading-10 my-8">
              Exception Designs is a branding company , we offer Brand Strategy,
              Graphic Design,Logo Design, Identity, Packaging, Bourchures,
              Motion Graphics, Website Design, & Web Development.
            </p>
            <Link href="https://www.exceptiondesigns.com/" target="_blank">
              <button className={`${styles.button} ${styles.btnShine}`}>
                <span>PREVIEW</span>
              </button>
            </Link>
          </div>
        </section>
        {/* end project 1 */}
        {/* start project 2 */}
        <section className="project project2 flex items-center gap-8">
          <div className="left w-full"></div>
          <div className="right w-full min-[290px]:ml-4 md:ml-0">
            <h2 className={`${playfair.className} text-6xl`}>BRIEF</h2>
            <p className="dark:text-white leading-10 my-8">
              Climate change is expected to exacerbate heat-related extremes
              that impact human health and environmental and ecological systems.
              The impacts of climate change are already evident in Egypt and
              globally.
            </p>
            <Link href="https://green-army.vercel.app/" target="_blank">
              <button className={`${styles.button} ${styles.btnShine}`}>
                <span>PREVIEW</span>
              </button>
            </Link>
          </div>
        </section>
        {/* end project 2 */}
        {/* start project 3 */}
        <section className="project project3 flex items-center gap-8">
          <div className="left w-full"></div>
          <div className="right w-full min-[290px]:ml-4 md:ml-0">
            <h2 className={`${playfair.className} text-6xl`}>BRIEF</h2>
            <p className="dark:text-white my-8">
              wyre is the crypto stack for the new economy.
            </p>
            <Link href="https://wyre-seifsamehh.vercel.app/" target="_blank">
              <button className={`${styles.button} ${styles.btnShine}`}>
                <span>PREVIEW</span>
              </button>
            </Link>
          </div>
        </section>
        {/* end project 3 */}
        {/* start project 4 */}
        <section className="project project4 flex items-center gap-8">
          <div className="left w-full"></div>
          <div className="right w-full min-[290px]:ml-4 md:ml-0">
            <h2 className={`${playfair.className} text-6xl`}>BRIEF</h2>
            <p className="dark:text-white my-8">
              We are the Golden Link for precious metal.
            </p>
            <Link href="https://argor.vercel.app/" target="_blank">
              <button className={`${styles.button} ${styles.btnShine}`}>
                <span>PREVIEW</span>
              </button>
            </Link>
          </div>
        </section>
        {/* end project 4 */}
        {/* start project 5 */}
        <section className="project project5 flex items-center gap-8">
          <div className="left w-full"></div>
          <div className="right w-full min-[290px]:ml-4 md:ml-0">
            <h2 className={`${playfair.className} text-6xl`}>BRIEF</h2>
            <p className="dark:text-white leading-10 my-8">
              IEEE OSB founded in 2022 by group of computer science students,
              the branch helping and serving students And this will be done
              through events, workshops, sessions and educational activities
              IEEE consists of 2 major branches; Organizing and Technical.
            </p>
            <Link href="https://ieee-community.vercel.app/" target="_blank">
              <button className={`${styles.button} ${styles.btnShine}`}>
                <span>PREVIEW</span>
              </button>
            </Link>
          </div>
        </section>
        {/* end project 5 */}
        {/* start project 6 */}
        <section className="project project6 flex items-center gap-8">
          <div className="left w-full"></div>
          <div className="right w-full min-[290px]:ml-4 md:ml-0">
            <h2 className={`${playfair.className} text-6xl`}>BRIEF</h2>
            <p className="dark:text-white leading-10 my-8">
              The Final Touch team is honored to serve you in all fields
              Architectural design, Interior Design, Landscape and Furniture.
            </p>
            <Link
              href="https://final-touch-interior.vercel.app/"
              target="_blank"
            >
              <button className={`${styles.button} ${styles.btnShine}`}>
                <span>PREVIEW</span>
              </button>
            </Link>
          </div>
        </section>
        {/* end project 6 */}
        {/* start project 7 */}
        <section className="project project7 flex items-center gap-8">
          <div className="left w-full"></div>
          <div className="right w-full min-[290px]:ml-4 md:ml-0">
            <h2 className={`${playfair.className} text-6xl`}>BRIEF</h2>
            <p className="dark:text-white leading-10 my-8">
              Sneakerheads is not just a brand. It is not just a collection.
              Born from the mind of Ali Dawood - we are creating Web 3.0s
              largest sneaker community. One that gives power to the creators
              and the community. Starting with 5000 avatars and 40 distinct
              models, Sneakerheads is a canvas for collaborations, physical and
              digital, bringing real utility to sneaker culture.
            </p>
            <Link
              href="https://sneakers-seifsamehh.vercel.app/"
              target="_blank"
            >
              <button className={`${styles.button} ${styles.btnShine}`}>
                <span>PREVIEW</span>
              </button>
            </Link>
          </div>
        </section>
        {/* end project 7 */}
        {/* start project 8 */}
        <section className="project project8 flex items-center gap-8">
          <div className="left w-full"></div>
          <div className="right w-full min-[290px]:ml-4 md:ml-0">
            <h2 className={`${playfair.className} text-6xl`}>BRIEF</h2>
            <p className="dark:text-white my-8">
              CarrGo is a website that offer car services.
            </p>
            <Link href="https://carr-go.vercel.app/" target="_blank">
              <button className={`${styles.button} ${styles.btnShine}`}>
                <span>PREVIEW</span>
              </button>
            </Link>
          </div>
        </section>
        {/* end project 7 */}
        {/* end projects title */}
      </main>
      {/* start footer */}
      <footer className="bg-white dark:bg-zinc-900 py-6 mt-6">
        <div className="container px-5 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-zinc-900 dark:text-white">
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
          <p className="text-sm text-zinc-900 dark:text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-zinc-900 dark:border-white sm:py-2 sm:mt-0 mt-4">
            &copy; 2023 Seif Eldin Sameh
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
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
