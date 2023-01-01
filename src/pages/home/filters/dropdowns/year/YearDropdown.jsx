import { useState } from "react";

// Styles
import styles from "./Dropdown.module.scss";

// Helpers
import { createYearsArray } from "../../../../../helpers/functions";

const YearDropdown = ({ selectedItem, yearHandler }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const years = createYearsArray();

  return (
    <div>
      <button type="button" className={styles.dropdown} onClick={toggle}>
        {selectedItem} <img src="/icons/chevron.svg" alt="chevron" />
      </button>
      {isOpen ? (
        <ul role="listbox" tabIndex={-1} className={styles.listbox}>
          {years.map((item) => (
            <li
              role="option"
              aria-selected
              tabIndex={0}
              key={item}
              className={styles.option}
              onClick={() => {
                yearHandler(item);
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
export default YearDropdown;
