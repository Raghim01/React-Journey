import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import { NavLink } from "react-router";

type NavItemProps = {
  icon: React.ElementType;
  label: string;
  path: string;
};

export function NavItem({ icon: Icon, label, path }: NavItemProps) {
  return (
    <NavLink
      to={path}
      style={{ textDecoration: "none", color: "inherit" }}
      key={path}
    >
      <ListItem disablePadding key={path}>
        <ListItemButton
          style={{
            borderRadius: "0.5rem",
            display: "flex",
            gap: "0.75rem",
            padding: "1rem 0.5rem 1rem 0.5rem",
            color: "#8E92BC",
          }}
        >
          <ListItemIcon style={{ minWidth: 0 }}>
            <Icon
              style={{ height: "2.5rem", width: "1.5rem", color: "#8E92BC" }}
            />
          </ListItemIcon>
          <ListItemText
            primary={label}
            style={{ textDecoration: "none", fontSize: "1rem" }}
          />
        </ListItemButton>
      </ListItem>
    </NavLink>
  );
}
