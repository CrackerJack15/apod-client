import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useSearchParams } from "react-router-dom";

// Components
import Years from "./components/years";
import Months from "./components/months";
import Data from "./components/data";

import DaysOfTheWeek from "./components/week";

// Styles
import styles from "./Calendar.module.scss";

// Helpers
import { createDate } from "./helpers";

function Calendar() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [date, setDate] = useState(createDate(searchParams));

  const onSubmit = (type, value) => {
    if (type === "year") {
      setDate((state) => ({ ...state, year: value }));
      setSearchParams({ year: value, month: date.month });
    } else {
      setDate((state) => ({ ...state, month: value }));
      setSearchParams({ year: date.year, month: value });
    }
  };

  return (
    <main>
      <Helmet>
        <title>Calendar</title>
      </Helmet>
      <section className={styles.top}>
        <h1 className={styles.title}>Calendar</h1>
        <div className={styles["date-picker-container"]}>
          <Years year={date.year} setYear={onSubmit} />
          <Months month={date.month} setMonth={onSubmit} />
        </div>
      </section>
      <section className={styles.calendar}>
        <DaysOfTheWeek />
        <Data date={date} />
      </section>
    </main>
  );
}

export default Calendar;
