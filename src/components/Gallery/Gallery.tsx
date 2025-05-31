import { useLocation } from "react-router-dom";
import styles from "./Gallery.module.css";
import { galleryData } from "../../data/galleryData";

export const Gallery = () => {
  const location = useLocation();
  const currentPath = location.pathname.substring(1); // Remove leading slash

  // Filter gallery data based on URL path
  const filteredData = currentPath
    ? galleryData.filter((item) => item.category === currentPath)
    : galleryData;

  return (
    <main className={styles.galleryContainer}>
      <div
        className={styles.gallery}
        style={{
          gridTemplateColumns:
            currentPath === "web" ? "repeat(2, 1fr)" : "repeat(5, 1fr)",
        }}
      >
        {filteredData.map((image, index) => (
          <figure
            className={styles.galleryItem}
            key={index}
            style={{
              overflow: currentPath === "web" ? "unset" : "hidden",
            }}
          >
            <div className={styles.imageBox}>
              <img
                key={index}
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
