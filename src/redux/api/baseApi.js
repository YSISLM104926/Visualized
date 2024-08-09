// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
    tagTypes: ['Datas'],
    endpoints: (builder) => ({
        getData: builder.query({
            query: () => `/data`,
            providesTags: ['Datas']
        }),
        addData: builder.mutation({
            query: (payload) => ({
                url: `/data`,
                method: 'POST',
                body: payload
            }),
            invalidatesTags: ['Datas']
        }),
        updateData: builder.mutation({
            query(payload) {
                const { id, ...body } = payload
                return {
                    url: `/data/${id}`,
                    method: 'PATCH',
                    body,
                }
            },
            invalidatesTags: ['Datas']
        }),
        deleteData: builder.mutation({
            query: (id) => ({
                url: `/data/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Datas']
        }),
        getDataById: builder.query({
            query: (id) => `/data/${id}`,
            providesTags: ['Datas']
        }),
        authLogin: builder.mutation({
            query: (payload) => ({
                url: '/api/auth/login',
                method: 'POST',
                body: payload
            }),
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetDataQuery, useDeleteDataMutation, useAddDataMutation, useUpdateDataMutation, useGetDataByIdQuery, useAuthLoginMutation } = baseApi