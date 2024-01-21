import dynamic from "next/dynamic";
import Image from "next/image";

// projects-page
const ProjectsPage = dynamic(() => import("@/components/ProjectsPage"), {
  loading: () => (
    <div className="loading-component bg-[#181823] min-h-screen flex justify-center items-center flex-col gap-4">
      <Image
        src="/assets/logo-trans.webp"
        alt="Seif Eldin"
        aria-label="Seif Eldin"
        width={200}
        height={200}
        loading="lazy"
      />
      <span className="loader"></span>
    </div>
  ),
});
// contact
const Contact = dynamic(() => import("@/components/Contact"), {
  loading: () => (
    <div className="loading-component bg-[#181823] min-h-screen flex justify-center items-center flex-col gap-4">
      <Image
        src="/assets/logo-trans.webp"
        alt="Seif Eldin"
        aria-label="Seif Eldin"
        width={200}
        height={200}
        loading="lazy"
      />
      <span className="loader"></span>
    </div>
  ),
});

export default function page() {
  return (
    <>
      <ProjectsPage />
      <Contact />
    </>
  );
}
