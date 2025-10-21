import { Box, Typography } from "@mui/material";
import { UserHeaderComponent } from "../components/common/UserHeader";
import { AllChats } from "../components/AllChats";
import { IndividualChat } from "../components/IndividualChat";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useIsMobile } from "../hooks/useIsMobile";

const chatData = [
  {
    id: 1,
    imgUrl: "https://randomuser.me/api/portraits/women/21.jpg",
    name: "Alice Johnson",
    lastMessage: "Hey! Are we still on for tomorrow?",
    lastMessageTime: new Date("2025-01-15T10:24:00"),
  },
  {
    id: 2,
    imgUrl: "https://randomuser.me/api/portraits/men/34.jpg",
    name: "Michael Turner",
    lastMessage:
      "I’ve sent the documents. Let me know. Let me know.Let me know.",
    lastMessageTime: new Date("2025-01-14T18:40:00"),
  },
  {
    id: 3,
    imgUrl: "https://randomuser.me/api/portraits/women/56.jpg",
    name: "Sophia Gomez",
    lastMessage: "Sounds good to me!",
    lastMessageTime: new Date("2025-01-15T08:15:00"),
  },
  {
    id: 4,
    imgUrl: "https://randomuser.me/api/portraits/men/12.jpg",
    name: "David Lee",
    lastMessage: "I'll check and get back to you.",
    lastMessageTime: new Date("2025-01-13T21:10:00"),
  },
  {
    id: 5,
    imgUrl: "https://randomuser.me/api/portraits/women/77.jpg",
    name: "Emily Rogers",
    lastMessage: "Thank you! Talk soon 😊",
    lastMessageTime: new Date("2025-01-15T12:05:00"),
  },
  {
    id: 6,
    imgUrl: "https://randomuser.me/api/portraits/men/45.jpg",
    name: "Anthony White",
    lastMessage: "Can we reschedule the meeting?",
    lastMessageTime: new Date("2025-01-14T16:27:00"),
  },
  {
    id: 7,
    imgUrl: "https://randomuser.me/api/portraits/women/21.jpg",
    name: "Alice Johnson",
    lastMessage: "Hey! Are we still on for tomorrow?",
    lastMessageTime: new Date("2025-01-15T10:24:00"),
  },
  {
    id: 8,
    imgUrl: "https://randomuser.me/api/portraits/men/34.jpg",
    name: "Michael Turner",
    lastMessage:
      "I’ve sent the documents. Let me know. Let me know.Let me know.",
    lastMessageTime: new Date("2025-01-14T18:40:00"),
  },
  {
    id: 9,
    imgUrl: "https://randomuser.me/api/portraits/women/56.jpg",
    name: "Sophia Gomez",
    lastMessage: "Sounds good to me!",
    lastMessageTime: new Date("2025-01-15T08:15:00"),
  },
  {
    id: 10,
    imgUrl: "https://randomuser.me/api/portraits/men/12.jpg",
    name: "David Lee",
    lastMessage: "I'll check and get back to you.",
    lastMessageTime: new Date("2025-01-13T21:10:00"),
  },
  {
    id: 11,
    imgUrl: "https://randomuser.me/api/portraits/women/77.jpg",
    name: "Emily Rogers",
    lastMessage: "Thank you! Talk soon 😊",
    lastMessageTime: new Date("2025-01-15T12:05:00"),
  },
  {
    id: 12,
    imgUrl: "https://randomuser.me/api/portraits/men/45.jpg",
    name: "Anthony White",
    lastMessage: "Can we reschedule the meeting?",
    lastMessageTime: new Date("2025-01-14T16:27:00"),
  },
];

export function Messages() {
  const [selectedChat, setSelectedChat] = useState<number | null>(null);
  const { chatId } = useParams();
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  useEffect(() => {
    if (chatId) {
      setSelectedChat(Number(chatId));
    }
  }, [chatId]);

  const handleChatSelect = (chatId: number) => {
    setSelectedChat(chatId);
    if (isMobile) {
      navigate(`/messages/${chatId}`);
    }
  };

  const handleBackToChats = () => {
    setSelectedChat(null);
    if (isMobile) {
      navigate("/messages");
    }
  };

  return (
    <Box className="messages">
      <UserHeaderComponent label="Messages" />
      <Box className="messages-content">
        <AllChats data={chatData} onChatSelect={handleChatSelect} />

        <IndividualChat onBack={handleBackToChats} />
      </Box>
    </Box>
  );
}
