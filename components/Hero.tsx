"use client";

import Image from "next/image";
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
export default function Hero() {
  useGSAP(() => {
    gsap.from(".heading", {
      duration: 1.2,
      y: -50,
      opacity: 0,
      ease: "power4.out",
      delay: 5,
      skewY: 7,
      stagger: {
        amount: 0.3,
      },
    });
    let image = document.querySelector(".reveal .seif-img");
    let tl = gsap.timeline();
    tl.set(".reveal", { autoAlpha: 1 });
    tl.from(".reveal", {
      xPercent: 100,
      ease: "power2.out",
      duration: 1.5,
      delay: 6,
    });
    tl.from(image, {
      xPercent: -100,
      scale: 1.3,
      duration: 1.5,
      delay: -1.5,
      ease: "power2.out",
    });
  });
  return (
    <section className="hero min-h-screen relative z-10 overflow-hidden">
      <div className="hero-content px-8 leading-[250px]">
        <h1
          className={`${Franchise.className} heading md:text-[17rem] min-[290px]:text-9xl`}
        >
          hi there,
        </h1>
        <h2
          className={`${Franchise.className} heading md:text-[17rem] min-[290px]:text-9xl mix-blend-exclusion`}
        >
          i&apos;m seif eldin
        </h2>
        <h3
          className={`${Franchise.className} heading md:text-[17rem] min-[290px]:text-9xl mix-blend-exclusion`}
        >
          sameh
        </h3>
      </div>
      <div className="reveal overflow-hidden absolute right-0 md:top-0 min-[290px]:-bottom-40 -z-10">
        <Image
          src="/assets/Seif.webp"
          className="seif-img"
          alt="Seif"
          aria-label="Seif"
          width={600}
          height={600}
          loading="lazy"
        />
      </div>
    </section>
  );
}
