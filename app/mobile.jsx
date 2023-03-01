"use client";
import { useState } from "react";
import Link from "next/link";
function MobileNav({ open, setOpen }) {
  return (
    <div
      className={`absolute top-0 left-0 h-screen w-screen bg-white/80 transform ${
        open ? "-translate-y-0" : "-translate-y-full"
      } transition-transform duration-300 ease-in-out filter  `}
    >
      <div className="flex flex-col items-center justify-center mt-28">
        <Link
          className="my-4 text-2xl font-bold hover:text-[#a5c9ff]"
          href="/"
          onClick={() => setOpen(false)}
        >
          Home
        </Link>
        <Link
          className="my-4 text-2xl font-bold hover:text-[#a5c9ff]"
          href="/about"
          onClick={() => setOpen(false)}
        >
          About Me
        </Link>
        <Link
          className="my-4 text-2xl font-bold hover:text-[#a5c9ff]"
          href="/projects"
          onClick={() => setOpen(false)}
        >
          My Projects
        </Link>
        <Link
          className="my-4 text-2xl font-bold hover:text-[#a5c9ff]"
          href="/contact"
          onClick={() => setOpen(false)}
        >
          Contact Me
        </Link>
      </div>
    </div>
  );
}
export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav>
      <MobileNav open={open} setOpen={setOpen} />
      <div className="flex items-center justify-center w-11/12">
        <div
          className="relative z-50 flex flex-col items-center justify-between w-6 h-6 cursor-pointer group"
          onClick={() => {
            setOpen(!open);
          }}
        >
          {/* hamburger button */}
          <span
            className={`h-1 w-full bg-[#101010] rounded-lg cursor-pointer transform transition duration-300 ease-in-out ${
              open ? "rotate-45 translate-y-2.5" : ""
            }`}
          />
          <span
            className={`h-1 w-full bg-[#101010] rounded-lg cursor-pointer transition-all duration-300 ease-in-out ${
              open ? "hidden" : "w-full"
            }`}
          />
          <span
            className={`h-1 w-full bg-[#101010] rounded-lg cursor-pointer transform transition duration-300 ease-in-out ${
              open ? "-rotate-45 -translate-y-2.5" : ""
            }`}
          />
        </div>
      </div>
    </nav>
  );
}
