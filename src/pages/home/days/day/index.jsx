import { Link } from "react-router-dom";
import { format } from "date-fns";

// Styles
import styles from "./Day.module.scss";

const Day = ({ id, title, date, pageType, media }) => {
  const formattedDate = format(new Date(date), "d MMMM, yyyy");

  if (!media) {
    return null;
  }

  const { lowResImage, videoURL } = media;

  return (
    <Link to={`/day/${id}`} className={styles.container}>
      <div className={styles["img-container"]}>
        {pageType === "image" ? (
          <img src={lowResImage} alt={title} className={styles.img} />
        ) : (
          <iframe
            className={styles.frame}
            width="290"
            height="290"
            src={videoURL}
            title="YouTube video player"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </div>
      <div className={styles.overlay}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.date}>{formattedDate}</p>
      </div>
    </Link>
  );
};

export default Day;
