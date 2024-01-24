"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";

// Font files can be colocated inside of `app`
const Franchise = localFont({
  src: "../public/fonts/Franchise-Free-Bold.ttf",
  display: "swap",
});

export default function Header() {
  useGSAP(() => {
    let menuAnimation = gsap.timeline({ paused: true });
    let menuAnimationBack = gsap.timeline({ paused: true, reversed: true });
    let navMain = document.getElementById("nav-main");
    let menuButton = document.getElementById("menu-button");
    let toggle = true;

    gsap.set(".link", { y: 30 });

    menuAnimation
      .to(navMain, {
        duration: 0.8,
        width: "100%",
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        ease: "power2.inOut",
        x: 0,
        y: 0,
        z: 0,
        force3D: true,
      })
      .to(".link", {
        duration: 0.5,
        autoAlpha: 1,
        y: 0,
        stagger: 0.2,
        ease: "power4.out",
        force3D: true,
      });

    menuAnimationBack
      .to(".link", {
        duration: 0.5,
        autoAlpha: 0,
        y: 30,
        stagger: 0.2,
        ease: "power4.out",
        force3D: true,
      })
      .to(navMain, {
        duration: 0.55,
        width: 0,
        clipPath: "polygon(0 0, -100% 0, 100% 100%, 0 100%)",
        ease: "power4.in",
        x: 0,
        y: 0,
        z: 0,
        force3D: true,
      });

    if (menuButton !== null) {
      menuButton.onclick = function () {
        toggle = !toggle;
        if (toggle === false) {
          menuAnimation.play(0);
        } else {
          menuAnimationBack.play(0);
        }
      };

      // Add code to close the menu when a link is clicked
      const links = document.querySelectorAll(".link");
      links.forEach((link) => {
        link.addEventListener("click", () => {
          if (toggle === false) {
            menuAnimationBack.play(0);
          }
        });
      });
    }
  });
  return (
    <header className="flex justify-between items-center py-2 px-6">
      <div className="left">
        <Image
          src="/assets/logo-trans.webp"
          alt="logo"
          aria-label="logo"
          width={100}
          height={100}
          loading="lazy"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk2Pq8HgAEdgIdlOJI3wAAAABJRU5ErkJggg=="
        />
      </div>
      <div className="right flex justify-center items-center gap-4">
        <nav id="nav-main" className="skew">
          <ul>
            <li className="link">
              <Link
                href={"/"}
                aria-label="Welcome"
                title="Welcome"
                className={`${Franchise.className}`}
              >
                welcome
              </Link>
            </li>
            <li className="link">
              <Link
                href={"/about-me"}
                aria-label="About Me"
                title="About Me"
                className={`${Franchise.className}`}
              >
                about me
              </Link>
            </li>
            <li className="link">
              <Link
                href={"/projects"}
                aria-label="Projects"
                title="Projects"
                className={`${Franchise.className}`}
              >
                projects
              </Link>
            </li>
            <li className="link">
              <Link
                href={"/contact"}
                aria-label="Keep in touch"
                title="Keep in touch"
                className={`${Franchise.className}`}
              >
                keep in touch
              </Link>
            </li>
          </ul>
        </nav>
        <button id="menu-button" aria-label="menu" className="menu-button">
          <svg
            width="34"
            height="34"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 6.001h18m-18 6h18m-18 6h18"
            />
          </svg>
        </button>
        <Link
          href={"/assets/Seif-Eldin-Sameh-Full-Stack-Developer.pdf"}
          download="My-Resume😌.pdf"
          title="Resume"
          aria-label="Resume"
          className="bg-[#00b5e7] text-[#181823] py-2 px-4 rounded"
        >
          Resume
        </Link>
      </div>
    </header>
  );
}
