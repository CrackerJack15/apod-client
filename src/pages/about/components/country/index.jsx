import React from "react";

// Styles
import styles from "./Country.module.scss";

function Info({ icon, name, link, maintainers }) {
  return (
    <div className={styles.container}>
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className={styles.country}
      >
        <span className={styles.icon}>{icon}</span>
        {name}
      </a>
      <div>
        {maintainers?.map(({ link, name }, i) => {
          return (
            <React.Fragment key={link}>
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className={styles.maintainer}
              >
                {name}
              </a>
              <span>{i === maintainers.length - 1 ? "" : ", "}</span>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}

export default Info;
