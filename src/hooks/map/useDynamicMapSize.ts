import { useState, useEffect } from "react";

const useDynamicMapSize = () => {
  const getMapSize = () => ({
    width: `${window.innerWidth}px`,
    height: `${window.innerHeight - 60}px`,
  });
  const [mapSize, setMapSize] = useState(getMapSize);
  useEffect(() => {
    const handleResize = () => {
      setMapSize(getMapSize());
    };
    let resizeTimeout: number | undefined;
    const debouncedResize = () => {
      if (resizeTimeout) {
        cancelAnimationFrame(resizeTimeout);
      }
      resizeTimeout = requestAnimationFrame(handleResize);
    };
    handleResize();
    window.addEventListener("resize", debouncedResize);
    return () => {
      if (resizeTimeout) {
        cancelAnimationFrame(resizeTimeout);
      }
      window.removeEventListener("resize", debouncedResize);
    };
  }, []);

  return mapSize;
};

export default useDynamicMapSize;
