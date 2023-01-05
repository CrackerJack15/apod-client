// Styles
import styles from "./OuterLink.module.scss";

function OuterLink({ link, text }) {
  return (
    <a href={link} target="_blank" rel="noreferrer" className={styles.link}>
      {text}
    </a>
  );
}

export default OuterLink;
