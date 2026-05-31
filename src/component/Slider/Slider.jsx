import React, { useEffect, useState } from "react";
import styles from "./Slider.module.css";

const images = [
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
  "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
  "https://images.unsplash.com/photo-1520869562399-e772f042f422",
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
  "https://images.unsplash.com/photo-1518770660439-4636190af475",
  "https://images.unsplash.com/photo-1520869562399-e772f042f422",
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
