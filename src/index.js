import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import { Provider } from 'react-redux'
import { configureStore } from "@reduxjs/toolkit"
import productReducer, { productFatch } from "./redux/product/productsSlice.jsx"
import { productsApi } from './redux/product/productsApi.jsx'
import creatsReducer from "./redux/cart/cart.jsx"

const store = configureStore({
  reducer: {
    products: productReducer,
    cart: creatsReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(productsApi.middleware)
  },
})

store.dispatch(productFatch())

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
