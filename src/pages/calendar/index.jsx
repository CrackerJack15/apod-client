import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useSearchParams } from "react-router-dom";

// Components
import Years from "./components/years/Years";
import Months from "./components/months/Months";
import Card from "./components/card/Card";
import DaysOfTheWeek from "./components/week/DaysOfTheWeek";
import Placeholder from "./components/placeholder/Placeholder";

// Styles
import styles from "./Calendar.module.scss";

// Helpers
import { createDate, createMonthMatrix } from "./helpers/helpers";

// API
import { endpoint } from "../../api/endpoint";

const Calendar = () => {
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
      <section className={styles.pickers}>
        <Years year={date.year} setYear={onSubmit} />
        <Months month={date.month} setMonth={onSubmit} />
        <DaysOfTheWeek />
      </section>
      <Data date={date} />
    </main>
  );
};

function Data({ date }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setError(null);
    setIsLoading(true);

    const fetchData = async (date) => {
      try {
        const response = await fetch(
          `${endpoint}/calendar?year=${date.year}&month=${date.month}`
        );
        const data = await response.json();
        const matrix = createMonthMatrix(data);
        setData(matrix);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData(date);
  }, [date]);

  if (isLoading) return null;

  if (error) return null;

  return (
    <section>
      {data.map((week, i) => {
        return (
          <div className={styles.container} key={i}>
            {week.map((day) => {
              if (!day) return <Placeholder />;
              return <Card key={day.id} {...day} />;
            })}
          </div>
        );
      })}
    </section>
  );
}

export default Calendar;
