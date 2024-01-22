"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import localFont from "next/font/local";

// Font files can be colocated inside of `app`
const Franchise = localFont({
  src: "../public/fonts/Franchise-Free-Bold.ttf",
  display: "swap",
});

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
  useGSAP(() => {
    gsap.to("#page h1", {
      transform: "translateX(-50%)",
      duration: 1,
      scrollTrigger: {
        trigger: "#page",
        scroller: "body",
        start: "top 0",
        end: "top -200%",
        scrub: 2,
        pin: true,
      },
    });
    gsap.from(".header", {
      opacity: 0,
      y: -50,
      skewX: -10,
      duration: 1,
      stagger: 0.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".header",
        start: "top 80%",
        end: "bottom 0",
        toggleActions: "play none none reverse",
      },
    });
  });
  return (
    <section className="about-page relative overflow-hidden">
      {/* page 1 */}
      <div
        id="page"
        className="min-h-screen overflow-hidden md:flex justify-center items-center min-[290px]:hidden"
      >
        <h1
          className={`${Franchise.className} text-[30vw] font-black uppercase whitespace-nowrap`}
        >
          about me about me about me
        </h1>
      </div>
      <div className="page-sm min-h-[50vh] overflow-hidden min-[290px]:flex justify-center items-center md:hidden">
        <h1
          className={`${Franchise.className} text-[30vw] font-black uppercase whitespace-nowrap`}
        >
          about me
        </h1>
      </div>
      {/* page 2 */}
      <div
        id="page2"
        className="min-h-screen flex items-center flex-col gap-12 min-[290px]:px-4 md:px-0"
      >
        <div className="container">
          <h3
            className={`${Franchise.className} header text-7xl text-[#00b5e7] min-[290px]:hidden md:block`}
          >
            professional web developer dedicated to excellence
          </h3>
          <h3
            className={`${Franchise.className} text-7xl text-[#00b5e7] md:hidden min-[290px]:block`}
          >
            professional web developer dedicated to excellence
          </h3>
          <p className="text-2xl mt-6">
            Welcome to my corner of the internet! I&apos;m Seif Eldin Sameh, a
            seasoned MERN stack web developer with over 3 years of hands-on
            experience in crafting dynamic and user-centric digital experiences.
            My passion for turning innovative ideas into functional,
            aesthetically pleasing websites drives my commitment to excellence
            in every project.
          </p>
        </div>
        <div className="container">
          <h3
            className={`${Franchise.className} header text-7xl text-[#00b5e7] min-[290px]:hidden md:block`}
          >
            why choose me?
          </h3>
          <h3
            className={`${Franchise.className} text-7xl text-[#00b5e7] md:hidden min-[290px]:block`}
          >
            why choose me?
          </h3>
          <ul className="text-2xl mt-6">
            <li>
              <span className={`${Franchise.className} font-bold text-4xl`}>
                MERN stack expertise:
              </span>{" "}
              Specializing in MongoDB, Express.js, Nest.js, React.js, Next.js
              and Node.js, I bring a comprehensive skill set to the table,
              ensuring end-to-end development proficiency.
            </li>
            <li className="my-4">
              <span className={`${Franchise.className} font-bold text-4xl`}>
                Full-Stack Proficiency:
              </span>{" "}
              From pixel-perfect front-end designs to robust back-end solutions,
              I thrive in the dynamic realm of full-stack development.
            </li>
            <li>
              <span className={`${Franchise.className} font-bold text-4xl`}>
                Innovative Problem Solver:
              </span>{" "}
              I approach coding challenges with an innovative mindset,
              consistently finding elegant solutions that deliver exceptional
              user experiences.
            </li>
          </ul>
        </div>
        <div className="container">
          <h3
            className={`${Franchise.className} header text-7xl text-[#00b5e7] min-[290px]:hidden md:block`}
          >
            what sets me apart?
          </h3>
          <h3
            className={`${Franchise.className} text-7xl text-[#00b5e7] md:hidden min-[290px]:block`}
          >
            what sets me apart?
          </h3>
          <p className="text-2xl mt-6">
            With a Computer Science degree and a track record of successful
            project management, I bring a blend of technical expertise and
            strategic thinking to each collaboration. I&apos;ve had the
            privilege of contributing to diverse projects, ranging from
            e-commerce platforms to interactive web applications.
          </p>
        </div>
      </div>
      <svg
        className="w-60 h-60 absolute bottom-10 right-16 min-[290px]:mix-blend-multiply md:mix-blend-color-dodge"
        viewBox="0 0 53 53"
        fill="#00b5e7"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M39.4 2L26.9 14.5L14.4 2L2 14.4L14.5 26.9L2 39.4L14.4 51.8L26.9 39.3L39.4 51.8L51.8 39.4L39.3 26.9L51.8 14.4L39.4 2Z"
          stroke="currentColor"
          strokeWidth="1.5882"
          strokeMiterlimit="10"
        ></path>
        <path
          d="M39.4 2L26.9 14.5L14.4 2L2 14.4L14.5 26.9L2 39.4L14.4 51.8L26.9 39.3L39.4 51.8L51.8 39.4L39.3 26.9L51.8 14.4L39.4 2Z"
          stroke="currentColor"
          strokeOpacity="0.2"
          strokeWidth="1.5882"
          strokeMiterlimit="10"
        ></path>
      </svg>
    </section>
  );
}
