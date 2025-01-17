import { createAsyncThunk } from "@reduxjs/toolkit";
import { authService } from "../../../services/authService";
import { accessTokenService } from "../../../services/accessTokenService";
import { userService } from "../../../services/userService";
import { ErrorResponse } from "../../../types/Error";
import { getErrorMessage } from "../../../utils";
import { setError } from "./userSlice";
import { User } from "../../../types/User";

export const checkAuth = createAsyncThunk<
  void, // Return type of the successful request
  void, // Argument type
  { rejectValue: ErrorResponse } // Type for rejected value
>("user/checkAuth", async (_, { rejectWithValue }) => {
  try {
    const { token } = await authService.refresh();
    accessTokenService.save(token);
  } catch (error: any) {
    accessTokenService.remove();
    return rejectWithValue({ message: getErrorMessage(error) });
  }
});

export const login = createAsyncThunk<
  User,
  { email: string; password: string },
  { rejectValue: ErrorResponse }
>("user/login", async (credentials, { dispatch, rejectWithValue }) => {
  try {
    const { token } = await authService.login(credentials);
    accessTokenService.save(token);
    return await userService.getProfile();
  } catch (error: any) {
    // setTimeout(() => dispatch(setError(null)), 3000);
    return rejectWithValue({ message: getErrorMessage(error) });
  }
});

export const activate = createAsyncThunk<
  User,
  string,
  { rejectValue: ErrorResponse }
>("user/activation", async (activationToken, { dispatch, rejectWithValue }) => {
  try {
    const { token } = await authService.activate(activationToken);
    accessTokenService.save(token);
    return await userService.getProfile();
  } catch (error: any) {
    setTimeout(() => dispatch(setError(null)), 2000);
    return rejectWithValue({ message: getErrorMessage(error) });
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
    setTimeout(() => dispatch(setError(null)), 3000);
    return rejectWithValue({ message: getErrorMessage(error) });
  }
});
