import Navigation from "../Navigation";
import s from "./Header.module.css";
import logo from "../../images/logo.png";

function Header() {
  return (
    <div className={s.header}>
      <div className={s.headerPosition}>
        <div className={s.headerNav}>
          <Navigation />
          <div className={s.headerLogout}>
            <p>userName</p>
            <div className={s.headerIcon}></div>
          </div>
        </div>
        <div className={s.logo}>
          <img className={s.logoIcon} src={logo} alt={"Logo"} />
          <span>PEPSI</span>
        </div>
      </div>
      <div className={s.headerLine}></div>
    </div>
  );
}
export default Header;
