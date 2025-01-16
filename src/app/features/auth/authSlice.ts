import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { accessTokenService } from "../../../services/accessTokenService";
import { activate, checkAuth, login, logOut } from "./authThunk";
import { RootState } from "../../store";
import { ErrorResponse } from "../../../types/Error";

export interface AuthState {
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  isAuthenticated: Boolean(accessTokenService.get()),
  loading: false,
  error: null,
};

const handlePending = (state: AuthState) => {
  state.loading = true;
  state.error = null;
};

const handleFulfilled = (state: AuthState) => {
  state.isAuthenticated = true;
  state.loading = false;
  state.error = null;
};

const handleRejected = (
  state: AuthState,
  action: PayloadAction<ErrorResponse | undefined>
) => {
  state.isAuthenticated = false;
  state.loading = false;
  state.error = action.payload?.message || "An unknown error occurred";
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(checkAuth.pending, handlePending)
      .addCase(checkAuth.fulfilled, handleFulfilled)
      .addCase(checkAuth.rejected, handleRejected)
      .addCase(login.pending, handlePending)
      .addCase(login.fulfilled, handleFulfilled)
      .addCase(login.rejected, handleRejected)
      .addCase(activate.pending, handlePending)
      .addCase(activate.fulfilled, handleFulfilled)
      .addCase(activate.rejected, handleRejected)
      .addCase(logOut.fulfilled, (state) => {
        state.isAuthenticated = false;
        state.loading = false;
        state.error = null;
      })
      .addCase(logOut.rejected, handleRejected);
  },
});

export const { setError } = authSlice.actions;

export const selectAuth = (state: RootState) => state.auth;
export default authSlice.reducer;
