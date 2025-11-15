import React from "react";
import bookSquare from "../../assets/book-square.svg";

export default function Logo() {
  return (
    <img
      src={bookSquare}
      alt="Nuegas logo"
      style={{
        width: "40px",
        height: "40px",
        objectFit: "contain",
      }}
    />
  );
}
