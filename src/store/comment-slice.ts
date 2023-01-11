import { createSlice } from "@reduxjs/toolkit";

export interface commentStateObj {
    id: number;
    content: string;
    author: string;
    user_id: number;
    forum_thread_id: number;
    created_at: string;
    updated_at: string;
}

const initialState: commentStateObj[] = [];

const commentSlice = createSlice({
    name: "comments",
    initialState,
    reducers: {
        getAllComments(state, action) {
            return [...state, ...action.payload];
        },
        removeAllComments() {
            return [];
        },
    },
});

export const commentActions = commentSlice.actions;
export default commentSlice;
