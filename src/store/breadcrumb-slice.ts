import { createSlice } from "@reduxjs/toolkit";

export interface breadcrumbStateObj {
    crumb: string;
}

const initialState: breadcrumbStateObj[] = [];

const breadcrumbSlice = createSlice({
    name: "breadcrumbs",
    initialState,
    reducers: {
        getAllCrumbs(state, action) {
            return [...state, ...action.payload];
        },
        removeAllCrumbs() {
            return [];
        },
    },
});

export const breadcrumbActions = breadcrumbSlice.actions;
export default breadcrumbSlice;
