// Styles
import styles from "./RadioButton.module.scss";
import typography from "../../../../../styles/Typography.module.scss";

const RadioButton = ({ value, order, orderHandler }) => {
  return (
    <li
      role="radio"
      aria-checked={order}
      tabIndex={0}
      className={styles.container}
      onClick={() => orderHandler(value)}
    >
      <div className={`${styles.checker} ${order ? styles.checked : ""}`}></div>
      <p className={typography.body}>
        {value[0].toUpperCase() + value.slice(1)}
      </p>
    </li>
  );
};

export default RadioButton;
