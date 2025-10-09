import ProgressBar from "../progress/linear";
import TimeIcon from "../../assets/Time Circle.svg";

export function UpcomingTaskCard() {
  return (
    <div className="upcoming-tasks-main">
      <div className="info">
        <span className="task-name">Task Name</span>
        <span className="task-category">Category</span>
      </div>
      <ProgressBar />
      <div className="time-left">
        <TimeIcon />
        <span>Time Left</span>
      </div>
    </div>
  );
}
