import { createSlice } from "@reduxjs/toolkit";

export interface categoryStateObj {
    id: number;
    name: string;
    latest_thread: string;
    created_at: string;
    updated_at: string;
    thread_count: number;
    url: string;
    subtitle: string;
}

const initialState: categoryStateObj[] = [];

const categorySlice = createSlice({
    name: "categories",
    initialState,
    reducers: {
        getAllCategories(state, action) {
            return [
                ...state,
                ...action.payload.sort(
                    (a: categoryStateObj, b: categoryStateObj) => {
                        return a.id - b.id;
                    }
                ),
            ];
        },
        removeAllCategories() {
            return [];
        },
    },
});

export const categoryActions = categorySlice.actions;
export default categorySlice;
