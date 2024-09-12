import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
import { fetchUserData } from "./userThunk";

// Define a type for the slice state
export interface UserState {
  loading: boolean;
  firstName: string;
  lastName: string;
  reservations: Array<any>; // Replace `any` with the appropriate type if you have a defined type for reservations
  role: string;
  dishes: Array<any>; // Replace `any` with the appropriate type if you have a defined type for dishes
}

// Define the initial state using that type
const initialState: UserState = {
  loading: false,
  firstName: "",
  lastName: "",
  reservations: [],
  role: "",
  dishes: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // Set user details
    setUserDetails: (
      state,
      action: PayloadAction<{
        firstName: string;
        lastName: string;
        role: string;
      }>
    ) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.role = action.payload.role;
    },
    // Add a new reservation
    addReservation: (state, action: PayloadAction<any>) => {
      state.reservations.push(action.payload);
    },
    // Remove a reservation by index
    removeReservation: (state, action: PayloadAction<number>) => {
      state.reservations.splice(action.payload, 1);
    },
    // Set dishes for the user
    setDishes: (state, action: PayloadAction<Array<any>>) => {
      state.dishes = action.payload;
    },
    // Add a new dish
    addDish: (state, action: PayloadAction<any>) => {
      state.dishes.push(action.payload);
    },
    // Remove a dish by index
    removeDish: (state, action: PayloadAction<number>) => {
      state.dishes.splice(action.payload, 1);
    },
    // Clear user data
    clearUser: (state) => {
      state.firstName = "";
      state.lastName = "";
      state.reservations = [];
      state.role = "";
      state.dishes = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        const { firstName, lastName, reservations, role, dishes } =
          action.payload;

        state.firstName = firstName;
        state.lastName = lastName;
        state.role = role;
        state.reservations = reservations;
        state.dishes = dishes;
        state.loading = false;
      })
      .addCase(fetchUserData.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const {
  setUserDetails,
  addReservation,
  removeReservation,
  setDishes,
  addDish,
  removeDish,
  clearUser,
} = userSlice.actions;

// Selector to access user state
export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
