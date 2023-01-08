import { createSlice } from "@reduxjs/toolkit";



export const numberInputSlice = createSlice({
    name: "counter",
    initialState: {
        inputValue:0,
        count:0,
        num1:0,
        num2:0,
        num3:0,
        num4:0,
    },
    reducers: {
        setInputNumber: (state, action) => {
            state.inputValue = action.payload
            state.count +=1;
        },
        setNumState1: (state, action) => {
            state.num1 = action.payload
        },
        setNumState2: (state, action) => {
            state.num2 = action.payload
        },
        setNumState3: (state, action) => {
            state.num3 = action.payload
        },
        setNumState4: (state, action) => {
            state.num4 = action.payload
        },
    },
});


export const { setInputNumber,setNumState1,setNumState2,setNumState3,setNumState4 } = numberInputSlice.actions;
export default numberInputSlice.reducer;