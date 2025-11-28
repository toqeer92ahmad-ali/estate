import { createSlice } from "@reduxjs/toolkit";
import SignIn from "../pages/SignIn";
import { deleteUser } from "firebase/auth";

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
        deleteUserStart: (state) => {
            state.loading = true;
        },
        deleteUserSuccess: (state) => {
            state.currentUser = null;
            state.loading = false;
            state.error= null;
        },
        deleteUserFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        signOutUserStart: (state) => {
            state.loading = true;
        },
        signOutUserSuccess: (state) => {
            state.currentUser = null;
            state.loading = false;
            state.error= null;
        },
        signOutUserFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    }
});

export const { SignInStart, SignInSuccess, SignInFailure, updateUserFailure, updateUserSuccess, udpateUserStart
, deleteUserStart, deleteUserSuccess, deleteUserFailure, signOutUserStart, signOutUserSuccess, signOutUserFailure} = userSlice.actions;
export default userSlice.reducer;