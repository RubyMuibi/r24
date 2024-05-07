"use client";

import { useEffect, useState } from "react";

export default function useMode() {
  const [isLightMode, setIsLightMode] = useState(true);

  useEffect(() => {
    if (isLightMode) {
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
    }
  }, [isLightMode]);

  const toggleLightMode = () => {
    setIsLightMode(!isLightMode);
  };

  return { isLightMode, toggleLightMode };
}
