import { configureStore } from "@reduxjs/toolkit";
import  numberInputReducer  from "./numberInputSlice"
import recipeReducer from "./recipeSlice"
import recipeStepReducer from "./recipeStepSlice"
import { useSelector as rawUseSelector, TypedUseSelectorHook } from "react-redux";

export const store = configureStore({
    reducer: {
        numberInput:numberInputReducer,
        recipe:recipeReducer,
        recipeStep:recipeStepReducer,
    },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useSelector: TypedUseSelectorHook<RootState> = rawUseSelector