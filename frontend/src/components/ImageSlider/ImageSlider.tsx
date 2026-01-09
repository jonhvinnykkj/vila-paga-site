import { useState, useEffect, useCallback } from 'react';
import './ImageSlider.css';

interface ImageSliderProps {
  images: string[];
  alt: string;
  autoPlay?: boolean;
  interval?: number;
}

const ImageSlider = ({ images, alt, autoPlay = false, interval = 4000 }: ImageSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (autoPlay && images.length > 1) {
      const timer = setInterval(nextSlide, interval);
      return () => clearInterval(timer);
    }
  }, [autoPlay, interval, nextSlide, images.length]);

  if (images.length === 0) {
    return null;
  }

  if (images.length === 1) {
    return (
      <div className="image-slider single">
        <img src={images[0]} alt={alt} loading="lazy" />
      </div>
    );
  }

  return (
    <div className="image-slider">
      <div className="slider-track" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div key={index} className="slide">
            <img src={image} alt={`${alt} ${index + 1}`} loading="lazy" />
          </div>
        ))}
      </div>

      <button
        className="slider-btn slider-btn-prev"
        onClick={(e) => {
          e.stopPropagation();
          prevSlide();
        }}
        aria-label="Anterior"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      <button
        className="slider-btn slider-btn-next"
        onClick={(e) => {
          e.stopPropagation();
          nextSlide();
        }}
        aria-label="Próximo"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>

      <div className="slider-dots">
        {images.map((_, index) => (
          <button
            key={index}
            className={`slider-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={(e) => {
              e.stopPropagation();
              setCurrentIndex(index);
            }}
            aria-label={`Ir para imagem ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
