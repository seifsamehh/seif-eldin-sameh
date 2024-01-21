"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import localFont from "next/font/local";
import Link from "next/link";

// Font files can be colocated inside of `app`
const Creattion = localFont({
  src: "../public/fonts/Creattion Demo.otf",
  display: "swap",
});

gsap.registerPlugin(ScrollTrigger);
export default function Quote() {
  useGSAP(() => {
    const text = document.querySelector(".text .quote-text-inner");
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
    <section className="quote min-h-screen">
      <div className="track">
        <div className="overlay">
          <div className="text">
            <div className={`${Creattion.className} quote-text-inner`}>
              <q className="min-[290px]:text-6xl md:text-[10rem]">
                Think twice code once
              </q>
              Seif Eldin Sameh
            </div>
          </div>
          <div className="shape">
            <div className="scale">
              <div className="rotate">
                <Link href={"/"} aria-label="welcome" title="welcome">
                  <div className="img">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 162 162"
                      xmlSpace="preserve"
                    >
                      <path
                        className="hsc-img-path"
                        d="M108 88.7c-10.8 0-19.7 8.8-19.7 19.7v47.4c0 1.9-1.5 3.4-3.4 3.4h-8.6c-1.9 0-3.4-1.5-3.4-3.4v-47.4c0-10.8-8.8-19.7-19.7-19.7H6.4c-1.9 0-3.4-1.5-3.4-3.4v-8c0-1.9 1.5-3.4 3.4-3.4h46.9c10.8 0 19.7-8.8 19.6-19.7V6.4c0-1.9 1.5-3.4 3.4-3.4H85c1.9 0 3.4 1.5 3.4 3.4v47.8c0 10.8 8.8 19.7 19.7 19.7h46.6c1.9 0 3.4 1.5 3.4 3.4v8c0 1.9-1.5 3.4-3.4 3.4H108z"
                        fill="currentColor"
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
