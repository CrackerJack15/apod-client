// Styles
import styles from "../../About.module.scss";
import typography from "../../../../styles/Typography.module.scss";

function Acknowledgment() {
  return (
    <section
      id="acknowledgement"
      className={`${styles.section} ${styles["section--reset"]}`}
    >
      <h2
        className={`${typography.headlineMedium} ${typography["headlineMedium--margin"]}`}
      >
        Acknowledgement
      </h2>
      <p className={`${typography.body} ${typography["body--margin"]}`}>
        The Astronomy Picture of the Day (APOD) is based upon work supported by
        NASA under award No. 80NSSC17M0076. Any opinions, findings, and
        conclusions or recommendations expressed in this material are those of
        the author(s) and do not necessarily reflect the views of the National
        Aeronautics and Space Administration.
      </p>
    </section>
  );
}

export default Acknowledgment;
