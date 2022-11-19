import { HashLink as Link } from "react-router-hash-link";

// Components
import Acknowledgment from "./sections/acknowledgement/Acknowledgement";
import Bookmark from "./sections/bookmark/Bookmark";
import MediaContent from "./sections/media-content/MediaContent";
import SocialMedia from "./sections/social-media/SocialMedia";
import OurStory from "./sections/our-story/OurStory";
import ImagePermissions from "./sections/image-permissions/ImagePermissions";

// Styles
import styles from "./About.module.scss";
import typography from "../../styles/Typography.module.scss";
import useScrollSpy from "../../hooks/useScrollSpy";

const About = () => {
  return (
    <main className={styles.main}>
      <div className={styles.left}>
        <h1 className={typography.headlineLarge}>ABOUT</h1>
        <Contents />
      </div>
      <div className={styles.right}>
        <Acknowledgment />
        <Bookmark />
        <MediaContent />
        <SocialMedia />
        <OurStory />
        <ImagePermissions />
      </div>
    </main>
  );
};

function Contents() {
  const links = [
    {
      title: "ACKNOWLEDGEMENT",
      path: "/about#acknowledgement",
    },
    {
      title: "HOW TO BOOKMARK APOD",
      path: "/about#bookmark",
    },
    {
      title: "NEW MEDIA APOD-RELATED CONTENT",
      path: "/about#media-content",
    },
    {
      title: "SOCIAL MEDIA",
      path: "/about#social-media",
    },
    {
      title: "OUR STORY",
      path: "/about#our-story",
    },
    {
      title: "ABOUT IMAGE PERMISSIONS",
      path: "/about#permissions",
    },
  ];
  const ids = [
    "acknowledgement",
    "bookmark",
    "media-content",
    "social-media",
    "our-story",
    "permissions",
  ];

  const activeId = useScrollSpy(ids, 72);

  return (
    <aside className={styles.contents}>
      <ul>
        {links.map(({ title, path }) => {
          return (
            <li className={styles.contents__item} key={title}>
              <Link
                to={path}
                className={`${typography.headlineMini} ${
                  styles.contents__link
                } ${path.includes(activeId) ? styles.active : ""}`}
              >
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default About;
