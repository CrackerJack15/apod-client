import { Link } from "react-router-dom";
import format from "date-fns/format";

// Styles
import styles from "./Card.module.scss";

const Card = ({ id, pageType, media, title, date }) => {
  if (!media) {
    return null;
  }

  const { lowResImage, videoURL } = media;

  return (
    <Link to={`/day/${id}`} className={styles.container}>
      <div>
        {pageType === "image" ? (
          <img src={lowResImage} alt={title} className={styles.img} />
        ) : (
          <iframe
            className={styles.iframe}
            src={videoURL}
            title="YouTube video player"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </div>
      <div className={styles.overlay}>
        <h2 className={styles.title}>{title}</h2>
      </div>
    </Link>
  );
};

export default Card;
