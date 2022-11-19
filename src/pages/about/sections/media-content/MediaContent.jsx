// Components
import Info from "../../components/info/Info";

// Styles
import styles from "../../About.module.scss";
import typography from "../../../../styles/Typography.module.scss";

function MediaContent() {
  const mediaContent = [
    {
      name: "Email Delivery",
      tooltip: "(in Arabic from the \nSirius Astronomy Association)",
      link: "http://apodemail.appspot.com/",
      maintainers: [
        {
          name: "Greg Tracy",
          link: "mailto: greg.tracy at att dot net",
        },
      ],
    },
    {
      name: "RSS Feed",
      link: "http://antwrp.gsfc.nasa.gov/apod.rss",
      maintainers: [
        {
          name: "NASA ASD",
          link: "http://science.gsfc.nasa.gov/sed/index.cfm",
        },
      ],
    },
    {
      name: "Podcasts",
      link: "https://www.youtube.com/channel/UCWksELVw1LfYg6TiLQyjByw/featured",
      maintainers: [
        {
          name: "Robert Wagner",
          link: "mailto: rmwagner at hacc dot edu",
        },
      ],
    },
    {
      name: "Read Aloud",
      link: "https://www.youtube.com/channel/UCZepiiyNNbD2XL5sWnJBC_A",
      maintainers: [
        {
          name: "Videotizer",
          link: "https://videotizer.com/",
        },
      ],
    },
  ];

  return (
    <section id="media-content" className={styles.section}>
      <h2
        className={`${typography.headlineMedium} ${typography["headlineMedium--margin"]}`}
      >
        New Media APOD-Related Content
      </h2>
      <p className={`${typography.body} ${typography["body--margin"]}`}>
        We are aware of several "new media" venues that carry APOD-related
        content. Most of these are done on a volunteer basis and are not
        supported directly by APOD or NASA. In sum, APOD considers these to be
        mirror sites that make classic APOD content readable not in a different
        language -- but with different technology. Some of these venues might
        partially support themselves by carrying advertising. This seems OK to
        us and we have therfore given them permission to use APOD content as it
        seems to give a broader reach to APOD's educational mission.
      </p>
      <div className={styles["info-list"]}>
        {mediaContent.map((website) => {
          return <Info key={website.name} {...website} />;
        })}
      </div>
    </section>
  );
}

export default MediaContent;
