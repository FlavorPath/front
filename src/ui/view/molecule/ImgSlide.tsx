import { css } from "@styled-system/css";
import React, { useState } from "react";

const images = [
  "https://via.placeholder.com/800x400?text=Slide+1",
  "https://via.placeholder.com/800x400?text=Slide+2",
  "https://via.placeholder.com/800x400?text=Slide+3",
];

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };
  return <div className={styles.sliderContainer}></div>;
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
  }),
};
