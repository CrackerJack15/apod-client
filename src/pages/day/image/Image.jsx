// Styles
import styles from "./Image.module.scss";

const Image = ({ title, pageType, media }) => {
  const { highResImage, videoURL } = media;

  return (
    <section className={styles.container}>
      <div>
        {pageType === "image" ? (
          <img src={highResImage} alt={title} className={styles.img} />
        ) : (
          <iframe
            width="930"
            height="523"
            src={videoURL}
            title="YouTube video player"
            frameBorder="0"
            
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </div>
    </section>
  );
};

export default Image;
