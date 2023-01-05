import React from "react";
import { format } from "date-fns";

// Components
import OuterLink from "../../../components/links/OuterLink";

// Styles
import styles from "./Info.module.scss";

const Info = ({ title, date, creditLinks, explanation }) => {
  const credits = getCredits(creditLinks);

  return (
    <section className={styles.container}>
      {/* Left Side */}
      <div className={styles.left}>
        <div className={styles.headline}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.date}>
            {format(new Date(date), "d MMMM, yyyy")}
          </p>
        </div>
        <div>
          <p className={styles.text}>Image Credit &#38; Copyright: {credits}</p>
        </div>
      </div>
      {/* Right Side */}
      <div className={styles.right}>
        <p className={styles.text}>{explanation}</p>
      </div>
    </section>
  );
};

function getCredits(creditLinks) {
  return creditLinks.map(({ _id, url, text }, i) => {
    return (
      <React.Fragment key={_id}>
        <OuterLink link={url} text={text} />
        <span>{i === creditLinks.length - 1 ? "" : ", "}</span>
      </React.Fragment>
    );
  });
}

export default Info;
