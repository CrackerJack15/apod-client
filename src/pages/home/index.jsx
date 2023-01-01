import { useState, useEffect } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { format } from "date-fns";

// Components
import Filters from "./filters/Filters";
import Days from "./days/Days";

// Styles
import styles from "./Home.module.scss";

// Data
import { months } from "../../data/data";

// API
import { endpoint } from "../../api/endpoint";

function Home() {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  let year;
  let month;

  if (location.search === "") {
    year = format(new window.Date(), "yyyy");
    month = format(new window.Date(), "MMM");
  } else {
    year = searchParams.get("year");
    month = months[searchParams.get("month")];
  }

  const [date, setDate] = useState({ year, month });
  const [url, setUrl] = useState(
    `${endpoint}/archive/?order=ascending&month=${months[date.month]}&year=${
      date.year
    }`
  );

  const [archive, setArchive] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchDays = async (url) => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
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

  return (
    <main className={styles.main}>
      <Filters date={date} setDate={setDate} setUrl={setUrl} />
      <Days date={date} days={archive} isLoading={isLoading} />
    </main>
  );
}

export default Home;
