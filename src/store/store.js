import { configureStore } from "@reduxjs/toolkit";

import carttReducer from '../redux/cart/cart'


export default configureStore({
    reducer: {
        cart: carttReducer
    }
})