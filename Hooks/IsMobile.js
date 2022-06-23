import React, { useState, useEffect } from "react";

export default function IsMobile() {
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

  return { isMobile };
}
