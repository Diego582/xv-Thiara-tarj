import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Footer = () => {
  const urlImg =
    "url(https://ca-times.brightspotcdn.com/dims4/default/4677b7f/2147483647/strip/true/crop/5484x3656+0+0/resize/1200x800!/format/webp/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fcc%2Fbf%2F6cfde7a2b0f176525ed4e82a3fe7%2F03d66f77d6b449138e49639287442735)";
  return (
    <Box
      sx={{
        backgroundImage: urlImg,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        maxHeight: "80vh",
        filter: "brightness(80%)",
      }}
    >
      <Box
        sx={{
          m: 0,
          width: "100%",
          color: "rgba(255, 255, 255)",
          justifyContent: "center",
          alignItems: "space-between",
        }}
      >
        <Typography
          sx={{ textAlign: "center", m: 0, p: { xs: 1, sm: 3 } }}
          variant="h4"
        >
          MindHud
        </Typography>
        <Typography
          sx={{ textAlign: "center", m: 0, p: { xs: 1, sm: 3 } }}
          variant="h5"
        >
          All rights reserved developed by
          <Link
            to="https://diegopdev.ar/"
            target="_blank"
            style={{ textDecoration: "none", color: "white" }}
          >
            {" "}
            Diego Peña
          </Link>
        </Typography>
        <Typography
          sx={{ textAlign: "center", m: 0, p: { xs: 1, sm: 3 } }}
          variant="h6"
        >
          Hosting of{" "}
          <Link
            to="https://ryp.com.ar/"
            target="_blank"
            style={{ textDecoration: "none", color: "white" }}
          >
            {" "}
            R&P Soluciones Tecnológicas
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
