import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./Gallery.module.css";
import { galleryData } from "../../data/galleryData";
import type { GalleryItem } from "../../data/galleryData";
import { MediaItem } from "../MediaItem/MediaItem";

export const Gallery: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname.substring(1); // Remove leading slash
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [currentData, setCurrentData] = useState<GalleryItem[]>(galleryData);

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
      <div className={`${styles.gallery} ${isVisible ? styles.fadeIn : ""}`}>
        {currentData.map((item, index) => (
          <figure
            className={styles.galleryItem}
            key={`${item.src}-${index}`}
            style={{
              overflow: currentPath === "web" ? "unset" : "hidden",
            }}
          >
            <div
              className={`${styles.imageBox} ${isVisible ? styles.fadeIn : ""}`}
            >
              <MediaItem item={item} />
            </div>
            <figcaption className={styles.imageTitle}>{item.title}</figcaption>
          </figure>
        ))}
      </div>
    </main>
  );
};
