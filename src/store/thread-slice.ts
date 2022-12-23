import { createSlice } from "@reduxjs/toolkit";

export interface threadStateObj {
    category: string;
    content: string;
    created_at: string;
    id: number;
    title: string;
    updated_at: string;
    user_id: number;
    username: string;
}

const initialState: threadStateObj[] = [];

const threadSlice = createSlice({
    name: "threads",
    initialState,
    reducers: {
        getAllThreads(state, action) {
            return [...state, ...action.payload];
        },
        removeAllThreads() {
            return [];
        },
    },
});

export const threadActions = threadSlice.actions;
export default threadSlice;
