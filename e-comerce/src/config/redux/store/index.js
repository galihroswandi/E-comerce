import { configureStore } from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";
import productsReducer from "../reducer/ProductsSlice";
import cartReducer from "../reducer/cartSlice";
import loadingReducer from "../reducer/loading";
import counterReducer from "../reducer/counterSlice";

export const store = configureStore({
    reducer: {
        products: productsReducer,
        cart: cartReducer,
        loading: loadingReducer,
        counter: counterReducer,
    },
    middleware: [thunkMiddleware]
})
