import {
  Badge,
  Box,
  Card,
  CardActions,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

interface CurrentChatPersonCardProps {
  imgUrl: string;
  name: string;
  isOnline: boolean;
  isMobile: boolean;
  onBack: () => void;
}

export function CurrentChatPersonCard({
  imgUrl,
  name,
  isOnline,
  isMobile,
  onBack,
}: CurrentChatPersonCardProps) {
  return (
    <Card className="current-chat-user">
      {isMobile && (
        <CardActions>
          <IconButton onClick={onBack}>
            <ArrowBackIcon />
          </IconButton>
        </CardActions>
      )}
      <CardMedia
        className="current-chat-user-avatar"
        component="img"
        image={imgUrl}
        alt="user avatar"
      />
      <Box className="current-chat-user-details">
        <Typography>{name}</Typography>
        <Box className="badge">
          <Badge
            variant="dot"
            color={isOnline ? "success" : "default"}
            sx={{ marginLeft: "0.25rem" }}
          />
          <Typography>{isOnline ? "Online" : "Offline"}</Typography>
        </Box>
      </Box>
    </Card>
  );
}
