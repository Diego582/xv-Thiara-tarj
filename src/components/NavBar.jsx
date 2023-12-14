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

  return <></>;
}
