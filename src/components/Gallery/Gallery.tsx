import styles from "./Gallery.module.css";
import { galleryData } from "../../data/galleryData"; // Assuming you have a data file with gallery images

export const Gallery = () => {
  return (
    <main className={styles.galleryContainer}>
      <div className={styles.gallery}>
        {galleryData.map((image, index) => (
          <figure className={styles.galleryItem} key={index}>
            <div className={styles.imageBox}>
              <img
                key={index}
                src={image.src}
                alt={image.alt}
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
