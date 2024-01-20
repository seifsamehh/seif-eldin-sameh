import dynamic from "next/dynamic";
import Image from "next/image";

// contact-page
const ContactPage = dynamic(() => import("@/components/ContactPage"), {
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
// quote=
const Quote = dynamic(() => import("@/components/Quote"), {
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

export default function page() {
  return (
    <>
      <ContactPage />
      <Quote />
    </>
  );
}
