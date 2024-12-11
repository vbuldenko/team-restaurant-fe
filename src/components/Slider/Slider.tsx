import React, { useState } from "react";
import "./Slider.scss";

interface SliderProps {
  images: string[];
}

const Slider: React.FC<SliderProps> = ({ images }) => {
  const [backgroundImage, setBackgroundImage] = useState(images[0]);
  const [thumbnails, setThumbnails] = useState(images.slice(1));
  const [transitioningImage, setTransitioningImage] = useState<string | null>(
    null
  );
  const [thumbnailStyle, setThumbnailStyle] =
    useState<React.CSSProperties | null>(null);

  const handleThumbnailClick = (index: number, event: React.MouseEvent) => {
    const target = event.currentTarget as HTMLElement;
    const rect = target.getBoundingClientRect();

    // Set the transitioning image with its initial position and size
    setThumbnailStyle({
      position: "fixed",
      top: rect.top,
      left: rect.left,
      width: rect.width,
      height: rect.height,
      backgroundImage: `url(${thumbnails[index]})`,
    });
    setTransitioningImage(thumbnails[index]);

    // Animate and update state after transition
    setTimeout(() => {
      setBackgroundImage(thumbnails[index]);
      setThumbnails((prev) => [
        ...prev.slice(0, index),
        ...prev.slice(index + 1),
        backgroundImage,
      ]);
      setTransitioningImage(null);
      setThumbnailStyle(null);
    }, 1000); // Match CSS animation duration
  };

  return (
    <div className="slider">
      <div
        className="slider__background"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
      <div className="slider__thumbnails">
        {thumbnails.map((image, index) => (
          <div
            key={index}
            className="slider__thumbnail"
            onClick={(e) => handleThumbnailClick(index, e)}
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        ))}
      </div>
      {transitioningImage && (
        <div
          className="slider__transition-image"
          style={{
            ...thumbnailStyle,
            animation: "scaleToFullScreen 1s ease forwards",
          }}
        ></div>
      )}
    </div>
  );
};

export default Slider;
