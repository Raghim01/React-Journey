import React, { useState } from "react";
import { Button, Menu, MenuItem } from "@mui/material";

type FilterPickerProps = {
  label: string;
  menuItems: string[];
  icon: React.ReactNode;
};

export function FilterPicker({ label, menuItems, icon }: FilterPickerProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedFilter, setSelectedFilter] = useState<string>("");

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelectFilter = (value: string) => {
    setSelectedFilter(value);
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        onClick={handleClick}
        variant="outlined"
        startIcon={icon}
        sx={{
          backgroundColor: "white",
          borderRadius: "12px",
          textTransform: "none",
          color: "#0C0C1E",
          borderColor: "rgba(0,0,0,0.1)",
          px: 2,
          py: 1.2,
          fontWeight: 500,
          height: 50,
          width: 150,
        }}
      >
        {selectedFilter ? selectedFilter : label}
      </Button>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        slotProps={{
          paper: {
            sx: {
              borderRadius: "12px",
              mt: 1,
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
              width: 150,
            },
          },
        }}
      >
        {menuItems.map((item) => (
          <MenuItem
            key={item}
            onClick={() => handleSelectFilter(item)}
            sx={{
              fontSize: "0.95rem",
              color: "#333",
              "&:hover": { backgroundColor: "rgba(0,0,0,0.03)" },
            }}
          >
            {item}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
