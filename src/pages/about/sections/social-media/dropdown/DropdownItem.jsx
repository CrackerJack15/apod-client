import React from "react";

// Components
import OuterLink from "../../../../../components/links/OuterLink";

// Styles
import styles from "./DropdownItem.module.scss";

function DropdownItem({ name, link, maintainers }) {
  return (
    <div className={styles.container}>
      <OuterLink link={link} text={name} />
      <p>
        {maintainers.map(({ link, name }, i) => {
          return (
            <React.Fragment key={link}>
              <OuterLink link={link} text={name} />
              <span className={styles.comma}>
                {i === maintainers.length - 1 ? "" : ", "}
              </span>
            </React.Fragment>
          );
        })}
      </p>
    </div>
  );
}

export default DropdownItem;
