import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",

  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:7777/" }),

  tagTypes: ["User"], //==

  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => `getAllUsers/`,
      providesTags: ["User"],
    }),
    getOneUser: builder.query({
      query: (id) => `getOneUser/${id}`,
    }),
    addUsers: builder.mutation({
      query: (payload) => ({
        url: `addUsers/`,
        method: "POST",
        body: payload,
        transformResponse: (response, meta, arg) => {
          return response.data;
        },
        transformErrorResponse: (response, meta, arg) => {
          return response.status;
        },
        invalidatesTags: ["User"], //===
      }),
    }),
    addCarToUser: builder.mutation({
      query: (id, payload) => ({
        url: `users/${id}/create`,
        method: "POST",
        body: payload,
        transformResponse: (response, meta, arg) => {
          return response.data;
          // return response.status;
        },
        transformErrorResponse: (response, meta, arg) => {
          return response.status;
        },
        invalidatesTags: ["User"], //===
      }),
    }),
    getAllCars: builder.query({
      query: (id) => `users/${id}/getAllCars`,
      providesTags: ["User"], //===
    }),
    updateUser: builder.mutation({
      query: ({ id, payload }) => ({
        url: `/updateUser/${id}`,
        method: "PUT",
        body: payload,
      }),
      transformResponse: (response, meta, arg) => {
        return response.data;
      },
      transformErrorResponse: (response, meta, arg) => {
        return response.status;
      },
      invalidatesTags: ["User"],
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `deleteUser/${id}`,
        method: "DELETE",
        transformResponse: (response, meta, arg) => {
          return response.data;
        },
        transformErrorResponse: (response, meta, arg) => {
          return response.status;
        },
        invalidatesTags: ["User"],
      }),
    }),
  }),
});
export const {
  useGetAllUsersQuery,
  useGetOneUserQuery,
  useAddUsersMutation,
  useUpdateUserMutation,
  useDeleteUserMutation
} = userApi;
