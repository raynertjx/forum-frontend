import { createSlice } from "@reduxjs/toolkit";

export interface threadStateObj {
    id: number;
    title: string;
    content: string;
    user_id: number;
    created_at: string;
    updated_at: string;
    username: string;
    forum_category_id: number;
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
