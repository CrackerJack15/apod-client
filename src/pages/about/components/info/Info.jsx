import React from "react";

// Components
import OuterLink from "../../../../components/links/OuterLink";

// Styles
import styles from "./Info.module.scss";
import typography from "../../../../styles/Typography.module.scss";

function Info({ name, link, maintainers }) {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h3 className={`${typography.body} ${styles.title}`}>{name}</h3>
        <OuterLink link={link} text={name} />
      </div>
      <div>
        {maintainers?.map(({ link, name }, i) => {
          return (
            <React.Fragment key={link}>
              <OuterLink key={link} link={link} text={name} />
              <span className={styles.comma}>
                {i === maintainers.length - 1 ? "" : ", "}
              </span>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}

export default Info;
