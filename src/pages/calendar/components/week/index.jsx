// Styles
import styles from "./DaysOfTheWeek.module.scss";

function DaysOfTheWeek() {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  return (
    <div className={styles.container}>
      {days.map((day) => {
        return (
          <p key={day} className={styles.day}>
            {day}
          </p>
        );
      })}
    </div>
  );
}

export default DaysOfTheWeek;
