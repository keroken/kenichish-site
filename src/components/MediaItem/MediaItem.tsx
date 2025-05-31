import type { GalleryItem } from "../../data/galleryData";
import styles from "./MediaItem.module.css";

interface MediaItemProps {
  item: GalleryItem;
}

export const MediaItem: React.FC<MediaItemProps> = ({ item }) => {
  // Check if the item is a YouTube video
  const isYouTubeVideo = item.type === "video";

  if (isYouTubeVideo) {
    // Extract YouTube video ID from URL
    const getYouTubeId = (url: string): string => {
      if (url.includes("youtu.be/")) {
        // Handle youtu.be format
        const parts = url.split("youtu.be/");
        return parts[1]?.split("?")[0] || "";
      }

      // Handle youtube.com format
      const match = url.match(
        /(?:youtube\.com\/(?:[^/\n\s]+\/\s*[^/\n\s]+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
      );
      return match ? match[1] : "";
    };

    const videoId = getYouTubeId(item.src);
    // Make sure we have a valid ID before creating embed URL
    const embedUrl = videoId ? `https://www.youtube.com/embed/${videoId}` : "";

    if (!embedUrl) {
      console.error("Invalid YouTube URL:", item.src);
      return <div className={styles.videoError}>Invalid video URL</div>;
    }

    return (
      <div className={styles.videoWrapper}>
        <iframe
          width="100%"
          height="100%"
          src={embedUrl}
          title={item.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    );
  } else {
    // Regular image
    return (
      <img
        src={item.src}
        alt={item.alt || item.title}
        className={styles.image}
      />
    );
  }
};
