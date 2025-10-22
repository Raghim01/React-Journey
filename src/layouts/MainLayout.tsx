import { Outlet } from "react-router";
import { useState } from "react";
import { NavBar } from "../components/NavBar";

export function MainLayout() {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggleMenu() {
    setIsOpen((prev) => !prev);
  }

  return (
    <div>
      <NavBar handleClick={handleToggleMenu} isOpen={isOpen} />
      <main className={`content ${isOpen ? "expanded" : "collapsed"}`}>
        <Outlet />
      </main>
    </div>
  );
}
