import { Carousel } from "../components/Carousel";
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
            <Carousel label="Time Limit"></Carousel>
          </div>
          <div className="new">
            <Carousel label="New Tasks"></Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}
