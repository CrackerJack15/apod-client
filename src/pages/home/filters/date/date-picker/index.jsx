import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

// Styles
import styles from "./DatePicker.module.scss";

// Context
import { MyContext } from "../../..";

function DatePicker({ toggleModal }) {
  const navigate = useNavigate();
  const { date, order, setDate, setUrl } = useContext(MyContext);

  const months = [
    ["Jan", "Feb", "Mar"],
    ["Apr", "May", "Jun"],
    ["Jul", "Aug", "Sep"],
    ["Oct", "Nov", "Dec"],
  ];

  const [localDate, setLocalDate] = useState(date);

  const previousYear = () =>
    setLocalDate((prev) => ({ ...prev, year: Number(prev.year) - 1 }));
  const nextYear = () =>
    setLocalDate((prev) => ({ ...prev, year: Number(prev.year) + 1 }));
  const setMonth = (value) =>
    setLocalDate((prev) => ({ ...prev, month: value }));

  const numericMonths = {
    Jan: "01",
    Feb: "02",
    Mar: "03",
    Apr: "04",
    May: "05",
    Jun: "06",
    Jul: "07",
    Aug: "08",
    Sep: "09",
    Oct: "10",
    Nov: "11",
    Dec: "12",
  };

  const onSubmit = () => {
    toggleModal();
    setDate(localDate);
    setUrl(
      `/archive/?order=${order}&month=${numericMonths[localDate.month]}&year=${
        localDate.year
      }`
    );
    navigate({
      pathname: "/",
      search: `?order=${order}&month=${numericMonths[localDate.month]}&year=${
        localDate.year
      }`,
    });
  };

  return (
    <div className={styles.container}>
      {/* Year Picker */}
      <div className={styles["year-picker"]}>
        <button className={styles["year-picker-button"]} onClick={previousYear}>
          <img src="/icons/chevron-left.svg" alt="left" />
        </button>
        <p className={styles.year}>{localDate.year}</p>
        <button className={styles["year-picker-button"]} onClick={nextYear}>
          <img src="/icons/chevron-right.svg" alt="right" />
        </button>
      </div>
      {/* Month Picker */}
      <div className={styles.months}>
        {months.map((line, index) => (
          <div key={index} className={styles.line}>
            {line.map((month) => {
              return (
                <button
                  key={month}
                  className={`${styles.month} ${
                    localDate.month === month ? styles.active : ""
                  } `}
                  onClick={() => setMonth(month)}
                >
                  {month}
                </button>
              );
            })}
          </div>
        ))}
      </div>
      {/* Submit Button */}
      <button className={styles["apply-button"]} onClick={onSubmit}>
        Apply
      </button>
    </div>
  );
}

export default DatePicker;
