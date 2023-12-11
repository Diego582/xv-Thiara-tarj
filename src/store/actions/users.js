import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const signin = createAsyncThunk("signin", async (obj) => {
  try {
  } catch (error) {}
});

const user_actions = { signin };
export default user_actions;
