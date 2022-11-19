// Styles
import styles from "./DaysOfTheWeek.module.scss";
import typography from "../../../../styles/Typography.module.scss";

function DaysOfTheWeek() {
  const days = [
    "MONDAY",
    "TUESDAY",
    "WEDNESDAY",
    "THURSDAY",
    "FRIDAY",
    "SATURDAY",
    "SUNDAY",
  ];

  return (
    <div className={styles.container}>
      {days.map((day) => {
        return (
          <p key={day} className={`${typography.labelLarge} ${styles.day}`}>
            {day}
          </p>
        );
      })}
    </div>
  );
}

export default DaysOfTheWeek;
