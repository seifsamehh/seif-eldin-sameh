import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import logo from "./assests/images/logoBlack.webp";
import Providers from "./Providers";
import styles from "./main.module.css";
import { Open_Sans } from "@next/font/google";
import DarkModeBtn from "./DarkModeBtn";
import { AnalyticsWrapper } from "./analytics";
import MobileMenu from "./mobile";

const openSans = Open_Sans({
  display: "swap",
  weight: ["500"],
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className={`${styles.body} ${openSans.className}`}>
        <Providers>
          {/* start header small */}
          <header
            className={`${styles.header} flex justify-center items-center flex-wrap gap-2 lg:hidden`}
          >
            <div className="flex items-center justify-around w-full box">
              <Link href="/">
                <Image
                  src={logo}
                  alt="logo"
                  width={100}
                  height={100}
                  priority
                />
              </Link>
              <MobileMenu />
            </div>
            <DarkModeBtn />
          </header>
          {/* end header small */}
          {/* start header */}
          <header
            className={`body-font ${styles.header} min-[290px]:hidden lg:block`}
          >
            <div className="container flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row">
              <Link
                className="flex items-center mb-4 font-medium title-font md:mb-0"
                href="/"
              >
                <Image src={logo} alt="logo" width={70} height={70} />
                <span className="ml-3 text-xl font-bold">Seif Eldin Sameh</span>
              </Link>
              <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto">
                <Link
                  href="/about"
                  className={`mr-5 font-bold text-lg ${styles.link}`}
                >
                  About Me
                </Link>
                <Link
                  href="/projects"
                  className={`mr-5 font-bold text-lg ${styles.link}`}
                >
                  My Projects
                </Link>
                <Link
                  href="/contact"
                  className={`mr-5 font-bold text-lg ${styles.link}`}
                >
                  Contact Me
                </Link>
              </nav>
              <DarkModeBtn />
            </div>
          </header>
          {/* end header */}
          {children}
          <AnalyticsWrapper />
        </Providers>
      </body>
    </html>
  );
}
