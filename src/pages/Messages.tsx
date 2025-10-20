import { Box } from "@mui/material";
import { UserHeaderComponent } from "../components/common/UserHeader";
import { AllChats } from "../components/AllChats";

export function Messages() {
  return (
    <Box className="messages">
      <UserHeaderComponent label="Messages" />
      <Box className="messages-content">
        <AllChats />
        <Box className="messages-chat-section"></Box>
      </Box>
    </Box>
  );
}
