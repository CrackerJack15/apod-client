import { Link } from "react-router-dom";

// Styles
import styles from "./Card.module.scss";

const Card = ({ id, pageType, media, title }) => {
  if (!media) return null;

  const { lowResImage, videoURL } = media;

  return (
    <Link to={`/day/${id}`} className={styles.container}>
      {pageType === "image" ? (
        <img src={lowResImage} alt={title} className={styles.img} />
      ) : (
        <iframe
          className={styles.frame}
          src={videoURL}
          title="YouTube video player"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
      <div className={styles.overlay}>
        <h3 className={styles.title}>{title}</h3>
      </div>
    </Link>
  );
};

export default Card;
