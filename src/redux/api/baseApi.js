import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://visual-backend-eight.vercel.app',
        prepareHeaders: (headers, { getState }) => {
            const token = localStorage.getItem('accessToken');
            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }
            return headers;
        },
    }),
    tagTypes: ['Datas'],
    endpoints: (builder) => ({
        getData: builder.query({
            query: () => `/data`,
            providesTags: ['Datas'],
        }),
        addData: builder.mutation({
            query: (payload) => ({
                url: `/data`,
                method: 'POST',
                body: payload,
            }),
            invalidatesTags: ['Datas'],
        }),
        updateData: builder.mutation({
            query(payload) {
                const { id, ...body } = payload;
                return {
                    url: `/data/${id}`,
                    method: 'PATCH',
                    body,
                };
            },
            invalidatesTags: ['Datas'],
        }),
        deleteData: builder.mutation({
            query: (id) => ({
                url: `/data/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Datas'],
        }),
        getDataById: builder.query({
            query: (id) => `/data/${id}`,
            providesTags: ['Datas'],
        }),
        authLogin: builder.mutation({
            query: (payload) => ({
                url: '/api/auth/login',
                method: 'POST',
                body: payload,
            }),
        }),
    }),
});

export const {
    useGetDataQuery,
    useDeleteDataMutation,
    useAddDataMutation,
    useUpdateDataMutation,
    useGetDataByIdQuery,
    useAuthLoginMutation
} = baseApi;
