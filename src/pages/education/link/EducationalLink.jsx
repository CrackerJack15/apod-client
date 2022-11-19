// Styles
import styles from "./EducationalLink.module.scss";
import typography from "../../../styles/Typography.module.scss";

// Assets
import arrowLink from "../../../assets/icons/arrow-link.svg";

function EducationalLink({ link, title, description }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className={styles.container}
    >
      <div className={styles.top}>
        <h2 className={`${typography.headlineSmall} ${styles.title}`}>
          {title}
        </h2>
        <p className={`${typography.labelMedium} ${styles.text}`}>
          {description}
        </p>
      </div>
      <img src={arrowLink} alt="arrow" />
    </a>
  );
}

export default EducationalLink;
