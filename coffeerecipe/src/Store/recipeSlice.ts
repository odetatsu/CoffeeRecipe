import { createSlice } from "@reduxjs/toolkit";



export const recipeSlice = createSlice({
    name: "recipeInfo",
    initialState: {
        recipeKey:0,
    },
    reducers: {
        setRecipeKey: (state, action) => {
            state.recipeKey = action.payload;
        },
    },
});


export const { setRecipeKey } = recipeSlice.actions;
export default recipeSlice.reducer;