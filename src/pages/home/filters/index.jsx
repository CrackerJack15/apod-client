// Components
import Date from "./date";
import Order from "./order";

// Styles
import styles from "./Filters.module.scss";

function Filters() {
  return (
    <section className={styles.container}>
      <Date />
      <Order />
    </section>
  );
}

export default Filters;
