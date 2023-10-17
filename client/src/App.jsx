import { Outlet } from "react-router-dom";
import TopBar from "./components/topbar/TopBar";

export default function App() {
  return (
    <>
      <TopBar />
      <Outlet />
    </>
  )
}
