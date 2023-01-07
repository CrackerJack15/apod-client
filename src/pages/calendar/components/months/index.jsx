// Styles
import styles from "./Months.module.scss";

function Months({ month, setMonth }) {
  const monthsArray = [
    { number: "01", name: "January" },
    { number: "02", name: "February" },
    { number: "03", name: "March" },
    { number: "04", name: "April" },
    { number: "05", name: "May" },
    { number: "06", name: "June" },
    { number: "07", name: "July" },
    { number: "08", name: "August" },
    { number: "09", name: "September" },
    { number: "10", name: "October" },
    { number: "11", name: "November" },
    { number: "12", name: "December" },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.months}>
        {monthsArray.map(({ number, name }) => {
          return (
            <button
              key={number}
              className={`${styles.button} ${
                number === month ? styles.active : ""
              }`}
              onClick={() => setMonth("month", number)}
            >
              {name}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Months;
