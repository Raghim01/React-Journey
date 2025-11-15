import {
  Box,
  CssBaseline,
  Drawer,
  IconButton,
  List,
  styled,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MuiAppBar, {
  type AppBarProps as MuiAppBarProps,
} from "@mui/material/AppBar";
import { useState } from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import Logo from "./../../src/assets/book-square.svg";
import { routes } from "../constants/nav-items";
import { NavItem } from "./NavItem";

const drawerWidth = 320;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar)<AppBarProps>(() => ({}));

const DrawerHeader = styled("div")(({ theme }) => ({
  marginTop: "0.25rem",
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "space-between",
  marginBottom: "2rem",
}));

export default function NavBar() {
  const theme = useTheme();

  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box className="nav-bar">
      <CssBaseline />
      <AppBar open={open} className="app-bar">
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          <IconButton
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={`icon-button ${open ? "hidden" : "open"}`}
          >
            <MenuIcon className="menu-icon" />
          </IconButton>
          <Box style={{ display: "flex", gap: "1.5rem", marginLeft: "auto" }}>
            <IconButton>
              <NotificationsNoneOutlinedIcon
                sx={{
                  height: "2.5rem",
                  width: "2.5rem",
                  fontSize: "1.25rem",
                  color: "#383838ff",
                }}
              />
            </IconButton>
            <IconButton>
              <PersonOutlineOutlinedIcon
                sx={{
                  height: "2.5rem",
                  width: "2.5rem",
                  fontSize: "1.25rem",
                  color: "#383838ff",
                }}
              />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          // width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="temporary"
        anchor="left"
        open={open}
        onClose={handleDrawerClose}
        disableScrollLock
      >
        <DrawerHeader>
          <Box style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <Logo style={{ width: 40, height: 40, marginLeft: "1.5rem" }} />
            <Typography style={{ fontWeight: "500", fontSize: "2rem" }}>
              Dashboard
            </Typography>
          </Box>

          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>

        <List
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            margin: "0 2rem",
          }}
        >
          {routes.map(({ icon: Icon, label, path }) => (
            <NavItem icon={Icon} label={label} path={path} />
          ))}
        </List>
      </Drawer>
    </Box>
  );
}
