import { createSlice } from "@reduxjs/toolkit";
import SignIn from "../pages/SignIn";

const initialState = {
  currentUser: null,
  token: null,
  loading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
    reducers: {
        SignInStart: (state) => {
            state.loading = true;
        },
        SignInSuccess: (state, action) => {
            state.currentUser = action.payload;
            state.loading = false;
            state.error= null;
        },
        SignInFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        udpateUserStart: (state) => {
            state.loading = true;
        },
        updateUserSuccess: (state, action) => {
            state.currentUser = action.payload;
            state.loading = false;
            state.error= null;
        },
        updateUserFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        updateUserFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    }
});

export const { SignInStart, SignInSuccess, SignInFailure, updateUserFailure, updateUserSuccess, udpateUserStart } = userSlice.actions;
export default userSlice.reducer;