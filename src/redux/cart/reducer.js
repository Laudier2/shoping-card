import CartActionTypes from "./action-types";

const initialState = {
    prodcuts: [],
    productsTotalPrice: 0,
};

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case CartActionTypes.ADD_PRODUCT:
            // Verifica seja tem um produto no carrinhop
            const productIsAlreadyInCart = state.prodcuts.some(
                (product) => product.id === action.payload.id
            )
            //Se ele estiver, aumenter a sua quantidade em 1
            if(productIsAlreadyInCart){
                return {
                    ...state,
                    state2: state.prodcuts.map((product) => 
                    product.id === action.payload.id
                    ? { ...product, quantity: product.quantity + 1 }
                    : product
                    )
                }
            }

            // Se ele não estiver, declina=lo
            return {
                ...state,
                state2: [...state.prodcuts, { ...action.payload, quantity: 1 }]
            }
        default:
            return state;
    }
}

//export default cartReducer;