import { useState, useEffect, useRef } from "react";

const useDynamicBottomSheetHeight = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dynamicMinHeight, setDynamicMinHeight] = useState(0);
  const [dynamicMaxHeight, setDynamicMaxHeight] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      const containerHeight = containerRef.current.offsetHeight;
      setDynamicMinHeight(containerHeight * 0.5);
      setDynamicMaxHeight(containerHeight);
    }
  }, []);

  return { containerRef, dynamicMinHeight, dynamicMaxHeight };
};

export default useDynamicBottomSheetHeight;
