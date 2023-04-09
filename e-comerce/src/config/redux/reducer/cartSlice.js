import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        dataId: [],
        carts: []
    },
    reducers: {
        setData: (state, action) => {
            state.dataId = action.payload
        },
        setCarts: (state, action) => {
            state.carts = action.payload
        }
    }
})

export const { setData, setCarts } = cartSlice.actions;
export default cartSlice.reducer;