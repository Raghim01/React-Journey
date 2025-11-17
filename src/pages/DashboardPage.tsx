import { Box, CircularProgress, Typography } from "@mui/material";
import { TeacherCard } from "../components/cards/TeacherCard.tsx";
import { UpcomingTaskCard } from "../components/cards/UpcomingTaskCard.tsx";
import { Carousel } from "../components/Carousel.tsx";
import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";

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
        display: {
          sm: "grid",
        },
        gridTemplateColumns: "2.5fr 1.5fr",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: "1rem 1rem 0rem 1rem",
        }}
      >
        <Box>
          <Typography>Hi, username 👋</Typography>
          <Typography>Let's finish your tasks for today!</Typography>
        </Box>

        <Box sx={{ display: "flex", gap: "1rem", margin: "1rem 0" }}>
          <Box
            style={{
              border: "0.1rem solid black",
              borderRadius: "0.5rem",
              padding: "0.5rem",
            }}
          >
            <Typography>Running Tasks</Typography>
            <Typography>65</Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <Box sx={{ position: "relative", display: "inline-flex" }}>
                <CircularProgress variant="determinate" value={75} />
                <Box
                  sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: "absolute",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    variant="caption"
                    component="div"
                    sx={{ color: "text.secondary" }}
                  >{`75%`}</Typography>
                </Box>
              </Box>
              <Typography>100 Tasks</Typography>
            </Box>
          </Box>

          <Box
            sx={{
              flex: 1,
              border: "1px solid black",
              borderRadius: "0.5rem",
              padding: "0.5rem",
            }}
          >
            <Typography>Activity</Typography>
            <ResponsiveContainer width="100%" height={100}>
              <LineChart data={weeklyTasks}>
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#000"
                  strokeWidth={3}
                  dot={{
                    r: 4,
                    fill: "#fff",
                    stroke: "#3f51b5",
                    strokeWidth: 2,
                  }}
                  activeDot={{ r: 6 }}
                />
                <Tooltip
                  contentStyle={{
                    background: "#000",
                    color: "#fff",
                    borderRadius: "6px",
                    padding: "4px 8px",
                    border: "none",
                  }}
                  formatter={(v) => [`${v} Task`, ""]}
                />
              </LineChart>
            </ResponsiveContainer>
          </Box>
        </Box>

        <Box>
          <Carousel label="Monthly Mentors" length={10}>
            <TeacherCard />
          </Carousel>
        </Box>

        <Box>
          <Carousel label="Upcoming Tasks" length={10}>
            <UpcomingTaskCard />
          </Carousel>
        </Box>
      </Box>

      <Box>
        <Typography>Today's Tasks</Typography>
      </Box>
    </Box>

    // <div className="dashboard-container">
    //   <section className="activity-widget">
    //     <div className="selector">
    //       <span>Activity</span>
    //       <span className="see-all">See All</span>
    //     </div>
    //     <div className="graph" />
    //   </section>

    // </div>
  );
}
