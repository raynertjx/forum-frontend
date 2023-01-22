import { createSlice } from "@reduxjs/toolkit";

const initialState: string[] = ["Home"];

const breadcrumbSlice = createSlice({
    name: "breadcrumbs",
    initialState,
    reducers: {
        getAllCrumbs(state, action) {
            return [...state, ...action.payload];
        },
        removeAllCrumbs() {
            return initialState;
        },
    },
});

export const breadcrumbActions = breadcrumbSlice.actions;
export default breadcrumbSlice;
