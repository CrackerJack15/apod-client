// Styles
import styles from "./EducationalLink.module.scss";

function EducationalLink({ link, title, icon, description }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className={styles.container}
    >
      <div className={styles.information}>
        <div className={styles.icon}>
          <span>{icon}</span>
        </div>
        <div className={styles["meta-container"]}>
          <h2 className={styles.title}>{title}</h2>
          <div className={styles["text-container"]}>
            <p className={styles.text}>{description}</p>
          </div>
        </div>
      </div>
      <div className={styles["learn-more"]}>
        <span>Learn more</span>
        <img src="/icons/blue-chevron.svg" alt="chevron" />
      </div>
    </a>
  );
}

export default EducationalLink;
