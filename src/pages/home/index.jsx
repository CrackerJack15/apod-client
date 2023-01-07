import { useState, createContext } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { format } from "date-fns";

// Components
import Filters from "./filters";
import Days from "./days";

// Styles
import styles from "./Home.module.scss";

// Data
import { months } from "../../data/data";

export const MyContext = createContext("");

function Home() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

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
  const [order, setOrder] = useState("ascending");
  const [url, setUrl] = useState(
    `/archive/?order=${order}&month=${months[date.month]}&year=${date.year}`
  );

  const formattedDate = format(
    new Date(`${date.year}-${months[date.month]}-01`),
    "MMMM, yyyy"
  );

  return (
    <main className={styles.main}>
      <Helmet>
        <title>Astronomy Picture of the Day</title>
      </Helmet>
      <MyContext.Provider
        value={{ date, order, formattedDate, setDate, setUrl, setOrder }}
      >
        <Top formattedDate={formattedDate} />
        <Filters />
        <Days url={url} />
      </MyContext.Provider>
    </main>
  );
}

function Top({ formattedDate }) {
  return (
    <section className={styles.top}>
      <h1 className={styles.title}>{formattedDate}</h1>
      <div className={styles["text-container"]}>
        <p className={styles.text}>
          Discover the cosmos! Each day a different image or photograph of our
          fascinating universe is featured, along with a brief explanation
          written by a professional astronomer.
        </p>
      </div>
    </section>
  );
}

export default Home;
