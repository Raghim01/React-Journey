import { Box, Divider } from "@mui/material";
import { SearchBar } from "./filers/SearchBar";
import { ChatCard } from "./cards/ChatCard";

const chatData = [
  {
    imgUrl: "https://randomuser.me/api/portraits/women/21.jpg",
    name: "Alice Johnson",
    lastMessage: "Hey! Are we still on for tomorrow?",
    lastMessageTime: new Date("2025-01-15T10:24:00"),
  },
  {
    imgUrl: "https://randomuser.me/api/portraits/men/34.jpg",
    name: "Michael Turner",
    lastMessage:
      "I’ve sent the documents. Let me know. Let me know.Let me know.",
    lastMessageTime: new Date("2025-01-14T18:40:00"),
  },
  {
    imgUrl: "https://randomuser.me/api/portraits/women/56.jpg",
    name: "Sophia Gomez",
    lastMessage: "Sounds good to me!",
    lastMessageTime: new Date("2025-01-15T08:15:00"),
  },
  {
    imgUrl: "https://randomuser.me/api/portraits/men/12.jpg",
    name: "David Lee",
    lastMessage: "I'll check and get back to you.",
    lastMessageTime: new Date("2025-01-13T21:10:00"),
  },
  {
    imgUrl: "https://randomuser.me/api/portraits/women/77.jpg",
    name: "Emily Rogers",
    lastMessage: "Thank you! Talk soon 😊",
    lastMessageTime: new Date("2025-01-15T12:05:00"),
  },
  {
    imgUrl: "https://randomuser.me/api/portraits/men/45.jpg",
    name: "Anthony White",
    lastMessage: "Can we reschedule the meeting?",
    lastMessageTime: new Date("2025-01-14T16:27:00"),
  },
  {
    imgUrl: "https://randomuser.me/api/portraits/women/21.jpg",
    name: "Alice Johnson",
    lastMessage: "Hey! Are we still on for tomorrow?",
    lastMessageTime: new Date("2025-01-15T10:24:00"),
  },
  {
    imgUrl: "https://randomuser.me/api/portraits/men/34.jpg",
    name: "Michael Turner",
    lastMessage:
      "I’ve sent the documents. Let me know. Let me know.Let me know.",
    lastMessageTime: new Date("2025-01-14T18:40:00"),
  },
  {
    imgUrl: "https://randomuser.me/api/portraits/women/56.jpg",
    name: "Sophia Gomez",
    lastMessage: "Sounds good to me!",
    lastMessageTime: new Date("2025-01-15T08:15:00"),
  },
  {
    imgUrl: "https://randomuser.me/api/portraits/men/12.jpg",
    name: "David Lee",
    lastMessage: "I'll check and get back to you.",
    lastMessageTime: new Date("2025-01-13T21:10:00"),
  },
  {
    imgUrl: "https://randomuser.me/api/portraits/women/77.jpg",
    name: "Emily Rogers",
    lastMessage: "Thank you! Talk soon 😊",
    lastMessageTime: new Date("2025-01-15T12:05:00"),
  },
  {
    imgUrl: "https://randomuser.me/api/portraits/men/45.jpg",
    name: "Anthony White",
    lastMessage: "Can we reschedule the meeting?",
    lastMessageTime: new Date("2025-01-14T16:27:00"),
  },
];

export function AllChats() {
  return (
    <Box className="chats">
      <Box className="chats-search">
        <SearchBar />
      </Box>
      <Box className="chats-content">
        {chatData.map((chat, index) => {
          return (
            <Box key={index}>
              <ChatCard
                imgUrl={chat.imgUrl}
                lastMessageTime={chat.lastMessageTime}
                name={chat.name}
                lastMessage={chat.lastMessage}
              />
              {index < chatData.length - 1 && (
                <Divider className="chats-divider" />
              )}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
