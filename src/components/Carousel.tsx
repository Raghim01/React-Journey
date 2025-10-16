import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { IconButton, Typography } from "@mui/material";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Slide from "@mui/material/Slide";
import Stack from "@mui/material/Stack";
import { useCardsPerPage } from "../hooks/useCardsPerPage";

interface CarouselProps {
  label: string;
  children: React.ReactElement;
  length: number;
}

// TODO: make carousel generic, avoid current hardconding
// type CarouselProps<T> = {
//   label: string;
//   items: T[];
//   renderCard: (item: T) => React.ReactNode;
// }

export function Carousel({ label, children, length }: CarouselProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const [slideDirection, setSlideDirection] = useState<
    "right" | "left" | undefined
  >("left");

  const cardsPerPage = useCardsPerPage();

  const cardsToDisplay = Array.from({ length }, (_, i) =>
    React.cloneElement(children, { key: i })
  );
  const totalPages = Math.ceil(cardsToDisplay.length / cardsPerPage);

  const handleNextPage = () => {
    setSlideDirection("left");
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setSlideDirection("right");
    setCurrentPage((prevPage) => prevPage - 1);
  };

  useEffect(() => {
    if (currentPage >= totalPages) {
      setCurrentPage(Math.max(0, totalPages - 1));
    }
  }, [totalPages, currentPage]);

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mb: 1.5,
          alignItems: "center",
        }}
      >
        <Typography sx={{ fontWeight: 500, fontSize: "1.25rem" }}>
          {label}
        </Typography>
        <Box>
          <IconButton
            onClick={handlePrevPage}
            className="carousel-btn prev"
            disabled={currentPage === 0}
          >
            <NavigateBeforeIcon />
          </IconButton>
          <IconButton
            onClick={handleNextPage}
            className="carousel-btn next"
            disabled={currentPage >= totalPages - 1}
          >
            <NavigateNextIcon />
          </IconButton>
        </Box>
      </Box>

      <Box className="carousel-wrapper">
        <Box className="carousel-container">
          {Array.from({ length: totalPages }).map((_, pageIndex) => (
            <Box
              key={`page-${pageIndex}`}
              sx={{
                width: "100%",
                height: "100%",
                display: currentPage === pageIndex ? "block" : "none",
              }}
            >
              <Slide direction={slideDirection} in={currentPage === pageIndex}>
                <Stack
                  spacing={2}
                  direction="row"
                  className="task-cards"
                  sx={{ width: "100%", height: "100%" }}
                >
                  {cardsToDisplay.slice(
                    pageIndex * cardsPerPage,
                    pageIndex * cardsPerPage + cardsPerPage
                  )}
                </Stack>
              </Slide>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
