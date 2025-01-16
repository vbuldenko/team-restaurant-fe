import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import { User } from "../../../types/User";
import { ErrorResponse } from "../../../types/Error";
import { activate, checkAuth, login, logOut } from "./userThunk";

interface UserState {
  loading: boolean;
  data: Partial<User> | null;
  isAuthenticated: boolean;
  error: string | null;
}

// Define the initial state using that type
const initialState: UserState = {
  loading: false,
  data: null,
  isAuthenticated: false,
  error: null,
};

const handlePending = (state: UserState) => {
  state.loading = true;
  state.error = null;
};

const handleFulfilled = (
  state: UserState,
  action: PayloadAction<Partial<User> | undefined>
) => {
  state.isAuthenticated = true;
  state.data = action.payload || null;
  state.loading = false;
  state.error = null;
};

const handleRejected = (
  state: UserState,
  action: PayloadAction<ErrorResponse | undefined>
) => {
  state.isAuthenticated = false;
  state.data = null;
  state.loading = false;
  state.error = action.payload?.message || "An unknown error occurred";
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(checkAuth.pending, handlePending)
      .addCase(checkAuth.fulfilled, (state) => {
        state.isAuthenticated = true;
        state.loading = false;
        state.error = null;
      })
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
        state.data = null;
        state.error = null;
      })
      .addCase(logOut.rejected, handleRejected);
  },
});

export const { setError } = userSlice.actions;

// Selector to access user state
export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
