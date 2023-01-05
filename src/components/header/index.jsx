import { Link } from "react-router-dom";

// Components
import Navigation from "./navigation";

// Styles
import styles from "./Header.module.scss";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}

function Logo() {
  return (
    <Link className={styles.logo} to="/">
      <img src="/icons/logo.svg" alt="logo" />
      <p>ASTRONOMY PICTURE OF THE DAY</p>
    </Link>
  );
}

export default Header;
