// Components
import Media from "../../components/media";

// Styles
import styles from "./MediaContent.module.scss";
import globalStyles from "../../About.module.scss";

function MediaContent() {
  const content = [
    {
      name: "Email Delivery",
      img: "/icons/email.svg",
      className: "email",
      link: "http://apodemail.appspot.com/",
      maintainers: [
        {
          name: "Greg Tracy",
          link: "mailto: greg.tracy at att dot net",
        },
      ],
    },
    {
      name: "Discussion Board",
      img: "icons/chat.svg",
      className: "chat",
      link: "https://asterisk.apod.com/",
      maintainers: [
        { name: "Robert Nemiroff", link: "mailto: nemiroff at mtu dot edu" },
      ],
    },
    {
      name: "RSS Feed",
      img: "/icons/rss.svg",
      className: "rss",
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
      img: "/icons/microphone.svg",
      className: "podcasts",
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
      img: "/icons/read-aloud.svg",
      className: "read-aloud",
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
    <section id="media-content" className={globalStyles.section}>
      <h2 className={globalStyles.title}>New Media APOD-Related Content</h2>
      <div className={globalStyles.content}>
        <p className={globalStyles.text}>
          We are aware of several "new media" venues that carry APOD-related
          content. Most of these are done on a volunteer basis and are not
          supported directly by APOD or NASA. In sum, APOD considers these to be
          mirror sites that make classic APOD content readable not in a
          different language -- but with different technology. Some of these
          venues might partially support themselves by carrying advertising.
          This seems OK to us and we have therfore given them permission to use
          APOD content as it seems to give a broader reach to APOD's educational
          mission.
        </p>
        <div className={styles["content-container"]}>
          {content.map((item) => {
            return <Media key={item.name} {...item} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default MediaContent;
