import { CarouselButton } from "../components/buttons/carousel-button";
import { TeacherCard } from "../components/cards/TeacherCard.tsx";
import { UpcomingTaskCard } from "../components/cards/UpcomingTaskCard.tsx";

export function DashboardPage() {
  return (
    <div className="dashboard-container">
      <header className="welcome-text">
        <span className="greeting">Hi, username 👋</span>
        <span className="subtitle">Let's finish your tasks for today!</span>
      </header>

      <section className="tasks-widget">
        <div className="running-tasks">
          <span>Running Tasks</span>
          <span>10</span>
        </div>

        <div className="total-tasks">
          <div className="progress-bar"></div>
          <div className="total-tasks-number">
            <span>100</span>
            <span>Tasks</span>
          </div>
        </div>
      </section>

      <section className="activity-widget">
        <div className="selector">
          <span>Activity</span>
          <span className="see-all">See All</span>
        </div>
        <div className="graph" />
      </section>

      <section className="monthly-teachers-widget">
        <CarouselButton label="Monthly Mentors" />
        <div className="teachers-container">
          <TeacherCard />
          <TeacherCard />
        </div>
      </section>

      <section className="upcoming-tasks-widget">
        <CarouselButton label="Upcoming Tasks" />
        <div className="upcoming-tasks-container">
          <UpcomingTaskCard />
          <UpcomingTaskCard />
        </div>
      </section>

      <aside className="task-today">
        <h2>Today's Tasks</h2>
        <div className="task-placeholder">Your tasks will appear here.</div>
      </aside>
    </div>
  );
}
