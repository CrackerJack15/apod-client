import { Helmet } from "react-helmet-async";

// Components
import Acknowledgment from "./sections/acknowledgement";
import Bookmark from "./sections/bookmark";
import MediaContent from "./sections/media-content/";
import OurStory from "./sections/our-story";
import ImagePermissions from "./sections/image-permissions";

// Styles
import styles from "./About.module.scss";

function About() {
  return (
    <main className={styles.container}>
      <Helmet>
        <title>About Astronomy Picture of the Day</title>
      </Helmet>
      <aside className={styles["table-of-contents"]}>
        <h1 className={styles.subtitle}>Table of contents</h1>
        <Contents />
      </aside>
      <div className={styles["main-content"]}>
        <Acknowledgment />
        <Bookmark />
        <MediaContent />
        <OurStory />
        <ImagePermissions />
      </div>
    </main>
  );
}

function Contents() {
  const chapters = [
    {
      id: "acknowledgement",
      title: "1. Acknowledgement",
    },
    {
      id: "bookmark",
      title: "2. How to Bookmark APOD",
    },
    {
      id: "media-content",
      title: "3. New Media APOD-Related Content",
    },
    {
      id: "our-story",
      title: "4. Our Story",
    },
    {
      id: "permissions",
      title: "5. About Image Permissions",
    },
  ];

  function handleScroll(id) {
    const item = document.getElementById(id);
    const yOffset = -64;

    if (item) {
      const y = item.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }

  return (
    <ul className={styles.contents}>
      {chapters.map(({ id, title }) => {
        return (
          <li
            key={title}
            className={styles.contents__item}
            onClick={() => handleScroll(id)}
          >
            <span>{title}</span>
          </li>
        );
      })}
    </ul>
  );
}

export default About;
