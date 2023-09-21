import CartActionTypes from "./action-types";

const initialState = {
    prodcuts: [],
    productsTotalPrice: 0
};

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case CartActionTypes.ADD_PRODUCT:
            return {...initialState, state: [...initialState.prodcuts, action.payload]};
        default:
            return state;
    }
}

/*
export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case CartActionTypes.ADD_PRODUCT:
            return {
                ...initialState,
                prodcut: [initialState.prodcuts, action.payload],
            };
        default:
            return state;
    }
}
*/

//export default cartReducer;