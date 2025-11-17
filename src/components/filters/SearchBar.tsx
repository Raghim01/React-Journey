import { InputBase, Paper, IconButton } from "@mui/material";
import SearchIcon from "../../assets/search.svg";

export function SearchBar() {
  return (
    <Paper component="form" elevation={0} className="search-bar">
      <InputBase
        className="search-input"
        placeholder="Search Task"
        inputProps={{ "aria-label": "search task" }}
      />
      <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
