import { useState, useEffect } from "react";

// Components
import Card from "./card";

// Styles
import styles from "./Recommended.module.scss";

// Helpers
import {
  createRecommendedURL,
  createRecommendedDates,
} from "../../../helpers/functions";

const Recommended = ({ date }) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const dates = createRecommendedDates(date);
  const url = createRecommendedURL(dates);

  const fetchData = async (url) => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, [date]);

  if (isLoading) return null;

  if (error) return null;

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Recommended</h2>
      <div className={styles.content}>
        {isLoading
          ? "Loading..."
          : data.map((day) => {
              return <Card key={day.id} {...day} />;
            })}
      </div>
    </div>
  );
};

export default Recommended;
