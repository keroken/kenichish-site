import { useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import styles from './Gallery.module.css';
import { galleryData, galleryCategories } from '../../data/galleryData';
import type { GalleryCategory, GalleryItem } from '../../data/galleryData';
import { MediaItem } from '../MediaItem/MediaItem';
import { Modal } from '../Modal';

interface GalleryProps {
  menuOpen: boolean;
}

export const Gallery = ({ menuOpen }: GalleryProps) => {
  const location = useLocation();
  const currentPath = location.pathname.substring(1); // Remove leading slash
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [currentData, setCurrentData] = useState<GalleryItem[]>(galleryData);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [currentLayout, setCurrentLayout] = useState<
    GalleryCategory['layout'] | null
  >(null);
  const triggerElementRef = useRef<HTMLElement | null>(null);

  // Handle URL changes and trigger animations
  useEffect(() => {
    const category = galleryCategories.find(
      (item) => item.title === currentPath
    );
    if (category) {
      setCurrentLayout(category.layout);
    }
    // First fade out
    setIsVisible(false);

    // Update data after fade-out completes
    const dataTimer = setTimeout(() => {
      const newData = currentPath
        ? galleryData.filter((item) => item.category === currentPath)
        : galleryData.filter((item) => item.category === 'architecture');
      setCurrentData(newData);

      // Fade in with new data
      const fadeTimer = setTimeout(() => {
        setIsVisible(true);
      }, 50);

      return () => clearTimeout(fadeTimer);
    }, 300); // Give it time to fade out

    return () => clearTimeout(dataTimer);
  }, [currentPath]);

  useEffect(() => {
    if (modalOpen || menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [modalOpen, menuOpen]);

  const handleItemActivate = (item: GalleryItem, element: HTMLElement) => {
    if (item.url) {
      window.open(item.url, '_blank');
      return;
    }
    triggerElementRef.current = element;
    setSelectedItem(item);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    // Return focus to the triggering element after a short delay
    setTimeout(() => {
      if (triggerElementRef.current) {
        triggerElementRef.current.focus();
        triggerElementRef.current = null;
      }
    }, 100);
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLElement>,
    item: GalleryItem
  ) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleItemActivate(item, e.currentTarget);
    } else if (e.key === 'Escape' && modalOpen) {
      e.preventDefault();
      handleModalClose();
    }
  };

  return (
    <main className={styles.galleryContainer}>
      <div className={`${styles.gallery} ${isVisible ? styles.fadeIn : ''}`}>
        {currentData.map((item, index) => (
          <figure
            className={styles.galleryItem}
            key={`${item.src}-${index}`}
            tabIndex={0}
            role="button"
            aria-label={`Open ${item.title}`}
            onKeyDown={(e) => handleKeyDown(e, item)}
            onClick={(e) => {
              e.stopPropagation();
              handleItemActivate(item, e.currentTarget);
            }}
          >
            <div
              className={`${styles.imageBox} ${isVisible ? styles.fadeIn : ''}`}
              style={{ cursor: 'pointer' }}
            >
              <MediaItem item={item} layout={currentLayout || undefined} />
            </div>
            <figcaption className={styles.imageTitle}>{item.title}</figcaption>
          </figure>
        ))}
      </div>
      <Modal isOpen={modalOpen} onClose={handleModalClose}>
        {selectedItem && (
          <MediaItem
            item={selectedItem}
            modal
            layout={currentLayout || undefined}
          />
        )}
        {selectedItem && (
          <div className={styles.isModal} style={{ textAlign: 'center' }}>
            {selectedItem.title}
          </div>
        )}
      </Modal>
    </main>
  );
};
