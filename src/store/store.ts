import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
import threadSlice from "./thread-slice";
import categorySlice from "./category-slice";

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        threads: threadSlice.reducer,
        categories: categorySlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
