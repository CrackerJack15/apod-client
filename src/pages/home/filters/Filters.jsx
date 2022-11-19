import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Components
import Order from "./order/Order";
import Date from "./date/Date";

// Styles
import styles from "./Filters.module.scss";
import typography from "../../../styles/Typography.module.scss";

// Data
import { months } from "../../../data/data";

// API
import { endpoint } from "../../../api/endpoint";

function Filters({ date, setDate, setUrl }) {
  const navigate = useNavigate();

  const [order, setOrder] = useState("ascending");
  const [month, setMonth] = useState(date.month);
  const [year, setYear] = useState(date.year);

  const orderHandler = (value) => setOrder(value);

  const monthHandler = (value) => {
    setMonth(value);
  };

  const yearHandler = (value) => {
    setYear(value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setDate({ month, year });
    setUrl(
      `${endpoint}/archive/?order=${order}&month=${months[month]}&year=${year}`
    );
    navigate({
      pathname: "/",
      search: `?order=${order}&month=${months[month]}&year=${year}`,
    });
  };

  return (
    <form className={styles.container}>
      <h3 className={typography.headlineSmall}>FILTERS</h3>
      <div>
        <Order order={order} orderHandler={orderHandler} />
        <Date
          year={year}
          month={month}
          monthHandler={monthHandler}
          yearHandler={yearHandler}
        />
        <button type="submit" className={styles.button} onClick={onSubmit}>
          APPLY
        </button>
      </div>
    </form>
  );
}

export default Filters;
