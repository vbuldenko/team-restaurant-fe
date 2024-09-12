import { createAsyncThunk } from "@reduxjs/toolkit";
import { userService } from "../../services/userService";

export const fetchUserData = createAsyncThunk(
  "user/fetchUser",
  async (_, { rejectWithValue }) => {
    try {
      const user = await userService.getProfile();
      return user;
    } catch (error: any) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
