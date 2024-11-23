import { css } from "@styled-system/css";
import React, { useState, useRef } from "react";

interface IProp {
  images: string[];
}

export default function Slider({ images }: IProp) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);

  const sliderRef = useRef<HTMLDivElement>(null);

  const handleDragStart = (x: number) => {
    setIsDragging(true);
    setStartX(x);
  };

  const handleDragMove = (x: number) => {
    if (!isDragging) return;
    const diffX = x - startX;
    setTranslateX(diffX);
  };
  const handleDragEnd = () => {
    if (!isDragging) return;

    const threshold = 50; // 드래그 변경 최소 거리
    if (translateX > threshold && currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1); // 이전 슬라이드
    } else if (translateX < -threshold && currentIndex < images.length - 1) {
      setCurrentIndex((prev) => prev + 1); // 다음 슬라이드
    }

    setIsDragging(false);
    setTranslateX(0); // 이동 초기화
  };

  return (
    <div
      className={styles.sliderContainer}
      ref={sliderRef}
      // 마우스 이벤트
      onMouseDown={(e) => handleDragStart(e.clientX)}
      onMouseMove={(e) => handleDragMove(e.clientX)}
      onMouseUp={handleDragEnd}
      onMouseLeave={handleDragEnd}
      // 터치 이벤트
      onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
      onTouchMove={(e) => handleDragMove(e.touches[0].clientX)}
      onTouchEnd={handleDragEnd}
    >
      <div
        className={styles.sliderWrapper}
        style={{
          transform: `translateX(calc(${-currentIndex * 100}% + ${translateX}px))`,
          transition: isDragging ? "none" : "transform 0.3s ease-in-out",
        }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className={styles.slideImage}
          />
        ))}
      </div>
      {/* 하단 네비게이션 점 */}
      <div className={styles.navigationDots}>
        {images.map((_, index) => (
          <div
            key={index}
            className={css({
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              cursor: "pointer",
              backgroundColor: currentIndex === index ? "primary.main" : "gray",
            })}
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  sliderContainer: css({
    position: "relative",
    width: "335px",
    height: "210px",
    margin: "0 auto",
    overflow: "hidden",
    borderRadius: "20px",
    backgroundColor: "primary.main",
    userSelect: "none", // 드래그 중 텍스트 선택 방지
  }),
  sliderWrapper: css({
    display: "flex",
    transition: "transform 0.3s ease-in-out",
  }),
  slideImage: css({
    width: "100%",
    height: "100%",
    flexShrink: 0,
    objectFit: "cover",
  }),
  navigationDots: css({
    position: "absolute",
    bottom: "10px",
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    gap: "5px",
  }),
  dot: css({
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    cursor: "pointer",
  }),
};
