import { useState } from "react";

// Styles
import styles from "./Dropdown.module.scss";

// Assets
import chevron from "../../../../../assets/icons/chevron.svg";

const MonthDropdown = ({ selectedItem, monthHandler }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return (
    <div>
      <button type="button" className={styles.dropdown} onClick={toggle}>
        {selectedItem} <img src={chevron} alt="chevron" />
      </button>
      {isOpen ? (
        <ul role="listbox" tabIndex={-1} className={styles.listbox}>
          {months.map((item) => (
            <li
              role="option"
              aria-selected
              tabIndex={0}
              key={item}
              className={styles.option}
              onClick={() => {
                monthHandler(item);
                toggle();
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};
export default MonthDropdown;
