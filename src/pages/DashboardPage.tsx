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
        minHeight: "100vh",
        display: "grid",
        gap: { xs: "1rem", md: "1.25rem" },
        gridTemplateColumns: {
          xs: "1fr",
          lg: "minmax(0, 2.5fr) minmax(18rem, 1.5fr)",
        },
        gridTemplateRows: "auto",
        padding: { xs: "1rem", md: "1rem" },
        backgroundColor: "#fafafaff",
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateRows: { xs: "auto auto auto", md: "auto auto minmax(0, 1fr)" },
          gap: "1rem",
          minHeight: 0,
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "minmax(0, 1fr) minmax(0, 2fr)" },
            gap: "1rem",
          }}
        >
          <RunningTasks />

          <ActivityWidget data={weeklyTasks} />
        </Box>
        <Box>
          <Carousel label="Monthly Mentors" length={10}>
            <TeacherCard />
          </Carousel>
        </Box>
        <Box
          sx={{
            flex: 1,
            minHeight: 0,
            overflowY: { xs: "visible", md: "auto" },
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
          gridTemplateRows: { xs: "12rem 16rem", md: "1fr 2fr" },
          minHeight: { xs: "auto", lg: 0 },
          flex: "1",
          backgroundColor: "#F5F5F7",
          borderRadius: "0.75rem",
        }}
      >
        <Box
          sx={{
            borderRadius: "0.65rem",
            margin: "1rem 1rem 0.5rem 1rem",
            backgroundColor: "white",
          }}
        ></Box>
        <Box
          sx={{
            borderRadius: "0.65rem",
            margin: "0.5rem 1rem 1rem 1rem",
            backgroundColor: "white",
          }}
        ></Box>
      </Box>
    </Box>
  );
}
