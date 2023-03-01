import styles from "../main.module.css";
import Image from "next/image";
import logo from "../assests/images/logoBlack.webp";

export default function Loading() {
  return (
    <div
      className={`loading flex justify-center items-center flex-col gap-8 min-h-screen bg-white ${styles.loading}`}
    >
      <Image src={logo} alt="logo" width={200} height={200} />
      <span className={`${styles.loader}`} />
    </div>
  );
}
