import { Box, Typography } from "@mui/material";
import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";

type ActivityWidgetProps = {
  data: { day: string; value: number }[];
};

export default function ActivityWidget({ data }: ActivityWidgetProps) {
  return (
    <Box
      sx={{
        flex: 1,
        border: "1px solid",
        borderRadius: "0.55rem",
        backgroundColor: "#F5F5F7",
      }}
    >
      <Typography
        sx={{
          margin: "1rem 0 0 1.5rem",
          fontWeight: "500",
          fontSize: "1rem",
        }}
      >
        Activity
      </Typography>
      <Box
        sx={{
          backgroundColor: "white",
          display: "flex",
          margin: "2rem 1.5rem 1.5rem 1.5rem",
          borderRadius: "0.65rem",
        }}
      >
        <ResponsiveContainer
          width="100%"
          height={115}
          style={{ padding: "0.75rem" }}
        >
          <LineChart data={data}>
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
  );
}
