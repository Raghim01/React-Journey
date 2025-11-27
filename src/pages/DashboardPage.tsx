import { Box } from "@mui/material";
import { TeacherCard } from "../components/cards/TeacherCard.tsx";
import { Carousel } from "../components/Carousel.tsx";
import { TaskCard } from "../components/cards/TaskCard.tsx";
import RunningTasks from "../components/RunningTasks.tsx";
import ActivityWidget from "../components/ActivityWidget.tsx";

const weeklyTasks = [
  { day: "Sun", value: 1 },
  { day: "Mon", value: 2 },
  { day: "Tue", value: 1.5 },
  { day: "Wed", value: 3 },
  { day: "Thu", value: 2.2 },
  { day: "Fri", value: 2.5 },
  { day: "Sat", value: 2.1 },
];

export function DashboardPage() {
  return (
    <Box
      sx={{
        height: "100%",
        minHeight: 0,
        display: {
          sm: "grid",
        },
        gridTemplateColumns: "2.5fr 1.5fr",
        gridTemplateRows: "1fr",
        backgroundColor: "#fafafaff",
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplate: "1fr 1fr 3fr / 1fr",
          padding: "1rem 1rem 0rem 1rem",
          minHeight: 0,
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplate: "1fr / 1fr 2fr",
            gap: "1.5rem",
            flexWrap: "wrap",
          }}
        >
          <RunningTasks />

          <ActivityWidget data={weeklyTasks} />
        </Box>
        <Box sx={{ marginTop: "1rem" }}>
          <Carousel label="Monthly Mentors" length={10}>
            <TeacherCard />
          </Carousel>
        </Box>
        <Box
          sx={{
            flex: 1,
            minHeight: 0,
            overflowY: "auto",
            margin: "1rem 0",
          }}
        >
          <Carousel label="Upcoming Tasks" length={10}>
            <TaskCard />
          </Carousel>
        </Box>
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gridTemplateRows: "1fr 2fr",
          flex: "1",
          backgroundColor: "#F5F5F7",
        }}
      >
        <Box
          sx={{
            borderRadius: "0.65rem",
            margin: "1rem",
            backgroundColor: "white",
          }}
        ></Box>
        <Box
          sx={{
            borderRadius: "0.65rem",
            margin: "0 1rem 1rem 1rem",
            backgroundColor: "white",
          }}
        ></Box>
      </Box>
    </Box>
  );
}
