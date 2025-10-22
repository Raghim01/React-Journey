import { Box, Divider } from "@mui/material";
import { ChatCard } from "./cards/ChatCard";

interface AllChatsProps {
  data: {
    id: number;
    imgUrl: string;
    lastMessageTime: Date;
    name: string;
    lastMessage: string;
  }[];
  onChatSelect: (id: number) => void;
}

export function AllChats({ data, onChatSelect }: AllChatsProps) {
  return (
    <Box className="chats">
      <Box className="chats-content">
        {data.map((chat, index) => {
          return (
            <Box key={chat.id} onClick={() => onChatSelect(chat.id)}>
              <ChatCard
                imgUrl={chat.imgUrl}
                lastMessageTime={chat.lastMessageTime}
                name={chat.name}
                lastMessage={chat.lastMessage}
              />
              {index < data.length - 1 && <Divider className="chats-divider" />}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
