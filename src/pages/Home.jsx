import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
const Home = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        height: "45vh",
        backgroundColor: "#232323",
        color: "white",
      }}
    >
      <Typography variant="h3" sx={{ p: 2, textShadow: "black 2px 5px" }}>
        Regional Tournament 3rd edition
      </Typography>
      <Typography variant="h5" sx={{ p: 2 }}>
        Here you will find all the information corresponding to the Tournament.
      </Typography>
      <Typography variant="h5" sx={{ p: 2 }}>
        The Regional Tournament calls for teams from General Conesa, Sierra
        Grande and San Antonio Oeste.
      </Typography>
    </Box>
  );
};

export default Home;
