"use client";
import React, { useState, useEffect } from "react";
import { ThemeProvider } from "next-themes";
import styles from "./main.module.css";
import Image from "next/image";
import logo from "./assests/images/logoBlack.webp";

const Providers = ({ children }) => {
  //loading
  const [loading, setLoading] = useState("false");
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      {loading ? (
        <div
          className={`loading flex justify-center items-center flex-col gap-8 min-h-screen bg-white ${styles.loading}`}
        >
          <Image src={logo} alt="logo" width={200} height={200} priority />
          <span className={`${styles.loader}`} />
        </div>
      ) : (
        <>
          <ThemeProvider>{children}</ThemeProvider>
        </>
      )}
    </>
  );
};

export default Providers;
