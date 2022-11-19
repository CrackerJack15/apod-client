import { format } from "date-fns";

// Components
import Day from "./day/Day";

// Styles
import styles from "./Days.module.scss";
import typography from "../../../styles/Typography.module.scss";

// Data
import { months } from "../../../data/data";

const Days = ({ date, days, isLoading }) => {
  const formattedDate = format(
    new Date(`${date.year}-${months[date.month]}-01`),
    "MMMM, yyyy"
  );

  const items = days?.map((day) => {
    return <Day key={day.id} {...day} />;
  });

  return (
    <section className={styles.container}>
      <h2 className={typography.headlineMedium}>{formattedDate}</h2>
      <div className={styles["days-container"]}>
        {isLoading ? <h2>Loading...</h2> : items}
      </div>
    </section>
  );
};

export default Days;
