import { CarouselButton } from "../components/buttons/carousel-button";
import ProgressBar from "../components/progress/linear";
import TimeIcon from "../assets/Time Circle.svg";

export function DashboardPage({ open }: { open: boolean }) {
  return (
    <div className={`dashboard-container ${open ? "expanded" : "collapsed"}`}>
      <div className="welcome-text">
        <span>H1, username</span>
        <span>Let's finish your tasks for today!</span>
      </div>

      <div className="tasks-widget">
        <div className="running-tasks">
          <span>Running Tasks</span>
          <span>10</span>
        </div>

        <div className="total-tasks">
          <div className="progress-bar"></div>
          <div className="total-tasks-number">
            <span>100</span>
            <span>Task</span>
          </div>
        </div>
      </div>

      <div className="activity-widget">
        <div className="selector">
          <span>Activity</span>
          <span>See All</span>
        </div>
        <div className="graph"></div>
      </div>

      <div className="monthly-teachers-widget">
        <CarouselButton label="Monthly Teachers" />
        <div className="teachers-widget-main">
          <div className="teacher-info">
            <div className="teacher-details">
              <div className="avatar"></div>
              <div className="info">
                <span className="name">John Doe</span>
                <span className="profession">Profession</span>
              </div>
            </div>
            <span className="follow">+ Follow</span>
          </div>

          <div className="statistics">
            <span>10 Tasks</span>
            <div className="rating">
              <div className="stars"></div>
              <span>(270 reviews)</span>
            </div>
          </div>
        </div>
      </div>

      <div className="upcoming-tasks-widget">
        <CarouselButton label="Upcoming Tasks" />
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
      </div>
    </div>
  );
}
