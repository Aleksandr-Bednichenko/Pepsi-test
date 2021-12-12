import { NavLink } from "react-router-dom";
import s from "./SubNavigationContacts.module.css";
function SubNavigationContacts() {
  return (
    <div className={s.navList}>
      <NavLink
        className={s.navItem}
        activeClassName={s.activeLinks}
        to="contacts"
      >
        INFO
      </NavLink>
      <NavLink
        className={s.navItem}
        activeClassName={s.activeLinks}
        to="/contacts/images"
      >
        IMAGES
      </NavLink>
      <NavLink
        className={s.navItem}
        activeClassName={s.activeLinks}
        to="/contacts/questions"
      >
        FAQ
      </NavLink>
      <NavLink
        className={s.navItem}
        activeClassName={s.activeLinks}
        to="/contacts/new"
      >
        NewTab
      </NavLink>
    </div>
  );
}
export default SubNavigationContacts;
