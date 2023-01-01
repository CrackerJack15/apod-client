import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// Components
import Image from "./image/Image";
import Info from "./info/Info";
import Recommended from "./recommended/Recommended";

// Styles
import styles from "./Day.module.scss";

// API
import { endpoint } from "../../api/endpoint";

const Day = () => {
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
      <div className={styles.container}>
        <Image pageType={data.pageType} media={data.media} title={data.title} />
        <Info {...data} />
      </div>
      <Recommended date={data.date} />
    </main>
  );
};

export default Day;
