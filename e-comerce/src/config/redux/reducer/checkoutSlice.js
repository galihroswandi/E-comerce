import { createSlice } from "@reduxjs/toolkit";

const checkoutSlice = createSlice({
    name: "checkout",
    initialState: {
        data: []
    },
    reducers: {
        setDataCheckout: (state, action) => {
            state.data = action.payload
        }
    }
})

export const { setDataCheckout } = checkoutSlice.actions;
export default checkoutSlice.reducer;