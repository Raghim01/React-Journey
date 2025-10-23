import {
  Box,
  Drawer,
  List,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import { routes } from "../constants/nav-items";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import { NavItem } from "./NavItem";
type NavBarProps = {
  handleClick: () => void;
  isOpen: boolean;
};

const drawerWidth = 350;
const collapsedWidth = 80;

export function NavBar({ handleClick, isOpen }: NavBarProps) {
  return (
    <>
      <Drawer
        variant="permanent"
        open={isOpen}
        sx={{
          width: isOpen ? drawerWidth : collapsedWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: isOpen ? drawerWidth : collapsedWidth,
            boxSizing: "border-box",
            borderRight: "2px solid #f5f5f7",
            transition: "width 0.3s ease-in-out",
            backgroundColor: "#ffffff",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            zIndex: 1200,
          },
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 1,
            mt: 2,
            px: 2,
          }}
        >
          <Box
            sx={{
              height: 40,
              width: 40,
              minHeight: 40,
              minWidth: 40,
              flexShrink: 0,
              borderRadius: "0.75rem",
              backgroundColor: "#546FFF",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ImportContactsIcon sx={{ color: "white" }} />
          </Box>

          {isOpen && (
            <Typography
              variant="h5"
              fontWeight={600}
              noWrap
              sx={{ flexShrink: 0 }}
            >
              Dashboard
            </Typography>
          )}
        </Toolbar>

        <List
          sx={{
            mt: 6,
            display: "flex",
            flexDirection: "column",
            alignItems: isOpen ? "flex-start" : "center",
          }}
        >
          {routes.map(({ icon: Icon, label, path }) => (
            <NavItem icon={Icon} label={label} path={path} isOpen={isOpen} />
          ))}
        </List>

        <IconButton
          onClick={handleClick}
          sx={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            backgroundColor: "white",
            alignSelf: "center",
            marginTop: "auto", // This pushes it to the bottom
            marginBottom: 2,
          }}
        >
          {isOpen ? <ChevronLeftIcon /> : <ChevronRightRoundedIcon />}
        </IconButton>
      </Drawer>
    </>
  );
}
