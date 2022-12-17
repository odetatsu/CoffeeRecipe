import { configureStore } from "@reduxjs/toolkit";
import  counterReducer  from "./counterSlice"
import { useSelector as rawUseSelector, TypedUseSelectorHook } from "react-redux";

export const store = configureStore({
    reducer: {
        counter:counterReducer,
    },
});


export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const useSelector: TypedUseSelectorHook<RootState> = rawUseSelector