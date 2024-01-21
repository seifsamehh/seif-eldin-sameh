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
const Creattion = localFont({
  src: "../public/fonts/Creattion Demo.otf",
  display: "swap",
});

gsap.registerPlugin(ScrollTrigger);

export default function ContactPage() {
  useGSAP(() => {
    gsap.to("#page5 h1", {
      transform: "translateX(-50%)",
      duration: 1,
      scrollTrigger: {
        trigger: "#page5",
        scroller: "body",
        start: "top 0",
        end: "top -200%",
        scrub: 2,
        pin: true,
      },
    });
    const layers = gsap.utils.toArray(".layer");
    const amount = layers.length;

    gsap.set(layers, { zIndex: (i) => amount - i });

    gsap.to(layers.reverse(), {
      clipPath: "circle(71% at 50% 50%)",
      duration: 1,
      ease: "power1.inOut",
      stagger: 1,
      repeat: -1,
      repeatDelay: 1,
      yoyo: true,
    });
  });
  return (
    <section className="contact-page overflow-hidden">
      {/* page 5 */}
      <div
        id="page5"
        className="min-h-screen overflow-hidden flex justify-center items-center"
      >
        <h1
          className={`${Franchise.className} text-[30vw] font-black uppercase whitespace-nowrap`}
        >
          me contact me contact me contact
        </h1>
      </div>
      {/* page 6 */}
      <div
        id="page6"
        className="min-h-screen flex justify-center items-center flex-col gap-12"
      >
        <div className="contact-box bg-[#00b5e7] min-[290px]:w-[90%] md:w-[80%] min-[290px]:h-full md:h-[90vh] min-[290px]:p-8 md:p-16 min-[290px]:mb-4 md:mb-0 rounded-3xl flex justify-between items-start gap-4 min-[290px]:flex-wrap md:flex-nowrap">
          <div className="left flex justify-between items-start flex-col h-full">
            <h3
              className={`${Franchise.className} min-[290px]:text-8xl md:text-[9rem] font-bold leading-[8rem]`}
            >
              let&apos;s get in touch
            </h3>
            <div className="information">
              <div className="information-box">
                <div className="info">
                  <h4 className={`${Franchise.className} text-4xl`}>email:</h4>
                  <Link href="mailto:seiffsameh00@gmail.com" target="_blank">
                    seiffsameh00@gmail.com
                  </Link>
                </div>
                <div className="number mt-4">
                  <h4 className={`${Franchise.className} text-4xl`}>phone:</h4>
                  <Link href="tel:+201060865699" target="_blank">
                    01060865699
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="right flex justify-between items-start flex-col h-full">
            <h3 className={`${Franchise.className} text-4xl font-bold`}>
              life&apos;s too{" "}
              <span
                className={`${Creattion.className} text-[#181823] text-7xl`}
              >
                short
              </span>
              for{" "}
              <span
                className={`${Creattion.className} text-[#181823] text-7xl`}
              >
                boring websites
              </span>{" "}
              - let me add some special touches
            </h3>
            <div className="social-media min-[290px]:mt-8 md:mt-0">
              <div className="social-title">
                <h4 className={`${Franchise.className} text-4xl`}>
                  social media:
                </h4>
              </div>
              <div className="social-icons flex gap-4">
                {/* facebook */}
                <Link
                  href="https://www.facebook.com/seif.sameh.50596"
                  target="_blank"
                  title="facebook"
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="currentColor"
                      d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978c.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036a26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103l-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647"
                    />
                  </svg>
                </Link>
                {/* linkedin */}
                <Link
                  href="https://www.linkedin.com/in/seif-eldin-sameh-81b8661b7/"
                  target="_blank"
                  title="LinkedIn"
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="currentColor"
                      d="M27.26 27.271h-4.733v-7.427c0-1.771-.037-4.047-2.475-4.047c-2.468 0-2.844 1.921-2.844 3.916v7.557h-4.739V11.999h4.552v2.083h.061c.636-1.203 2.183-2.468 4.491-2.468c4.801 0 5.692 3.161 5.692 7.271v8.385zM7.115 9.912a2.75 2.75 0 0 1-2.751-2.756a2.753 2.753 0 1 1 2.751 2.756m2.374 17.359H4.74V12h4.749zM29.636 0H2.36C1.057 0 0 1.031 0 2.307v27.387c0 1.276 1.057 2.307 2.36 2.307h27.271c1.301 0 2.369-1.031 2.369-2.307V2.307C32 1.031 30.932 0 29.631 0z"
                    />
                  </svg>
                </Link>
                {/* github */}
                <Link
                  href="https://github.com/seifsamehh"
                  target="_blank"
                  title="Github"
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 128 128"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388c0 26.682 17.303 49.317 41.297 57.303c3.017.56 4.125-1.31 4.125-2.905c0-1.44-.056-6.197-.082-11.243c-16.8 3.653-20.345-7.125-20.345-7.125c-2.747-6.98-6.705-8.836-6.705-8.836c-5.48-3.748.413-3.67.413-3.67c6.063.425 9.257 6.223 9.257 6.223c5.386 9.23 14.127 6.562 17.573 5.02c.542-3.903 2.107-6.568 3.834-8.076c-13.413-1.525-27.514-6.704-27.514-29.843c0-6.593 2.36-11.98 6.223-16.21c-.628-1.52-2.695-7.662.584-15.98c0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033c11.526-7.813 16.59-6.19 16.59-6.19c3.287 8.317 1.22 14.46.593 15.98c3.872 4.23 6.215 9.617 6.215 16.21c0 23.194-14.127 28.3-27.574 29.796c2.167 1.874 4.097 5.55 4.097 11.183c0 8.08-.07 14.583-.07 16.572c0 1.607 1.088 3.49 4.148 2.897c23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"
                        clipRule="evenodd"
                      />
                      <path d="M26.484 91.806c-.133.3-.605.39-1.035.185c-.44-.196-.685-.605-.543-.906c.13-.31.603-.395 1.04-.188c.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28c-.396-.42-.47-.983-.177-1.254c.298-.266.844-.14 1.24.28c.394.426.472.984.17 1.255zm2.382 3.477c-.37.258-.976.017-1.35-.52c-.37-.538-.37-1.183.01-1.44c.373-.258.97-.025 1.35.507c.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23c-.527-.487-.674-1.18-.343-1.544c.336-.366 1.045-.264 1.564.23c.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486c-.683-.207-1.13-.76-.99-1.238c.14-.477.823-.7 1.512-.485c.683.206 1.13.756.988 1.237m4.943.361c.017.498-.563.91-1.28.92c-.723.017-1.308-.387-1.315-.877c0-.503.568-.91 1.29-.924c.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117c-.7.13-1.35-.172-1.44-.653c-.086-.498.422-.997 1.122-1.126c.714-.123 1.354.17 1.444.663zm0 0" />
                    </g>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
