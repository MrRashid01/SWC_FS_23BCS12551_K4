import React, { useState, useEffect } from "react";

function ImageCarousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, isPaused]);

  return (
    <div
      style={{
        width: "500px",
        margin: "20px auto",
        textAlign: "center",
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <img
        src={images[currentIndex]}
        alt="carousel"
        style={{
          width: "100%",
          height: "300px",
          objectFit: "cover",
        }}
      />

      <div style={{ marginTop: "10px" }}>
        <button onClick={prevSlide}>Previous</button>

        <button
          onClick={nextSlide}
          style={{ marginLeft: "10px" }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default ImageCarousel;