import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
import threadSlice from "./thread-slice";
import categorySlice from "./category-slice";
import commentSlice from "./comment-slice";

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        categories: categorySlice.reducer,
        threads: threadSlice.reducer,
        comments: commentSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
