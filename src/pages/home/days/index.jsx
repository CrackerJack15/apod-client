import { useState, useEffect } from "react";

// Components
import Day from "./day";

// Styles
import styles from "./Days.module.scss";

// API
import { endpoint } from "../../../api/endpoint";

const Days = ({ url }) => {
  const [archive, setArchive] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchDays = async (url) => {
    setIsLoading(true);
    try {
      const response = await fetch(`${endpoint}${url}`);
      const archive = await response.json();
      setArchive(archive);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchDays(url);
  }, [url]);

  const items = archive?.map((day) => {
    return <Day key={day.id} {...day} />;
  });

  return (
    <section className={styles.container}>
      <div className={styles["days-container"]}>
        {isLoading ? <h2>Loading...</h2> : items}
      </div>
    </section>
  );
};

export default Days;
