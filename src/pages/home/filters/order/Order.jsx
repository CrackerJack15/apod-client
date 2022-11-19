// Components
import RadioButton from "./radio-button/RadioButton";

// Styles
import styles from "./Order.module.scss";
import typography from "../../../../styles/Typography.module.scss";

const Order = ({ order, orderHandler }) => {
  return (
    <div className={styles.container}>
      <p className={`${typography.body} ${styles.margin}`}>ORDER</p>
      <ul role="radiogroup" aria-labelledby="radio-label">
        <RadioButton
          value="ascending"
          order={order === "ascending"}
          orderHandler={orderHandler}
        />
        <RadioButton
          value="descending"
          order={order === "descending"}
          orderHandler={orderHandler}
        />
      </ul>
    </div>
  );
};

export default Order;
