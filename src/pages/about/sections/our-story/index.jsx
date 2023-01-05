// Styles
import styles from "../../About.module.scss";

function OurStory() {
  const content = [
    `Astronomy Picture of the Day (APOD) is originated, written,
  coordinated, and edited since 1995 by Robert Nemiroff and Jerry
  Bonnell. The APOD archive contains the largest collection of
  annotated astronomical images on the internet.`,
    `APOD in general and the APOD site served from NASA specifically
  places links solely on information content and does not endorse any
  commercial product nor guarantee claims or sales made on any linked
  pages. APOD occasionally repeats images, in part to inform new
  readers the best of the older images. APOD occasionally reuses APOD
  text, in part to avoid restating a point that has been well-stated
  on APOD before.`,
    `In real life, Bob and Jerry are two professional astronomers who
  spend most of their time researching the universe. Bob is a
  professor at Michigan Technological University in Houghton,
  Michigan, USA, while Jerry is a scientist at NASA's Goddard Space
  Flight Center in Greenbelt, Maryland USA. They are two married, mild
  and lazy guys who might appear relatively normal to an unsuspecting
  guest. Together, they have found new and unusual ways of annoying
  people such as staging astronomical debates. Most people are
  surprised to learn that they have developed the perfect random
  number generator.`,
  ];
  return (
    <section id="our-story" className={styles.section}>
      <h2 className={styles.title}>Our Story</h2>
      <div className={styles.content}>
        {content.map((paragraph, i) => {
          return (
            <div key={i} className={styles["text-container"]}>
              <p className={styles.text}>{paragraph}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default OurStory;
