import { Link } from "react-router-dom";

// Styles
import styles from "./Image.module.scss";

// Helpers
import { createDayURL } from "../../../helpers/functions";

const Image = ({ date, title, pageType, media }) => {
  const { highResImage, videoURL } = media;

  return (
    <section className={styles.container}>
      <div className={styles["button-container"]}>
        <Link to={`/day/${createDayURL(date, -1)}`} className={styles.button}>
          <img src="/icons/chevron-left-blue.svg" alt="left" />
        </Link>
      </div>

      {/* Image or video */}
      <div className={styles["img-container"]}>
        {pageType === "image" ? (
          <img src={highResImage} alt={title} className={styles.img} />
        ) : (
          <iframe
            width="930"
            height="523"
            src={videoURL}
            title="YouTube video player"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </div>

      <div className={styles["button-container"]}>
        <Link to={`/day/${createDayURL(date, 1)}`} className={styles.button}>
          <img src="/icons/chevron-right-blue.svg" alt="right" />
        </Link>
      </div>
    </section>
  );
};

export default Image;
