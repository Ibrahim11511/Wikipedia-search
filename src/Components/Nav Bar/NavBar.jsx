import Styles from "./navbar.module.css";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className={Styles.navBar}>
      <NavLink className={Styles.navLink} to={"home"}>
        Home
      </NavLink>
      <NavLink className={Styles.navLink} to={"favorites"}>
        Favorites
      </NavLink>
    </nav>
  );
}
