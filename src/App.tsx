import { useState } from "react";
import { NavBar } from "./components/NavBar";
import { DashboardPage } from "./pages/DashboardPage";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="app-container">
      <NavBar handleClick={handleClick} isOpen={isOpen} />
      <DashboardPage open={isOpen} />
    </div>
  );
}

export default App;
