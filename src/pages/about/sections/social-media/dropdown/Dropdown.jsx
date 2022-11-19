import { useState } from "react";

// Components
import DropdownItem from "./DropdownItem";

// Styles
import styles from "./Dropdown.module.scss";
import typography from "../../../../../styles/Typography.module.scss";

// Assets
import plus from "../../../../../assets/icons/plus.svg";

const Dropdown = ({ img, title, data }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className={styles.container}>
      <div className={styles.outer} onClick={toggle}>
        <div className={styles.inner}>
          <img src={img} alt={title} className={styles.logo} />
          <h3 className={typography.headlineSmall}>{title}</h3>
        </div>
        <img
          src={plus}
          alt="plus"
          className={`${styles.plus} ${isOpen ? styles.active : ""}`}
        />
      </div>
      <div
        className={`${styles["data-container"]} ${
          isOpen ? styles["open"] : ""
        }`}
      >
        {data?.map((item) => {
          return <DropdownItem key={item.name} {...item} />;
        })}
      </div>
    </div>
  );
};

export default Dropdown;
