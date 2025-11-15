import { Outlet } from "react-router";

import NavBar from "../components/NavBar";

export function MainLayout() {
  return (
    <div className="layout">
      <NavBar />
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
}
