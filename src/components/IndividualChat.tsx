import { Box } from "@mui/material";
import { CurrentChatPersonCard } from "./cards/CurrentChatPersonCard";
import { MessageInput } from "./inputs/MessageInput";
import { useIsMobile } from "../hooks/useIsMobile";

interface IndividualChatProps {
  onBack: () => void;
}

export function IndividualChat({ onBack }: IndividualChatProps) {
  const isMobile = useIsMobile();

  return (
    <Box className="messages-chat-section">
      <CurrentChatPersonCard
        imgUrl="https://randomuser.me/api/portraits/women/21.jpg"
        name="SomeName"
        isOnline={true}
        isMobile={isMobile ? true : false}
        onBack={onBack}
      />
      <Box className="messages-chat-section-content"></Box>
      <MessageInput />
    </Box>
  );
}
