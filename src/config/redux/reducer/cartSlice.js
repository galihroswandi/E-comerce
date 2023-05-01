import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        carts: [],
        totalCart: 0
    },
    reducers: {
        setCarts: (state, action) => {
            state.carts = action.payload
        },
        setTotalCart: (state, action) => {
            state.totalCart = action.payload
        },
    }
})

export const { setCarts, setTotalCart } = cartSlice.actions;
export default cartSlice.reducer;