"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function Hire() {
  useGSAP(() => {
    const images = document.querySelectorAll(".images img");

    images.forEach((image) => {
      gsap.fromTo(
        image,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: image,
            start: "top 80%",
            end: "bottom 20%",
            scrub: 0.5,
          },
        }
      );
    });
  });
  return (
    <section className="hire min-[290px]:hidden md:block">
      <section className="cooperate overflow-hidden py-6">
        <div className="content flex justify-center items-center">
          <div className="images flex justify-center items-center gap-4 flex-wrap py-12">
            <Image
              src="/assets/dips.webp"
              alt="dips"
              aria-label="dips"
              width={150}
              height={150}
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPkCKioBwACiQFRCR8qmwAAAABJRU5ErkJggg=="
            />
            <Image
              src="/assets/exception.webp"
              alt="exception"
              aria-label="exception"
              width={150}
              height={150}
              className="rounded-full"
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPkCKioBwACiQFRCR8qmwAAAABJRU5ErkJggg=="
            />
            <Image
              src="/assets/golden.webp"
              alt="golden"
              aria-label="golden"
              width={150}
              height={150}
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPkCKioBwACiQFRCR8qmwAAAABJRU5ErkJggg=="
            />
            <Image
              src="/assets/ieee.webp"
              alt="ieee"
              aria-label="ieee"
              width={150}
              height={150}
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPkCKioBwACiQFRCR8qmwAAAABJRU5ErkJggg=="
            />
            <Image
              src="/assets/enggam.webp"
              alt="enggam"
              aria-label="enggam"
              width={150}
              height={150}
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPkCKioBwACiQFRCR8qmwAAAABJRU5ErkJggg=="
            />
            <Image
              src="/assets/FinalTouchLogo.webp"
              alt="FinalTouchLogo"
              aria-label="FinalTouchLogo"
              width={150}
              height={150}
              className="rounded-full"
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPkCKioBwACiQFRCR8qmwAAAABJRU5ErkJggg=="
            />
          </div>
        </div>
      </section>
    </section>
  );
}
