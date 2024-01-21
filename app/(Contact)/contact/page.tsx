import dynamic from "next/dynamic";
import Image from "next/image";

// contact-page
const ContactPage = dynamic(() => import("@/components/ContactPage"), {
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
// quote
const Quote = dynamic(() => import("@/components/Quote"), {
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

export default function page() {
  return (
    <>
      <ContactPage />
      <Quote />
    </>
  );
}
