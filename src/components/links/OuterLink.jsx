// Styles
import typography from "../../styles/Typography.module.scss";

function OuterLink({ link, text }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className={`${typography.body} ${typography["body--link"]}`}
    >
      {text}
    </a>
  );
}

export default OuterLink;
