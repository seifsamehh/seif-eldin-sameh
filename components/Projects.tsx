"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import localFont from "next/font/local";
import Link from "next/link";

// Font files can be colocated inside of `app`
const Franchise = localFont({
  src: "../public/fonts/Franchise-Free-Bold.ttf",
  display: "swap",
});

gsap.registerPlugin(ScrollTrigger);
export default function Projects() {
  useGSAP(() => {
    const text = document.querySelector(".text .projects-text-inner");
    const shape = document.querySelector(".shape .rotate");

    const tl = gsap.timeline({ paused: true });

    tl.to(shape, {
      duration: 1,
      scale: "30", // Convert number to string
      rotate: "240", // Convert number to string
      ease: "Expo.easeIn",
      force3D: true,
    }).to(
      text,
      {
        opacity: 1,
        duration: 1,
        translateX: "0", // Convert number to string
        ease: "Power2.easeIn",
        force3D: true,
      },
      0
    );

    window.addEventListener(
      "scroll",
      () => {
        const progress =
          window.scrollY / (document.body.offsetHeight - window.innerHeight);

        tl.progress(progress);

        document.body.style.setProperty(
          "--scroll",
          progress.toString() // Convert number to string
        );
      },
      false
    );
  });
  return (
    <section className="projects min-h-screen min-[290px]:hidden md:block">
      <div className="track">
        <div className="overlay">
          <div className="text">
            <div className={`${Franchise.className} projects-text-inner`}>
              click anywhere to see my projects
            </div>
          </div>
          <div className="shape">
            <div className="scale">
              <div className="rotate">
                <Link
                  href={"/projects"}
                  aria-label="projects"
                  title="see my projects"
                >
                  <div className="img">
                    <svg
                      viewBox="0 0 31 31"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlSpace="preserve"
                    >
                      <path
                        className="hsc-img-path"
                        d="M19.4106 0H11.3105V30.6H19.4106V0Z"
                        fill="currentColor"
                      ></path>
                      <path
                        className="hsc-img-path"
                        d="M19.4106 0H11.3105V30.6H19.4106V0Z"
                        fill="currentColor"
                        fillOpacity="0.2"
                      ></path>
                      <path
                        className="hsc-img-path"
                        d="M30.6001 19.3549V11.2549L9.15527e-05 11.2549V19.3549L30.6001 19.3549Z"
                        fill="currentColor"
                      ></path>
                      <path
                        className="hsc-img-path"
                        d="M30.6001 19.3549V11.2549L9.15527e-05 11.2549V19.3549L30.6001 19.3549Z"
                        fill="currentColor"
                        fillOpacity="0.2"
                      ></path>
                    </svg>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="gradient"></div>
        </div>
      </div>
    </section>
  );
}
