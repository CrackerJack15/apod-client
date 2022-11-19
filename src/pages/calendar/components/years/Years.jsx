// Styles
import styles from "./Years.module.scss";

// Helpers
import { createYearsArray } from "../../../../helpers/functions";

function Years({ year, setYear }) {
  const yearsArray = createYearsArray();

  return (
    <div className={styles.container}>
      <div className={styles.years}>
        {yearsArray.map((item) => {
          return (
            <button
              key={item}
              className={`${styles.button} ${
                item == year ? styles.active : ""
              }`}
              onClick={() => setYear("year", item)}
            >
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Years;
