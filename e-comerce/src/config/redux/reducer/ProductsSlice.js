import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "products",
    initialState: {
        data: [],
        filterData: []
    },
    reducers: {
        setDataByAmount: (state, action) => {
            state.data.push(action.payload);
        },
        filterDataByAmount: (state, action) => {
            state.filterData.push(action.payload);
        }
    }
})

export const { setDataByAmount, filterDataByAmount } = productSlice.actions;
export default productSlice.reducer;