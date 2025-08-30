import { Outlet } from "react-router-dom";
import NavBar from "../NavBar";

export const AppLayout = () => {
  return (
    <main>
      <Outlet />
      <NavBar />
    </main>
  );
};
