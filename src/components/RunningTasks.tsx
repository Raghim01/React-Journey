import { Box, CircularProgress, Typography } from "@mui/material";

export default function RunningTasks() {
  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        border: "0.1rem solid black",
        borderRadius: "0.65rem",
        gap: "1.5rem",
        backgroundColor: "#141522",
      }}
    >
      <Typography
        sx={{ fontSize: "1rem", margin: "1rem 0 0 1.5rem" }}
        color="white"
      >
        Running Tasks
      </Typography>
      <Typography
        sx={{ fontSize: "2rem", fontWeight: "500", marginLeft: "1.5rem" }}
        color="white"
      >
        65
      </Typography>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          marginLeft: "1.5rem",
        }}
      >
        <Box sx={{ position: "relative" }}>
          <CircularProgress variant="determinate" value={75} size={70} />
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
              color="white"
            >{`75%`}</Typography>
          </Box>
        </Box>
        <Box sx={{ alignSelf: "center", justifySelf: "center" }}>
          <Typography color="white" fontSize="1.5rem">
            100
          </Typography>
          <Typography color="#8E92BC" fontSize="0.85rem">
            Tasks
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
