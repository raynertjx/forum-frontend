import { createSlice } from "@reduxjs/toolkit";

export interface threadStateObj {
    title: string;
    content: string;
    category: string;
}

const initialState: threadStateObj[] = [];

const threadSlice = createSlice({
    name: "threads",
    initialState,
    reducers: {
        getAllThreads(state, action) {
            state.push(action.payload);
        },
    },
});

export const threadActions = threadSlice.actions;
export default threadSlice;
