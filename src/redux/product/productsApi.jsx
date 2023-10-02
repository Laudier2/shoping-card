import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const productsApi = createApi({
    reducerPath: "producttsApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://api-store-1ce9da7c9ae6.herokuapp.com/" }),
    endpoints: (builder) => ({
        getAllOroducts: builder.query({
            query: () => "product"
        })
    })
})

export const { useGetAllProductsQuery } = productsApi;