import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        dataId: [],
        carts: [],
        totalCart: 0
    },
    reducers: {
        setData: (state, action) => {
            state.dataId = action.payload
        },
        setCarts: (state, action) => {
            state.carts = action.payload
        },
        setTotalCart: (state, action) => {
            state.totalCart = action.payload
        }
    }
})

export const { setData, setCarts, setTotalCart } = cartSlice.actions;
export default cartSlice.reducer;