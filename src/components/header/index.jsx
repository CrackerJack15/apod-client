import { Link } from "react-router-dom";

// Components
import Navigation from "./navigation";

// Styles
import styles from "./Header.module.scss";

// function createRandomDate() {
//   const yearNow = new Date(Date.now()).getFullYear();

//   const year = `${createRandomNumber(1995, yearNow + 1)}`.slice(2);
//   const month = createRandomNumber(1, 13);
//   const day = createRandomDay(month);

//   return `/day/${year}${month}${day}`;
// }

// function createRandomDay(month) {
//   switch (month) {
//     case "01":
//       return createRandomNumber(1, 32);

//     case "02":
//       return createRandomNumber(1, 29);

//     case "03":
//       return createRandomNumber(1, 32);

//     case "04":
//       return createRandomNumber(1, 31);

//     case "05":
//       return createRandomNumber(1, 32);

//     case "06":
//       return createRandomNumber(1, 31);

//     case "07":
//       return createRandomNumber(1, 32);

//     case "08":
//       return createRandomNumber(1, 32);

//     case "09":
//       return createRandomNumber(1, 31);

//     case "10":
//       return createRandomNumber(1, 32);

//     case "11":
//       return createRandomNumber(1, 31);

//     case "12":
//       return createRandomNumber(1, 32);

//     default:
//       break;
//   }
// }

// function createRandomNumber(start, end) {
//   const difference = end - start;
//   const number = Math.floor(Math.random() * difference) + start;

//   if (number.toString().length === 1) {
//     return `0${number}`;
//   } else {
//     return `${number}`;
//   }
// }

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
