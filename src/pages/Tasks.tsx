import { Carousel } from "../components/Carousel";
import { SearchAndFilter } from "../components/common/SearchFilter";
import { TaskCard } from "../components/cards/TaskCard";
import { Box } from "@mui/material";

export function Tasks() {
  return (
    <Box className="tasks">
      <Box className="search-and-filters">
        <SearchAndFilter />
      </Box>
      <Box className="content">
        <Box className="carousel-component">
          <Carousel label="Time Limit" length={10}>
            <TaskCard />
          </Carousel>
        </Box>

        <Box className="carousel-component">
          <Carousel label="New Tasks" length={10}>
            <TaskCard />
          </Carousel>
        </Box>
      </Box>
    </Box>
  );
}
