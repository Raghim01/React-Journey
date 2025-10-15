import ProgressBar from "../progress/linear";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";

export function UpcomingTaskCard() {
  return (
    <div className="upcoming-tasks-main">
      <div className="info">
        <span className="task-name">Task Name</span>
        <span className="task-category">Category</span>
      </div>
      <ProgressBar />
      <div className="time-left">
        <AccessTimeOutlinedIcon style={{ fontSize: "medium" }} />
        <span>Time Left</span>
      </div>
    </div>
  );
}
