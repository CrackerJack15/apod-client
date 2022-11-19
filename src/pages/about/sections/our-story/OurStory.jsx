// Styles
import styles from "../../About.module.scss";
import typography from "../../../../styles/Typography.module.scss";

function OurStory() {
  return (
    <section className={styles.section}>
      <h2
        id="our-story"
        className={`${typography.headlineMedium} ${typography["headlineMedium--margin"]}`}
      >
        Our Story
      </h2>
      <p className={`${typography.body} ${typography["body--margin"]}`}>
        Astronomy Picture of the Day (APOD) is originated, written, coordinated,
        and edited since 1995 by Robert Nemiroff and Jerry Bonnell. The APOD
        archive contains the largest collection of annotated astronomical images
        on the internet.
      </p>
      <p className={`${typography.body} ${typography["body--margin"]}`}>
        APOD in general and the APOD site served from NASA specifically places
        links solely on information content and does not endorse any commercial
        product nor guarantee claims or sales made on any linked pages. APOD
        occasionally repeats images, in part to inform new readers the best of
        the older images. APOD occasionally reuses APOD text, in part to avoid
        restating a point that has been well-stated on APOD before.
      </p>
      <p className={`${typography.body} ${typography["body--margin"]}`}>
        In real life, Bob and Jerry are two professional astronomers who spend
        most of their time researching the universe. Bob is a professor at
        Michigan Technological University in Houghton, Michigan, USA, while
        Jerry is a scientist at NASA's Goddard Space Flight Center in Greenbelt,
        Maryland USA. They are two married, mild and lazy guys who might appear
        relatively normal to an unsuspecting guest. Together, they have found
        new and unusual ways of annoying people such as staging astronomical
        debates. Most people are surprised to learn that they have developed the
        perfect random number generator.
      </p>
    </section>
  );
}

export default OurStory;
