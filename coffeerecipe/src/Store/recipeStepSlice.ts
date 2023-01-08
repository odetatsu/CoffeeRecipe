import { createSlice } from "@reduxjs/toolkit";
export const recipeStepSlice = createSlice({
    name: "counter",
    initialState: {
        orderRatio: 0,
        minutesDate: 0,
        secondDate: 0,
        temperature: 0,
        order: 0,
    },
    reducers: {
        setorderRatio: (state, action) => {
            state.orderRatio = action.payload
        },
        setminutesDate: (state, action) => {
            state.minutesDate = action.payload
        },
        setsecondDate: (state, action) => {
            state.secondDate = action.payload
        },
        settemperature: (state, action) => {
            state.temperature = action.payload
        },
        setorder: (state, action) => {
            state.order = action.payload
        },
        
    },
});


export const { setorderRatio,setminutesDate,setsecondDate,settemperature,setorder } = recipeStepSlice.actions;
export default recipeStepSlice.reducer;