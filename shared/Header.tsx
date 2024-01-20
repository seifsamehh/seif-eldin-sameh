"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@nextui-org/react";
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
      })
      .to(".link", {
        duration: 0.5,
        autoAlpha: 1,
        y: 0,
        stagger: 0.2,
        ease: "power4.out",
      });

    menuAnimationBack
      .to(".link", {
        duration: 0.5,
        autoAlpha: 0,
        y: 30,
        stagger: 0.2,
        ease: "power4.out",
      })
      .to(navMain, {
        duration: 0.55,
        width: 0,
        clipPath: "polygon(0 0, -100% 0, 100% 100%, 0 100%)",
        ease: "power4.in",
        x: 0,
        y: 0,
        z: 0,
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
        <button id="menu-button" className="menu-button">
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
        <Button
          as={Link}
          href="/assets/Seif Eldin Sameh - Full Stack Web Developer.pdf"
          aria-label="resume"
          download
          color="primary"
          variant="solid"
        >
          Resume
          <svg
            width={25}
            height={25}
            fill="#f5f5fa"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M15.75 13a.75.75 0 0 0-.75-.75H9a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 .75-.75Z" />
            <path d="M15.75 17a.75.75 0 0 0-.75-.75H9a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 .75-.75Z" />
            <path
              fillRule="evenodd"
              d="M7 2.25A2.75 2.75 0 0 0 4.25 5v14A2.75 2.75 0 0 0 7 21.75h10A2.75 2.75 0 0 0 19.75 19V7.968c0-.381-.124-.751-.354-1.055l-2.998-3.968a1.75 1.75 0 0 0-1.396-.695H7ZM5.75 5c0-.69.56-1.25 1.25-1.25h7.25v4.397c0 .414.336.75.75.75h3.25V19c0 .69-.56 1.25-1.25 1.25H7c-.69 0-1.25-.56-1.25-1.25V5Z"
              clipRule="evenodd"
            />
          </svg>
        </Button>
      </div>
    </header>
  );
}
