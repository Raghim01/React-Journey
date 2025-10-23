import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { NavLink } from "react-router";

type NavItemProps = {
  icon: React.ReactElement;
  label: string;
  path: string;
  isOpen: boolean;
};

export function NavItem({ icon: Icon, label, path, isOpen }: NavItemProps) {
  return (
    <NavLink to={path}>
      <ListItem
        key={path}
        sx={{
          borderRadius: 2,
          mx: isOpen ? 4 : "auto",
          fontSize: "1.25rem",
        }}
      >
        <ListItemButton>
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: isOpen ? 2 : "auto",
              justifyContent: "center",
            }}
          >
            {Icon}
          </ListItemIcon>
          {isOpen && <ListItemText primary={label} />}
        </ListItemButton>
      </ListItem>
    </NavLink>
  );
}
