import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Navbar from "./navbar";
import MobileNavbar from "./mobilenavbar";
import MobileHeader from "./mobileheader";
import Footer from "./footer";

export default function Layout({ children }) {
  const [isMobile, setMobile] = useState();

  const updateScreenSize = () => {
    if (window !== "undefined") {
      setMobile(window.innerWidth < 600);
    }
  };

  useEffect(() => {
    if (window !== "undefined") {
      window.addEventListener("resize", updateScreenSize);
      return () => window.removeEventListener("resize", updateScreenSize);
    }
  });

  return (
    <>
      {!isMobile ? <MobileNavbar /> : ""}
      {isMobile ? <MobileHeader /> : ""}
      <main>{children}</main>
      <Footer />
      {isMobile ? <MobileNavbar /> : ""}
    </>
  );
}
