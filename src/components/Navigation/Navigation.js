import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";

function Navigation() {
  return (
    <div className={s.navList}>
      <NavLink
        className={s.navItem}
        exact
        activeClassName={s.activeLink}
        to="/"
      >
        HOME
      </NavLink>
      <NavLink className={s.navItem} activeClassName={s.activeLink} to="about">
        ABOUT
      </NavLink>
      <NavLink className={s.navItem} activeClassName={s.activeLink} to="price">
        PRICE
      </NavLink>
      <NavLink
        className={s.navItem}
        activeClassName={s.activeLink}
        to="contacts"
      >
        CONTACTS
      </NavLink>
    </div>
  );
}

export default Navigation;
