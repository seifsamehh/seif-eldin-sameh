"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

export default function PreLoader() {
  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

    tl.to(".lightCyan-slider", {
      x: "-10%",
      duration: 1,
      force3D: true,
    });

    tl.to(
      ".persianGreen-slider",
      {
        x: "-20%",
        duration: 1.5,
        force3D: true,
      },
      "-=1"
    );

    tl.to(
      ".white-slider",
      {
        x: "-30%",
        duration: 1.5,
        force3D: true,
      },
      "-=1"
    );

    tl.to(".hide", {
      x: "0%",
      duration: 2,
      opacity: 1,
      force3D: true,
      stagger: {
        amount: 0.3,
      },
    });

    tl.to(".preloader", {
      x: "200%",
      duration: 3,
      ease: "expo.inOut",
      force3D: true,
      stagger: {
        amount: 0.3,
      },
    });

    tl.fromTo(
      "nav",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,
        force3D: true,
      },
      "-=2"
    );

    tl.fromTo(
      ".hero-content",
      {
        opacity: 0,
        y: -20,
      },
      {
        opacity: 1,
        duration: 1,
        y: 0,
        force3D: true,
      },
      "-=1.5"
    );
  });
  return (
    <section className="preloader">
      <div className="prl-logo flex justify-center items-center gap-4 flex-col">
        <Image
          src="/assets/logo-trans.webp"
          alt="logo"
          width={200}
          height={200}
          loading="lazy"
        />
      </div>
      <div className="lightCyan-slider"></div>
      <div className="persianGreen-slider"></div>
      <div className="white-slider"></div>
    </section>
  );
}
