"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import localFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";

// Font files can be colocated inside of `app`
const Franchise = localFont({
  src: "../public/fonts/Franchise-Free-Bold.ttf",
  display: "swap",
});

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsPage() {
  useGSAP(() => {
    gsap.to("#page3 h1", {
      transform: "translateX(-50%)",
      duration: 1,
      scrollTrigger: {
        trigger: "#page3",
        scroller: "body",
        start: "top 0",
        end: "top -200%",
        scrub: 2,
        pin: true,
      },
    });
    const scrollElements = gsap.utils.toArray(".scroll-element");

    const zoom = gsap.timeline();
    zoom.from(".items-grid", { scale: 0.5 });

    const sideScroll = gsap.timeline();
    sideScroll.to(".scroller", {});

    ScrollTrigger.create({
      animation: zoom,
      trigger: ".scroller",
      scrub: 1,
      start: "top center",
      end: () => `+=${window.innerHeight / 2}`,
    });

    gsap.to(".scroller", {
      xPercent: -80,
      ease: "none",
      force3D: true,
      scrollTrigger: {
        trigger: ".scroller",
        scrub: 1,
        pin: true,
        snap: {
          snapTo: 0.25,
          duration: { min: 0.2, max: 0.8 },
        },
        end: () => `+=${window.innerHeight * (scrollElements.length - 1)}`,
      },
    });
  });
  return (
    <section className="about-page relative overflow-hidden">
      {/* page 3 */}
      <div
        id="page3"
        className="min-h-screen overflow-hidden flex justify-center items-center"
      >
        <h1
          className={`${Franchise.className} text-[30vw] font-black uppercase whitespace-nowrap min-[290px]:hidden md:block`}
        >
          projects projects projects
        </h1>
        <h1
          className={`${Franchise.className} text-[30vw] font-black uppercase whitespace-nowrap md:hidden min-[290px]:block`}
        >
          projects
        </h1>
      </div>
      {/* page 4 */}
      <div id="page4">
        <div className="scroller">
          <div className="scroll-element">
            <div className="items-grid grid-1">
              <Image
                src="/assets/project-1.webp"
                alt="project"
                aria-label="project"
                width={1000}
                height={1000}
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk2Pq8HgAEdgIdlOJI3wAAAABJRU5ErkJggg=="
              />
              <Link
                href="https://www.enggam.com/"
                target="_blank"
                title="preview"
                className={`${Franchise.className} text-5xl`}
              >
                preview
              </Link>
            </div>
          </div>
          <div className="scroll-element">
            <div className="items-grid grid-2">
              <Image
                src="/assets/project-2.webp"
                alt="project"
                aria-label="project"
                width={1000}
                height={1000}
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk2Pq8HgAEdgIdlOJI3wAAAABJRU5ErkJggg=="
              />
              <Link
                href="https://golden-hornet-software.vercel.app/"
                target="_blank"
                title="preview"
                className={`${Franchise.className} text-5xl`}
              >
                preview
              </Link>
            </div>
          </div>
          <div className="scroll-element">
            <div className="items-grid grid-3">
              <Image
                src="/assets/project-3.webp"
                alt="project"
                aria-label="project"
                width={1000}
                height={1000}
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk2Pq8HgAEdgIdlOJI3wAAAABJRU5ErkJggg=="
              />
              <Link
                href="https://hala-technology.vercel.app/"
                target="_blank"
                title="preview"
                className={`${Franchise.className} text-5xl`}
              >
                preview
              </Link>
            </div>
          </div>
          <div className="scroll-element">
            <div className="items-grid grid-4">
              <Image
                src="/assets/project-4.webp"
                alt="project"
                aria-label="project"
                width={1000}
                height={1000}
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk2Pq8HgAEdgIdlOJI3wAAAABJRU5ErkJggg=="
              />
              <Link
                href="https://final-touch-design.vercel.app/"
                target="_blank"
                title="preview"
                className={`${Franchise.className} text-5xl`}
              >
                preview
              </Link>
            </div>
          </div>
          <div className="scroll-element">
            <div className="items-grid grid-5">
              <Image
                src="/assets/project-5.webp"
                alt="project"
                aria-label="project"
                width={1000}
                height={1000}
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk2Pq8HgAEdgIdlOJI3wAAAABJRU5ErkJggg=="
              />
              <Link
                href="https://green-army.vercel.app/"
                target="_blank"
                title="preview"
                className={`${Franchise.className} text-5xl`}
              >
                preview
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
