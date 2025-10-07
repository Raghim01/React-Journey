import NotificationIcon from "../assets/notification.svg";
import ProfileIcon from "../assets/frame.svg";
import navItems from "../constants/nav-items";
import { NavItem } from "./NavItem";

type NavBarProps = {
  handleClick: () => void;
  isOpen: boolean;
};

export function NavBar({ handleClick, isOpen }: NavBarProps) {
  return (
    <>
      <div className="menu-container">
        <div className="menu-btn" onClick={handleClick}>
          ☰
        </div>
        <div className="profile-container">
          <div className="notification">
            <NotificationIcon />
          </div>
          <div className="profile">
            <ProfileIcon />
          </div>
        </div>
      </div>

      <div className={`navbar ${isOpen ? "open" : "closed"}`}>
        <div className="logo-container">
          <img src="src/assets/book-logo.svg" alt="logo" className="logo" />
          <span>Dashboard</span>
        </div>

        <div className="nav-items">
          {navItems.map(({ src, label, path }) => (
            <NavItem key={label} src={src} label={label} path={path} />
          ))}
        </div>

        <div className="close-btn" onClick={handleClick}>
          {isOpen ? "⬅️" : "➡️"}
        </div>
      </div>
    </>
  );
}
