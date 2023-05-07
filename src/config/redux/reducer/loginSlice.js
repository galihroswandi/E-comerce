import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
    name: "login",
    initialState: {
        dataLogin: {}
    },
    reducers: {
        setLogin: (state, action) => {
            state.dataLogin = action.payload;
        }
    }
})

export const { setLogin } = loginSlice.actions;
export default loginSlice.reducer;