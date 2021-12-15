import Navigation from "../Navigation";
import s from "./Header.module.css";
import logo from "../../images/logo.png";
import login from "../../images/login.svg";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className={s.header}>
      <div className={s.headerPosition}>
        <div className={s.headerNav}>
          <Navigation />
          <button className={s.headerLogout}>
            <p className={s.userName}>userName</p>
            <div type="button" className={s.headerIcon}>
              <img className={s.loginIcon} src={login} alt={"login"} />
            </div>
          </button>
        </div>
        <div className={s.logo}>
          <NavLink className={s.logo} to="/">
            <img className={s.logoIcon} src={logo} alt={"Logo"} />
            <span>PEPSI</span>
          </NavLink>
        </div>
      </div>
      <div className={s.headerLine}></div>
    </div>
  );
}
export default Header;
