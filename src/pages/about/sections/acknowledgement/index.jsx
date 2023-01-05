// Styles
import styles from "../../About.module.scss";

function Acknowledgment() {
  return (
    <section id="acknowledgement" className={styles.section}>
      <h2 className={styles.title}>Acknowledgement</h2>
      <div className={styles.content}>
        <p className={styles.text}>
          The Astronomy Picture of the Day (APOD) is based upon work supported
          by NASA under award No. 80NSSC17M0076. Any opinions, findings, and
          conclusions or recommendations expressed in this material are those of
          the author(s) and do not necessarily reflect the views of the National
          Aeronautics and Space Administration.
        </p>
      </div>
    </section>
  );
}

export default Acknowledgment;
