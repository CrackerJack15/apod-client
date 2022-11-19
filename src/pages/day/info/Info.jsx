import React from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";

// Components
import OuterLink from "../../../components/links/OuterLink";

// Helpers
import { createDayURL } from "../../../helpers/functions";

// Styles
import styles from "./Info.module.scss";
import typography from "../../../styles/Typography.module.scss";

// Assets
import arrowLeft from "../../../assets/icons/arrow-left.svg";
import arrowRight from "../../../assets/icons/arrow-right.svg";

const Info = ({ title, date, creditLinks, explanation }) => {
  const credits = getCredits(creditLinks);

  return (
    <section className={styles.container}>
      <div className={styles.top}>
        <h1 className={`${typography.headlineLarge} ${styles.title}`}>
          {title}
        </h1>
        <p className={typography.labelLarge}>
          {format(new Date(date), "d MMMM, yyyy")}
        </p>
      </div>
      <div>
        <Link to={`/day/${createDayURL(date, -1)}`} className={styles.button}>
          <img src={arrowLeft} alt="arrow left" />
        </Link>
        <Link to={`/day/${createDayURL(date, 1)}`} className={styles.button}>
          <img src={arrowRight} alt="arrow right" />
        </Link>
      </div>
      <div>
        <div className={styles["meta-container"]}>
          <p className={typography.body}>
            Image Credit &#38; Copyright: {credits}
          </p>
        </div>
        <div className={`${styles["meta-container"]} ${styles.last}`}>
          <p className={typography.body}>{explanation}</p>
        </div>
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
