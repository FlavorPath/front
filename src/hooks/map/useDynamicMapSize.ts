import { useState, useEffect } from "react";

const useDynamicMapSize = () => {
  const [mapSize, setMapSize] = useState({ width: "100vw", height: "100vh" });

  useEffect(() => {
    const handleResize = () => {
      setMapSize({
        width: `${window.innerWidth}px`,
        height: `${window.innerHeight}px`,
      });
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return mapSize;
};

export default useDynamicMapSize;
