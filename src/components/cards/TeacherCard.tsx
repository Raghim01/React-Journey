import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from "@mui/material";
import FollowIcon from "@mui/icons-material/AddSharp";

export function TeacherCard() {
  return (
    <Card
      sx={{
        boxShadow: "none",
        border: "1px solid black",
      }}
    >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <FollowIcon />
          </IconButton>
        }
        title="Name Surname"
        subheader="Speciality"
      />
      <CardContent
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "0rem 1rem 1rem 1rem",
          "&:last-child": {
            paddingBottom: "0.25rem",
          },
        }}
      >
        <Typography>Tasks</Typography>
        <Typography>Reviews</Typography>
      </CardContent>
    </Card>
  );
}
