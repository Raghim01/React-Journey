import { CarouselButton } from "../components/buttons/carousel-button";
import { TaskCard } from "../components/cards/TaskCard";
import { SearchAndFilter } from "../components/common/SearchFilter";
import { UserHeaderComponent } from "../components/common/UserHeadert";

export function Tasks() {
  return (
    <div className="tasks">
      <div>
        <UserHeaderComponent label="Eplore Tasks" />
        <SearchAndFilter />
      </div>
      <div className="content">
        <div className="main">
          <div className="time">
            <CarouselButton label="Time Limit" />
            <div className="task-cards">
              <TaskCard />
              <TaskCard />
              <TaskCard />
              <TaskCard />
            </div>
          </div>
          <div className="new">
            <CarouselButton label="New Tasks" />
            <div className="task-cards">
              <TaskCard />
              <TaskCard />
              <TaskCard />
              <TaskCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
