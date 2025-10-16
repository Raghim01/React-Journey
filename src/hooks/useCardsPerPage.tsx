import { useEffect, useState } from "react";

export function useCardsPerPage() {
  const [cardsPerPage, setCardsPerPage] = useState(1);

  useEffect(() => {
    const updateCardsPerPage = () => {
      const width = window.innerWidth;
      if (width >= 1440) {
        setCardsPerPage(5);
      } else if (width >= 1024) {
        setCardsPerPage(3);
      } else if (width >= 601) {
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
