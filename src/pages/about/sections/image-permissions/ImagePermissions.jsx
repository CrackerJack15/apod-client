// Styles
import styles from "../../About.module.scss";
import typography from "../../../../styles/Typography.module.scss";

function ImagePermissions() {
  return (
    <section id="permissions" className={styles.section}>
      <h2
        className={`${typography.headlineMedium} ${typography["headlineMedium--margin"]}`}
      >
        About Image Permissions
      </h2>
      <p className={`${typography.body} ${typography["body--margin"]}`}>
        All the images on the APOD page are credited to the owner or institution
        where they originated. Some of the images are copyrighted and to use
        these pictures publicly or commercially one must write to the owners for
        permission. For the copyrighted images, the copyright owner is
        identified in the APOD credit line (please see the caption under the
        image), along with a hyperlink to the owner's location. NASA images are
        in the public domain, official guidelines for their use can be found
        here. For images credited to other owners/institutions, please contact
        them directly for copyright and permissions questions.
      </p>
      <p className={`${typography.body} ${typography["body--margin"]}`}>
        Neither NASA nor APOD can grant permission to use copyrighted images.
        For use of these images, please write to the copyright owners.
      </p>
    </section>
  );
}

export default ImagePermissions;
