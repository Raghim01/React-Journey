import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { IconButton, Typography } from "@mui/material";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Slide from "@mui/material/Slide";
import Stack from "@mui/material/Stack";
import { TaskCard } from "./cards/TaskCard";

interface CarouselProps {
  label: string;
  children?: React.ReactNode;
}

// Hook to get cards per page based on screen size
function useCardsPerPage() {
  const [cardsPerPage, setCardsPerPage] = useState(1);

  useEffect(() => {
    const updateCardsPerPage = () => {
      const width = window.innerWidth;
      if (width >= 1440) {
        setCardsPerPage(5);
      } else if (width >= 1024) {
        setCardsPerPage(3);
      } else if (width >= 768) {
        setCardsPerPage(2);
      } else {
        setCardsPerPage(1);
      }
    };

    updateCardsPerPage();
    window.addEventListener("resize", updateCardsPerPage);
    return () => window.removeEventListener("resize", updateCardsPerPage);
  }, []);

  return cardsPerPage;
}

export function Carousel({ label, children }: CarouselProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const [slideDirection, setSlideDirection] = useState<
    "right" | "left" | undefined
  >("left");

  const cardsPerPage = useCardsPerPage();

  const cardsToDisplay = children
    ? (React.Children.toArray(children) as React.ReactElement[])
    : Array.from({ length: 10 }, (_, i) => <TaskCard key={i} />);

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
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
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
