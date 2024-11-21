import { useState, useEffect } from "react";

const useDynamicMapSize = () => {
  const [mapSize, setMapSize] = useState({
    width: `${window.innerWidth}px`,
    height: `${window.innerHeight}px`,
  });

  useEffect(() => {
    let resizeTimeout: NodeJS.Timeout;

    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        setMapSize({
          width: `${window.innerWidth}px`,
          height: `${window.innerHeight}px`,
        });
      }, 100);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(resizeTimeout);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return mapSize;
};

export default useDynamicMapSize;
