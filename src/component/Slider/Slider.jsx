import React, { useEffect, useState } from "react";
import styles from "./Slider.module.css";

const images = [
  "/chapter_1.png",
  "/chapter_2.jpeg",
  "/chapter_3.png",
  "/chapter_4.png",
  "/chapter_5.png",
  "/chapter_6.png",
  "/chapter_7.png",
  "/chapter_8.png",
  "/chapter_9.png",
];
function Slider() {
  const [current, setCurrent] = useState(0);

  // Auto Slide
  useEffect(() => {
    const slider = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 6000);

    return () => clearInterval(slider);
  }, []);

  // Next Slide
  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  // Previous Slide
  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className={styles.slider}>
      <img src={images[current]} alt="slider" className={styles.image} />

      {/* Buttons */}
      <button className={styles.prev} onClick={prevSlide}>
        ❮
      </button>

      <button className={styles.next} onClick={nextSlide}>
        ❯
      </button>

      {/* Dots */}
      <div className={styles.dots}>
        {images.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${
              current === index ? styles.active : ""
            }`}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Slider;
