import { Outlet } from "react-router-dom";
import NavBar from "./Components/Nav Bar/NavBar";
import Footer from "./Components/Footer/Footer";

export default function Root() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}
