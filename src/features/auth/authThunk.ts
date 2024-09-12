import { createAsyncThunk } from "@reduxjs/toolkit";
import { authService } from "../../services/authService";
import { accessTokenService } from "../../services/accessTokenService";
import { fetchUserData } from "../user/userThunk";

export const checkAuth = createAsyncThunk(
  "auth/initialize",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const { accessToken } = await authService.refresh();
      accessTokenService.save(accessToken);
      dispatch(fetchUserData()); // Fetch user data if the token is valid
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
