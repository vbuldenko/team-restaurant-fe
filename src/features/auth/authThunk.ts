import { createAsyncThunk } from "@reduxjs/toolkit";
import { authService } from "../../services/authService";
import { accessTokenService } from "../../services/accessTokenService";
import { fetchUserData } from "../user/userThunk";
import { ErrorResponse } from "../../types/Error";
import { getErrorMessage } from "../../utils";
import { setError } from "./authSlice";

export const checkAuth = createAsyncThunk<
  void, // Return type of the successful request
  void, // Argument type
  { rejectValue: ErrorResponse } // Type for rejected value
>("auth/checkAuth", async (_, { rejectWithValue }) => {
  try {
    const { accessToken } = await authService.refresh();
    accessTokenService.save(accessToken);
  } catch (error: any) {
    accessTokenService.remove();
    const message = getErrorMessage(error) || "Unexpected error occurred";
    return rejectWithValue({ message });
  }
});

export const login = createAsyncThunk<
  void,
  { identifier: string; password: string },
  { rejectValue: ErrorResponse }
>("auth/login", async (credentials, { dispatch, rejectWithValue }) => {
  try {
    const { token } = await authService.login(credentials);
    accessTokenService.save(token);
    // dispatch(fetchUserData());
  } catch (error: any) {
    const message = getErrorMessage(error) || "Unexpected error occurred";

    setTimeout(() => dispatch(setError(null)), 2000);

    return rejectWithValue({ message });
  }
});

export const activate = createAsyncThunk<
  void,
  string,
  { rejectValue: ErrorResponse }
>("auth/activation", async (activationToken, { dispatch, rejectWithValue }) => {
  try {
    const { accessToken } = await authService.activate(activationToken);
    accessTokenService.save(accessToken);
    dispatch(fetchUserData());
  } catch (error: any) {
    const message = getErrorMessage(error) || "Unexpected error occurred";

    return rejectWithValue({ message });
  }
});

export const logOut = createAsyncThunk<
  void,
  void,
  { rejectValue: ErrorResponse }
>("auth/logout", async (_, { dispatch, rejectWithValue }) => {
  try {
    accessTokenService.remove();
    await authService.logout();
  } catch (error: any) {
    const message = getErrorMessage(error) || "Unexpected error occurred";

    setTimeout(() => dispatch(setError(null)), 3000);

    return rejectWithValue({ message });
  }
});
