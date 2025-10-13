import { InputBase, Paper, IconButton } from "@mui/material";
import SearchIcon from "../../assets/search.svg";

export function SearchBar() {
  return (
    <Paper
      component="form"
      elevation={0}
      sx={{
        display: "flex",
        alignItems: "center",
        width: 400,
        height: 50,
        borderRadius: "12px",
        border: "1px solid #E0E0E0",
        px: 2,
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1, color: "#000000ff", fontSize: "0.95rem" }}
        placeholder="Search Task"
        inputProps={{ "aria-label": "search task" }}
      />
      <IconButton
        type="button"
        sx={{ p: "10px", color: "#7A7A9D" }}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
