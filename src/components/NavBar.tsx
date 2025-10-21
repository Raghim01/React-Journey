import { Box } from "@mui/material";
import { routes } from "../constants/nav-items";
import { NavItem } from "./NavItem";
import { UserHeaderComponent } from "./common/UserHeader";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";

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
        <UserHeaderComponent label="" />
      </div>

      <div className={`navbar ${isOpen ? "open" : "closed"}`}>
        <div className="logo-container">
          <Box
            sx={{
              height: 40,
              width: 40,
              borderRadius: "0.75rem",
              backgroundColor: "#546FFF",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <ImportContactsIcon
              sx={{
                color: "white",

                alignSelf: "center",
              }}
            />
          </Box>

          <span>Dashboard</span>
        </div>

        <div className="nav-items">
          {routes.map(({ icon, label, path }) => (
            <NavItem key={path} icon={icon} label={label} path={path} />
          ))}
        </div>

        <div className="close-btn" onClick={handleClick}>
          {isOpen ? "⬅️" : "➡️"}
        </div>
      </div>
    </>
  );
}
