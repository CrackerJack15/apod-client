import { useState } from "react";

// Components
import Dropdown from "./dropdown";

// Styles
import styles from "./Order.module.scss";

const Order = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <div className={styles.container} onClick={toggleModal} tabIndex={0}>
      <img src="/icons/sort.svg" alt="sort" />
      <span className={styles.text}>Sort</span>
      {isOpen ? <Dropdown /> : null}
    </div>
  );
};

export default Order;
