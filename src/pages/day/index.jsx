import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

// Components
import Image from "./image";
import Info from "./info";
import Recommended from "./recommended";

// Styles
import styles from "./Day.module.scss";

// API
import { endpoint } from "../../api/endpoint";

function Day() {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async (id) => {
    setIsLoading(true);
    try {
      const response = await fetch(`${endpoint}/day/${id}`);
      const data = await response.json();
      setData(data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData(id);
  }, [id]);

  if (isLoading) return null;

  if (error) return null;

  return (
    <main className={styles.main}>
      <Helmet>
        <title>{data?.title}</title>
      </Helmet>
      <Image {...data} />
      <div className={styles.divider} />
      <Info {...data} />
      <Recommended date={data.date} />
    </main>
  );
}

export default Day;
