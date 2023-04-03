import { configureStore } from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";
import counterReducer from "../reducer/counterSlice";
import productsReducer from "../reducer/ProductsSlice";

export const store = configureStore({
    reducer: {
        products: productsReducer,
        counter: counterReducer,
    },
    middleware: [thunkMiddleware]
})
