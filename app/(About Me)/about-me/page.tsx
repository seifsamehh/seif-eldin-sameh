import dynamic from "next/dynamic";
import Image from "next/image";

// about-page
const AboutPage = dynamic(() => import("@/components/AboutPage"), {
  loading: () => (
    <div className="loading-component bg-[#181823] min-h-screen flex justify-center items-center flex-col gap-4">
      <Image
        src="/assets/logo-trans.webp"
        alt="Seif Eldin"
        aria-label="Seif Eldin"
        width={200}
        height={200}
        loading="lazy"
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk2Pq8HgAEdgIdlOJI3wAAAABJRU5ErkJggg=="
      />
      <span className="loader"></span>
    </div>
  ),
});
// work
const Work = dynamic(() => import("@/components/Work"), {
  loading: () => (
    <div className="loading-component bg-[#181823] min-h-screen flex justify-center items-center flex-col gap-4">
      <Image
        src="/assets/logo-trans.webp"
        alt="Seif Eldin"
        aria-label="Seif Eldin"
        width={200}
        height={200}
        loading="lazy"
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk2Pq8HgAEdgIdlOJI3wAAAABJRU5ErkJggg=="
      />
      <span className="loader"></span>
    </div>
  ),
});
// Hire
const Hire = dynamic(() => import("@/components/Hire"), {
  loading: () => (
    <div className="loading-component bg-[#181823] min-h-screen flex justify-center items-center flex-col gap-4">
      <Image
        src="/assets/logo-trans.webp"
        alt="Seif Eldin"
        aria-label="Seif Eldin"
        width={200}
        height={200}
        loading="lazy"
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk2Pq8HgAEdgIdlOJI3wAAAABJRU5ErkJggg=="
      />
      <span className="loader"></span>
    </div>
  ),
});
// Testimonials
const Testimonials = dynamic(() => import("@/components/Testimonials"), {
  loading: () => (
    <div className="loading-component bg-[#181823] min-h-screen flex justify-center items-center flex-col gap-4">
      <Image
        src="/assets/logo-trans.webp"
        alt="Seif Eldin"
        aria-label="Seif Eldin"
        width={200}
        height={200}
        loading="lazy"
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk2Pq8HgAEdgIdlOJI3wAAAABJRU5ErkJggg=="
      />
      <span className="loader"></span>
    </div>
  ),
});
// projects
const Projects = dynamic(() => import("@/components/Projects"), {
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
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk2Pq8HgAEdgIdlOJI3wAAAABJRU5ErkJggg=="
      />
      <span className="loader"></span>
    </div>
  ),
});

export default function page() {
  return (
    <>
      <AboutPage />
      <Work />
      <Hire />
      <Testimonials />
      <Projects />
    </>
  );
}
