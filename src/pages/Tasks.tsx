import { Carousel } from "../components/Carousel";
import { SearchAndFilter } from "../components/common/SearchFilter";
import { TaskCard } from "../components/cards/TaskCard";

export function Tasks() {
  return (
    <div className="tasks">
      <div>
        <SearchAndFilter />
      </div>
      <div className="content">
        <div className="main">
          <div className="time">
            <Carousel label="Time Limit" length={10}>
              <TaskCard />
            </Carousel>
          </div>
          <div className="new">
            <Carousel label="Time Limit" length={10}>
              <TaskCard />
            </Carousel>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
