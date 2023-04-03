import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: {
        value: 1,
    },
    reducers: {
        incrementByAmont: (state, action) => {
            state.value += action.payload
        },
        decrementByAmount: (state, action) => {
            state.value -= action.payload
        }
    }
})

export const { incrementByAmont, decrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;