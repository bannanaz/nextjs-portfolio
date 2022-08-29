import styled from "@emotion/styled";
import Navbar from "./navbar";
import MobileNavbar from "./mobilenavbar";
import MobileHeader from "./mobileheader";
import Footer from "./footer";
import IsMobile from "../Hooks/IsMobile";

export default function Layout({ children }) {
  const { isMobile } = IsMobile();
  return (
    <>
      {!isMobile ? <Navbar /> : ""}
      {isMobile ? <MobileHeader /> : ""}
      <main>{children}</main>
      <Footer />
      {isMobile ? <MobileNavbar /> : ""}
    </>
  );
}
