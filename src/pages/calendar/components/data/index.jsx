import { useState, useEffect } from "react";

// Components
import Card from "../card";
import Placeholder from "../placeholder";

// Styles
import styles from "./Data.module.scss";

// Helpers
import { createMonthMatrix } from "../../helpers";

// API
import { endpoint } from "../../../../api/endpoint";

function Data({ date }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async (date) => {
    setError(null);
    setIsLoading(true);
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

  useEffect(() => {
    fetchData(date);
  }, [date]);

  if (isLoading) return null;

  if (error) return null;

  return (
    <section className={styles.container}>
      {data.map((week, i) => {
        return (
          <div className={styles["content-container"]} key={i}>
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

export default Data;
