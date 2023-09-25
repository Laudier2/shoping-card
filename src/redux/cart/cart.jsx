import { createAction, createReducer } from "@reduxjs/toolkit";

const INITIAL_STATE = []

export const addItem = createAction('AADD_ITEM')
export const removeItem = createAction('REMOVE_ITEM')

export default createReducer(INITIAL_STATE, {
    // Adiciona um item expecifico a lista do carrimho
    [addItem.type]: (state, action) => [...state, action.payload],
    // Filtra um item especifico e remove
    [removeItem.type]: ((state, action) => state.filter((item) => item.product.id !== action.payload))
})
