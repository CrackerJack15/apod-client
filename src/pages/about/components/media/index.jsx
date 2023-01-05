// Styles
import styles from "./Media.module.scss";

function Media({ name, img, className, link, maintainers }) {
  return (
    <div className={styles.container}>
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className={styles.background}
      >
        <div className={`${styles["img-container"]} ${styles[className]}`}>
          <img src={img} alt={name} />
        </div>
        <div className={styles["title-container"]}>
          <p className={styles.title}>{name}</p>
          <img
            className={styles["title-arrow"]}
            src="/icons/right-arrow.svg"
            alt="right arrow"
          />
        </div>
      </a>
      <div className={styles["top-links"]}>
        {maintainers.map(({ name, link }) => {
          return (
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              key={name}
              className={styles.subtitle}
            >
              {name}
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default Media;
