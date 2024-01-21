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
export default function Contact() {
  useGSAP(() => {
    const text = document.querySelector(".text .contact-text-inner");
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
    <section className="contact min-h-screen">
      <div className="track">
        <div className="overlay">
          <div className="text">
            <div className={`${Franchise.className} contact-text-inner`}>
              let&apos;s keep in touch
            </div>
          </div>
          <div className="shape">
            <div className="scale">
              <div className="rotate">
                <Link
                  href={"/contact"}
                  aria-label="contact me"
                  title="contact me"
                >
                  <div className="img">
                    <svg
                      viewBox="0 0 147 148"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlSpace="preserve"
                    >
                      <path
                        className="hsc-img-path"
                        style={{ fillRule: "evenodd", clipRule: "evenodd" }}
                        d="M77.0546 0.147949H69.9463V147.148H77.0546V0.147949Z"
                        fill="currentColor"
                      ></path>
                      <path
                        className="hsc-img-path"
                        d="M77.0546 0.147949H69.9463V147.148H77.0546V0.147949Z"
                        fill="currentColor"
                        fillOpacity="0.2"
                      ></path>
                      <path
                        className="hsc-img-path"
                        d="M147 70.0938H0V77.2021H147V70.0938Z"
                        fill="currentColor"
                      ></path>
                      <path
                        className="hsc-img-path"
                        d="M147 70.0938H0V77.2021H147V70.0938Z"
                        fill="currentColor"
                        fillOpacity="0.2"
                      ></path>
                      <path
                        className="hsc-img-path"
                        d="M24.0282 19.1578L19.002 24.1841L122.946 128.128L127.972 123.101L24.0282 19.1578Z"
                        fill="currentColor"
                      ></path>
                      <path
                        className="hsc-img-path"
                        d="M24.0282 19.1578L19.002 24.1841L122.946 128.128L127.972 123.101L24.0282 19.1578Z"
                        fill="currentColor"
                        fillOpacity="0.2"
                      ></path>
                      <path
                        className="hsc-img-path"
                        d="M122.946 19.1564L19.002 123.1L24.0282 128.126L127.972 24.1827L122.946 19.1564Z"
                        fill="currentColor"
                      ></path>
                      <path
                        className="hsc-img-path"
                        d="M122.946 19.1564L19.002 123.1L24.0282 128.126L127.972 24.1827L122.946 19.1564Z"
                        fill="currentColor"
                        fillOpacity="0.2"
                      ></path>
                      <path
                        className="hsc-img-path"
                        d="M6.7933 42.6484L4.11133 49.2314L140.248 104.695L142.93 98.1115L6.7933 42.6484Z"
                        fill="currentColor"
                      ></path>
                      <path
                        className="hsc-img-path"
                        d="M6.7933 42.6484L4.11133 49.2314L140.248 104.695L142.93 98.1115L6.7933 42.6484Z"
                        fill="currentColor"
                        fillOpacity="0.2"
                      ></path>
                      <path
                        className="hsc-img-path"
                        d="M97.9631 4.26955L42.5 140.406L49.083 143.088L104.546 6.95152L97.9631 4.26955Z"
                        fill="currentColor"
                      ></path>
                      <path
                        className="hsc-img-path"
                        d="M97.9631 4.26955L42.5 140.406L49.083 143.088L104.546 6.95152L97.9631 4.26955Z"
                        fill="currentColor"
                        fillOpacity="0.2"
                      ></path>
                      <path
                        className="hsc-img-path"
                        d="M140.41 42.8958L4.03809 97.7856L6.69233 104.38L143.064 49.4902L140.41 42.8958Z"
                        fill="currentColor"
                      ></path>
                      <path
                        className="hsc-img-path"
                        d="M140.41 42.8958L4.03809 97.7856L6.69233 104.38L143.064 49.4902L140.41 42.8958Z"
                        fill="currentColor"
                        fillOpacity="0.2"
                      ></path>
                      <path
                        className="hsc-img-path"
                        d="M49.3122 4.18875L42.7178 6.84229L97.5928 143.214L104.187 140.561L49.3122 4.18875Z"
                        fill="currentColor"
                      ></path>
                      <path
                        className="hsc-img-path"
                        d="M49.3122 4.18875L42.7178 6.84229L97.5928 143.214L104.187 140.561L49.3122 4.18875Z"
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
