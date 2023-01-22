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
        removeCrumbs() {
            return initialState.slice(0, -1);
        }
    },
});

export const breadcrumbActions = breadcrumbSlice.actions;
export default breadcrumbSlice;
