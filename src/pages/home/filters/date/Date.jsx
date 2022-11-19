// Styles
import styles from "./Date.module.scss";
import typography from "../../../../styles/Typography.module.scss";

// Helpers
import MonthDropdown from "../dropdowns/month/MonthDropdown";
import YearDropdown from "../dropdowns/year/YearDropdown";

const Date = ({ year, month, monthHandler, yearHandler }) => {
  return (
    <div>
      <p className={`${typography.body} ${styles.margin}`}>DATE</p>
      <div className={styles["dropdown-container"]}>
        <MonthDropdown selectedItem={month} monthHandler={monthHandler} />
        <YearDropdown selectedItem={year} yearHandler={yearHandler} />
      </div>
    </div>
  );
};

export default Date;
