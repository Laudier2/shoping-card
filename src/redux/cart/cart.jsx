import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify"

const initialState = {
    cartItems: [],
    cartTotalQuantyti: 0,
    cartTotalAmount: 0,
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addCart(state, action) {

            const itemsIndex = state.cartItems.findIndex((item) => item.id === action.payload.id)
            if (itemsIndex >= 0) {
                state.cartItems[itemsIndex].cartQuantity += 1
                toast.info(`${action.payload.name} ja ta no carrinho, agora são ${state.cartItems[itemsIndex].cartQuantity}`, {
                    position: "bottom-left"
                })
            } else {
                const tempProduct = { ...action.payload, cartQuantity: 1 };
                state.cartItems.push(tempProduct)
                toast.success(`${action.payload.name} adicionado ao carrimho`, {
                    position: "bottom-left"
                })
            }
        }
    }
})

export const { addCart } = cartSlice.actions;

export default cartSlice.reducer;

