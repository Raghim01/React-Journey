import ProgressBar from "../progress/linear";
import TimeIcon from "../../assets/Time Circle.svg";
import TaskImage from "../../assets/task.jpg";

export function TaskCard() {
  return (
    <div className="task-card">
      <img className="preview" src={TaskImage} alt="Task"></img>
      <div className="description">
        <span className="title">Some Title</span>
        <span className="subtitle">Some Subtitle</span>
      </div>
      <ProgressBar />
      <div className="time">
        <TimeIcon />
        <span>Time Left</span>
      </div>
    </div>
  );
}
