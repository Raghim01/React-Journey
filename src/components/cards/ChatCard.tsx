import { Box, Card, CardMedia, Typography } from "@mui/material";

interface ChatCardProps {
  imgUrl: string;
  lastMessageTime: Date;
  name: string;
  lastMessage: string;
}

export function ChatCard({
  imgUrl,
  lastMessageTime,
  name,
  lastMessage,
}: ChatCardProps) {
  const timeFromLastMessage = timeAgo(lastMessageTime);

  return (
    <Card className="chat-card">
      <CardMedia
        className="chat-card-media"
        component="img"
        image={imgUrl}
        alt="user avatar"
      />

      <Box className="chat-card-info">
        <Box className="chat-card-user-info">
          <Typography className="user-name">{name}</Typography>
          <Typography className="time-left">{timeFromLastMessage}</Typography>
        </Box>

        <Typography className="last-message">{lastMessage}</Typography>
      </Box>
    </Card>
  );
}

function timeAgo(date: Date) {
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  const years = Math.floor(diffInSeconds / (3600 * 24 * 365));
  if (years >= 1) return `${years} year${years > 1 ? "s" : ""} ago`;

  const months = Math.floor(diffInSeconds / (3600 * 24 * 30));
  if (months >= 1) return `${months} month${months > 1 ? "s" : ""} ago`;

  const days = Math.floor(diffInSeconds / (3600 * 24));
  if (days >= 1) return `${days} day${days > 1 ? "s" : ""} ago`;

  const hours = Math.floor(diffInSeconds / 3600);
  if (hours >= 1) return `${hours} hour${hours > 1 ? "s" : ""} ago`;

  const minutes = Math.floor(diffInSeconds / 60);
  if (minutes >= 1) return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;

  return "Now";
}
