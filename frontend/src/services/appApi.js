import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

//create api

export const appApi = createApi({
    reducerPath: 'appApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
    endpoints: (builder) => ({
        signup: builder.mutation({
            query: (user) => ({
                url: "/users/signup",
                method: "POST",
                body: user,
            }),
        }),

        login: builder.mutation({
            query: (user) => ({
                url: "/users/login",
                method: "POST",
                body: user,
            }),
        }),
    })
})

export const {
    useSignupMutation,
    useLoginMutation,
    // useCreateProductMutation,
    // useAddToCartMutation,
    // useRemoveFromCartMutation,
    // useIncreaseCartProductMutation,
    // useDecreaseCartProductMutation,
    // useCreateOrderMutation,
    // useDeleteProductMutation,
    // useUpdateProductMutation,
} = appApi;

export default appApi;