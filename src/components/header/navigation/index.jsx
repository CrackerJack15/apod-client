import { NavLink } from "react-router-dom";

// Styles
import styles from "./Navigation.module.scss";

function Navigation() {
  const list = [
    { name: "Archive", path: "/" },
    { name: "Calendar", path: "/calendar" },
    { name: "Education", path: "/education" },
    { name: "About", path: "/about" },
  ];

  const content = list.map((item) => {
    return <NavItem key={item.name} {...item} />;
  });

  return (
    <div className={styles.navigation}>
      <ul className={styles["nav-list"]}>{content}</ul>
    </div>
  );
}

function NavItem({ name, path }) {
  return (
    <li className={styles["nav-item"]}>
      <NavLink className={NavLinkChecker} to={path}>
        {name}
      </NavLink>
    </li>
  );
}

const NavLinkChecker = ({ isActive }) =>
  `${styles["nav-link"]} ${isActive ? styles.active : ""}`;

export default Navigation;
