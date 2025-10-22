import { Box } from "@mui/material";
import { CurrentChatPersonCard } from "./cards/CurrentChatPersonCard";
import { MessageInput } from "./inputs/MessageInput";
import { useIsMobile } from "../hooks/useIsMobile";
import type { IUser } from "../interfaces/user.interface";
import { useNavigate, useParams } from "react-router-dom";
import { chatData } from "../constants/temp.data";

interface IndividualChatProps {
  userData: IUser | null;
  onBack: () => void;
}

export function IndividualChat({ onBack, userData }: IndividualChatProps) {
  const isMobile = useIsMobile();

  return (
    <Box className="individual-chat-container">
      <CurrentChatPersonCard
        imgUrl={userData!.imgUrl}
        name={userData!.name}
        isOnline={true}
        isMobile={isMobile}
        onBack={onBack}
      />

      <Box className="chat-container-content">Lorem</Box>

      <Box className="chat-input-wrapper">
        <MessageInput />
      </Box>
    </Box>
  );
}

export function IndividualChatWrapper() {
  const { chatId } = useParams();
  const navigate = useNavigate();

  const chat = chatData.find((c) => c.id.toString() === chatId);

  if (!chat) {
    return <div>Chat not found</div>;
  }

  function handleBack() {
    navigate("/messages");
  }

  return <IndividualChat userData={chat} onBack={handleBack} />;
}
