import dynamic from "next/dynamic";
import Image from "next/image";

// hero
const Hero = dynamic(() => import("@/components/Hero"), {
  ssr: false,
  loading: () => (
    <div className="loading-component bg-[#181823] min-h-screen flex justify-center items-center flex-col gap-4">
      <Image
        src="/assets/logo-trans.webp"
        alt="Seif Eldin"
        aria-label="Seif Eldin"
        width={150}
        height={150}
        loading="lazy"
      />
      <span className="loader"></span>
    </div>
  ),
});
// about
const About = dynamic(() => import("@/components/About"), {
  ssr: false,
  loading: () => (
    <div className="loading-component bg-[#181823] min-h-screen flex justify-center items-center flex-col gap-4">
      <Image
        src="/assets/logo-trans.webp"
        alt="Seif Eldin"
        aria-label="Seif Eldin"
        width={150}
        height={150}
        loading="lazy"
      />
      <span className="loader"></span>
    </div>
  ),
});

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
    </main>
  );
}
