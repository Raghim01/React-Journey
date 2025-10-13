import { useState } from "react";
import { NavBar } from "./components/NavBar";
import { Outlet } from "react-router-dom";

function App() {
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

export default App;
