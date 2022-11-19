import { Link } from "react-router-dom";
import format from "date-fns/format";

// Styles
import styles from "./Card.module.scss";
import typography from "../../../../styles/Typography.module.scss";

const Card = ({ id, pageType, media, title, date }) => {
  if (!media) {
    return null;
  }

  const { lowResImage, videoURL } = media;

  return (
    <Link to={`/day/${id}`} className={styles.container}>
      <div>
        {pageType === "image" ? (
          <div className={styles["img-container"]}>
            <img src={lowResImage} alt={title} className={styles.img} />
          </div>
        ) : (
          <iframe
            width="218"
            height="218"
            src={videoURL}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
        <h2 className={`${typography.body} ${styles.title}`}>{title}</h2>
      </div>
      <p className={typography.labelMedium}>
        {format(new Date(date), "d MMMM, yyyy")}
      </p>
    </Link>
  );
};

export default Card;
