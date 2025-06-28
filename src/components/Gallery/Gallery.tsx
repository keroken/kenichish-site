import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./Gallery.module.css";
import { galleryData } from "../../data/galleryData";
import type { GalleryItem } from "../../data/galleryData";
import { MediaItem } from "../MediaItem/MediaItem";
import { Modal } from "../Modal";

export const Gallery: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname.substring(1); // Remove leading slash
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [currentData, setCurrentData] = useState<GalleryItem[]>(galleryData);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

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
            tabIndex={0}
            role="button"
            aria-label={`Open ${item.title}`}
          >
            <div
              className={`${styles.imageBox} ${isVisible ? styles.fadeIn : ""}`}
              onClick={(e) => {
                e.stopPropagation();
                setSelectedItem(item);
                setModalOpen(true);
              }}
              style={{ cursor: 'pointer' }}
            >
              <MediaItem item={item} />
            </div>
            <figcaption className={styles.imageTitle}>{item.title}</figcaption>
          </figure>
        ))}
      </div>
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        {selectedItem && <MediaItem item={selectedItem} modal />}
        {selectedItem && <div className={styles.isModal} style={{textAlign: 'center'}}>{selectedItem.title}</div>}
      </Modal>
    </main>
  );
};
