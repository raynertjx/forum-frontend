import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        loggedIn: false,
    },
    reducers: {
        toggle(state) {
            state.loggedIn = !state.loggedIn;
        },
    },
});

export const authActions = authSlice.actions;
export default authSlice;
