import { Box, LinearProgress, Typography } from "@mui/material";

export default function ProgressBar() {
  const progress = 75;

  return (
    <Box
      sx={{
        width: "100%",
        padding: "0.5rem 0.5rem 0 0.5rem",
        marginTop: "1rem 0.5rem 0 0.5rem",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography fontFamily="Montserrat" fontWeight={400}>
          Progress
        </Typography>
        <Typography fontFamily="Montserrat" color="#546FFF">
          {progress}%
        </Typography>
      </Box>

      <LinearProgress
        variant="determinate"
        value={progress}
        sx={{
          height: "0.5rem",
          borderRadius: "0.5rem",
          marginTop: "0.5rem",
          "& .MuiLinearProgress-bar": {
            backgroundColor: "#546FFF",
            borderRadius: "0.5rem",
          },
          backgroundColor: "#C7D2FE",
        }}
      />
    </Box>
  );
}
