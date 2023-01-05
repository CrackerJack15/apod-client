import { useState, useContext } from "react";

// Components
import DatePicker from "./date-picker";

// Styles
import styles from "./Date.module.scss";

// Context
import { MyContext } from "../..";

const Date = () => {
  const { formattedDate } = useContext(MyContext);

  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <div className={styles.container}>
      <div tabIndex={0} className={styles["date-picker"]} onClick={toggleModal}>
        <div className={styles.picker}>
          <img src="/icons/calendar.svg" alt="calendar" />
          <p className={styles.date}>{formattedDate}</p>
        </div>
        <img className={styles.chevron} src="/icons/date-chevron.svg" alt="chevron" />
      </div>
      {isOpen ? <DatePicker toggleModal={toggleModal} /> : null}
    </div>
  );
};

export default Date;
