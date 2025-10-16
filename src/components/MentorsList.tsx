import { Box, Typography } from "@mui/material";
import { MentorCard } from "./cards/MentorCard";
import { useCardsPerPage } from "../hooks/useCardsPerPage";

interface MentorsListProps {
  data: {
    name: string;
    speciality: string;
    taskNumber: number;
    totalReviews: number;
    starsNumber: number;
    description: string;
  }[];
}

export function MentorsList({ data }: MentorsListProps) {
  const cardsPerPage = useCardsPerPage();

  return (
    <Box className="mentors-list">
      <Typography className="mentors-list-label">All Mentors</Typography>
      <Box
        className="mentors-list-content"
        sx={{ gridTemplateColumns: `repeat(${cardsPerPage}, 1fr)` }}
      >
        {data.map((mentor) => (
          <MentorCard
            name={mentor.name}
            speciality={mentor.speciality}
            taskNumber={mentor.taskNumber}
            totalReviews={mentor.totalReviews}
            starsNumber={mentor.starsNumber}
            description={mentor.description}
          />
        ))}
      </Box>
    </Box>
  );
}
