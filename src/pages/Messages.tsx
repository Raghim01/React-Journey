import { Box, Typography } from "@mui/material";
import { AllChats } from "../components/AllChats";
import { IndividualChat } from "../components/IndividualChat";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useIsMobile } from "../hooks/useIsMobile";
import { SearchBar } from "../components/filters/SearchBar";
import { chatData } from "../constants/temp.data";
import type { IUser } from "../interfaces/user.interface";

export function Messages() {
  const [selectedChat, setSelectedChat] = useState<number | null>(null);
  const [selectedUser, setSelectedUser] = useState<IUser>();

  const { chatId } = useParams();
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  useEffect(() => {
    if (chatId) {
      setSelectedChat(Number(chatId));

      const selectedChatUser = chatData.find(
        (chat) => chat.id === Number(chatId)
      );

      if (selectedChatUser) setSelectedUser(selectedChatUser);
    } else {
      setSelectedChat(null);
    }
  }, [chatId]);

  const handleChatSelect = (chatId: number) => {
    setSelectedChat(chatId);

    const selectedChatUser = chatData.find(
      (chat) => chat.id === Number(chatId)
    );

    if (selectedChatUser) setSelectedUser(selectedChatUser);

    if (isMobile) {
      navigate(`/chats/${chatId}`);
    }
  };

  const handleBackToChats = () => {
    navigate("/messages");
    setSelectedChat(null);
  };

  if (isMobile && chatId && selectedUser) {
    return (
      <Box className="messages mobile-chat-view">
        <IndividualChat onBack={handleBackToChats} userData={selectedUser} />
      </Box>
    );
  }

  return (
    <Box className="messages">
      <Box className="header">
        <Box className="chats-search">
          <SearchBar />
        </Box>
      </Box>

      <Box className="messages-content">
        <AllChats data={chatData} onChatSelect={handleChatSelect} />

        {!isMobile && (
          <Box>
            {selectedChat && selectedUser ? (
              <IndividualChat
                onBack={handleBackToChats}
                userData={selectedUser}
              />
            ) : (
              <Box className="no-chat-content">
                <Typography color="textSecondary">
                  Select a chat to start messaging
                </Typography>
              </Box>
            )}
          </Box>
        )}
      </Box>
    </Box>
  );
}
