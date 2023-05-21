import { createSlice } from "@reduxjs/toolkit";

const checkoutSlice = createSlice({
    name: "checkout",
    initialState: {
        data: [],
        message: []
    },
    reducers: {
        setDataCheckout: (state, action) => {
            state.data = action.payload
        },
        setMessage: (state, action) => {
            state.message.push(action.payload)
        }
    }
})

export const { setDataCheckout, setMessage } = checkoutSlice.actions;
export default checkoutSlice.reducer;