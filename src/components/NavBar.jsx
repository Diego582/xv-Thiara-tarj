import {
  AppBar,
  Avatar,
  Box,
  IconButton,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import user_actions from "../store/actions/users";
const { signout } = user_actions;

export default function NavBar() {
  const handleLogout = () => {
    dispatch(signout());
    navigate("/");
  };

  return (
    <>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#010101",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          p: 2,
          flexWrap: "wrap",
        }}
      >
        <Box>
          <Typography variant="h4" sx={{ color: "white" }}>
            Torneo Regional
          </Typography>
        </Box>
        <Box sx={{ display: { xs: "block", md: "none" } }}>
          <IconButton sx={{ color: "white" }}>
            <MenuRoundedIcon />
          </IconButton>
        </Box>
        <Box
          sx={{ display: { xs: "none", md: "flex", flexWrap: "wrap" } }}
        ></Box>
        <Box sx={{ display: { xs: "none", sm: "flex" } }}></Box>
      </AppBar>
    </>
  );
}
