import { useContext } from "react";
import { useNavigate } from "react-router-dom";

// Styles
import styles from "./Dropdown.module.scss";

// Context
import { MyContext } from "../../..";

function Drowdown() {
  const navigate = useNavigate();
  const { date, order, setUrl, setOrder } = useContext(MyContext);

  const numericMonths = {
    Jan: "01",
    Feb: "02",
    Mar: "03",
    Apr: "04",
    May: "05",
    Jun: "06",
    Jul: "07",
    Aug: "08",
    Sep: "09",
    Oct: "10",
    Nov: "11",
    Dec: "12",
  };

  const onSubmit = (value) => {
    setOrder(value);
    setUrl(
      `/archive/?order=${value}&month=${numericMonths[date.month]}&year=${
        date.year
      }`
    );
    navigate({
      pathname: "/",
      search: `?order=${value}&month=${numericMonths[date.month]}&year=${
        date.year
      }`,
    });
  };

  return (
    <div className={styles.container}>
      <ul role="radiogroup" aria-labelledby="radio-label">
        <li
          role="radio"
          aria-checked={order === "ascending"}
          tabIndex={0}
          className={stateChecker(order, "ascending")}
          onClick={() => onSubmit("ascending")}
        >
          <span>Ascending</span>
        </li>
        <li
          role="radio"
          aria-checked={order === "descending"}
          tabIndex={0}
          className={stateChecker(order, "descending")}
          onClick={() => onSubmit("descending")}
        >
          <span>Descending</span>
        </li>
      </ul>
    </div>
  );
}

function stateChecker(order, state) {
  return `${styles.option} ${order === state ? styles.active : ""} `;
}

export default Drowdown;
