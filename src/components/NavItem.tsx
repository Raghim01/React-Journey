import type { SvgIconTypeMap } from "@mui/material";
import type { OverridableComponent } from "@mui/material/OverridableComponent";
import { NavLink } from "react-router";

type NavItemProps = {
  icon: OverridableComponent<SvgIconTypeMap<object, "svg">> & {
    muiName: string;
  };
  label: string;
  path: string;
};

export function NavItem({ icon: Icon, label, path }: NavItemProps) {
  return (
    <NavLink to={path} className="nav-item">
      <Icon style={{ color: "#8E92BC" }} />
      <span>{label}</span>
    </NavLink>
  );
}
