import ProgressBar from "../progress/linear";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import TaskImage from "../../assets/task.jpg";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

export function TaskCard() {
  return (
    <Card className="task-card">
      <CardMedia image={TaskImage} className="preview" title="task image" />
      <CardContent className="description">
        <Typography className="title">Some Title</Typography>
        <Typography className="subtitle">Some Subtitle</Typography>
      </CardContent>
      <ProgressBar />
      <CardContent className="time">
        <AccessTimeOutlinedIcon style={{ fontSize: "medium" }} />
        <Typography>Time Left</Typography>
      </CardContent>
    </Card>
  );
}
