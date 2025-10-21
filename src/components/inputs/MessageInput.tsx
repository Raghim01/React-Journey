import { Box, IconButton, InputBase, Paper } from "@mui/material";
import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";
import SendRoundedIcon from "@mui/icons-material/SendRounded";

export function MessageInput() {
  return (
    <Paper className="message-input">
      <InputBase className="input-field" placeholder="Type a message..." />
      <Box className="icons">
        <IconButton type="button" sx={{ p: "10px", color: "#7A7A9D" }}>
          <AttachFileOutlinedIcon />
        </IconButton>
        <IconButton type="button" sx={{ p: "10px", color: "#7A7A9D" }}>
          <SendRoundedIcon />
        </IconButton>
      </Box>
    </Paper>
  );
}
