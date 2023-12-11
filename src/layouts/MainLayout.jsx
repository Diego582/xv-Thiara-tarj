import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../pages/Footer";

export default function MainLayout() {
  return (
    <Box sx={{ minHeight: "100vh" }}>
      <NavBar />
      <Box sx={{ height: "50%" }}>
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
}
