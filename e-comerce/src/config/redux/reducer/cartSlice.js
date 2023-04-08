import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        data: []
    },
    reduers: {
        addGlobalCart: (state, action) => {
            state.data.push(action.payload);
        }
    }
})

export const { addGlobalCart } = cartSlice.actions;
export default cartSlice.reducer;