import { NavLink } from "react-router";

type NavItemProps = {
  src: string;
  label: string;
  path: string;
};

export function NavItem({ src, label, path }: NavItemProps) {
  return (
    <NavLink to={path} className="nav-item">
      <img src={src} />
      <span>{label}</span>
    </NavLink>
  );
}
