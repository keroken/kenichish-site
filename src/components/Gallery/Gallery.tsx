import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./Gallery.module.css";
import { galleryData } from "../../data/galleryData";

export const Gallery = () => {
  const location = useLocation();
  const currentPath = location.pathname.substring(1); // Remove leading slash
  const [isVisible, setIsVisible] = useState(false);
  const [currentData, setCurrentData] = useState(galleryData);

  // Handle URL changes and trigger animations
  useEffect(() => {
    // First fade out
    setIsVisible(false);

    // Update data after fade-out completes
    const dataTimer = setTimeout(() => {
      const newData = currentPath
        ? galleryData.filter((item) => item.category === currentPath)
        : galleryData;
      setCurrentData(newData);

      // Fade in with new data
      const fadeTimer = setTimeout(() => {
        setIsVisible(true);
      }, 50);

      return () => clearTimeout(fadeTimer);
    }, 300); // Give it time to fade out

    return () => clearTimeout(dataTimer);
  }, [currentPath]);

  return (
    <main className={styles.galleryContainer}>
      <div
        className={`${styles.gallery} ${isVisible ? styles.fadeIn : ""}`}
        style={{
          gridTemplateColumns:
            currentPath === "web" ? "repeat(2, 1fr)" : "repeat(5, 1fr)",
        }}
      >
        {currentData.map((image, index) => (
          <figure
            className={styles.galleryItem}
            key={`${image.src}-${index}`}
            style={{
              overflow: currentPath === "web" ? "unset" : "hidden",
            }}
          >
            <div
              className={`${styles.imageBox} ${isVisible ? styles.fadeIn : ""}`}
            >
              <img
                src={image.src}
                alt={image.alt || image.title}
                className={styles.image}
              />
            </div>
            <figcaption className={styles.imageTitle}>{image.title}</figcaption>
          </figure>
        ))}
      </div>
    </main>
  );
};
