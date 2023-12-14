import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import Reloj from "../components/Reloj";
const Home = () => {
  const urlImg = "url(http://imgfz.com/i/EQbu3zA.jpeg)";

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "end",
        width: "100%",
        height: "100vh",
        color: "white",
        backgroundImage: urlImg,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Reloj seconds={1000000000} sytle={{ display: "flex" }} />
    </Box>
  );
};

export default Home;
