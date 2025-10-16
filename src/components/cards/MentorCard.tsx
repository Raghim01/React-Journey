import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  Icon,
  IconButton,
  Typography,
} from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";

interface MentorCardProps {
  name: string;
  speciality: string;
  description?: string;
  taskNumber: number;
  totalReviews: number;
  starsNumber: number;
}

export function MentorCard({
  name,
  speciality,
  taskNumber,
  starsNumber,
  totalReviews,
  description,
}: MentorCardProps) {
  return (
    <Card className="mentor-card">
      <CardHeader
        avatar={<Avatar aria-label="recipe">R</Avatar>}
        title={name}
        subheader={speciality}
        action={
          <IconButton aria-label="add to favorites">
            <FavoriteBorderOutlinedIcon />
          </IconButton>
        }
      />
      <CardContent className="content">
        {description && <Typography>{description}</Typography>}

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "1rem",
          }}
        >
          <Box className="tasks">
            <Icon>
              <AssignmentOutlinedIcon />
            </Icon>
            <Typography>{taskNumber} Task</Typography>
          </Box>
          <Box className="stars">
            <Icon>
              <StarBorderOutlinedIcon />
            </Icon>
            <Typography>
              {starsNumber} ({totalReviews})
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
