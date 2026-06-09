import React, { useEffect, useState } from "react";
import styles from "./Gallary.module.css";
import Card from "../Team/Card/Card";

const images = [
  "/images/image_1.png",
  "/images/image_3.jpeg",
  "/images/image_4.jpeg",
  "/images/image_5.jpeg",
  "/images/image_6.jpeg",
  "/images/image_7.jpeg",
  "/images/image_8.jpeg",
  "/images/image_9.jpeg",
];
function Gallary() {
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
    <>
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

      <Card />
    </>
  );
}

export default Gallary;
