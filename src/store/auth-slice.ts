import { createSlice } from "@reduxjs/toolkit";

export interface authStateObj {
    isLoggedIn: boolean;
    user_id: number | null;
    username: string | null;
}

const initialState: authStateObj = {
    isLoggedIn: false,
    user_id: -1,
    username: "",
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login(state, action) {
            state.isLoggedIn = true;
            state.user_id = action.payload.user_id;
            state.username = action.payload.username;
        },
        logout(state) {
            state.isLoggedIn = false;
            state.user_id = null;
            state.username = null;
        },
    },
});

export const authActions = authSlice.actions;
export default authSlice;
