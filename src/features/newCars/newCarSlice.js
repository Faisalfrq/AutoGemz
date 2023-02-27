import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const newCarApi = createApi({
  reducerPath: "newCarApi",
  baseQuery: fetchBaseQuery({ baseUrl: `http://localhost:7777/` }),
  tagTypes: ["NewCar"],
  endpoints: (builder) => ({
    getAllNewCars: builder.query({
      query: () => `getAllNewCars/`,
      providesTags: ["NewCar"],
    }),
    getOneNewCar: builder.query({
      query: (id) => `getOneNewCar/${id}`,
    }),
    addNewCar: builder.mutation({
      query: (payload) => {
        // debugger
        return {
          url: `addNewCar/`,
          method: "POST",
          body: payload,
          transformResponse: (response, meta, arg) => {
            return response.data;
          },
          transformErrorResponse: (response, meta, arg) => {
            return response.status;
          },
          invalidatesTags: ["NewCar"],
        };
      },
    }),
    deleteNewCar: builder.mutation({
      query: (id) => ({
        url: `deleteNewCar/${id}`,
        method: "DELETE",
        transformResponse: (response, meta, arg) => {
          return response.data;
        },
        transformErrorResponse: (response, meta, arg) => {
          return response.status;
        },
        invalidatesTags: ["NewCar"],
      }),
    }),
    updateNewCar: builder.mutation({
      query: ({ id, payload }) => ({
        url: `/updateNewCar/${id}`,
        method: "PUT",
        body: payload,
      }),
      transformResponse: (response, meta, arg) => {
        return response.data;
      },
      transformErrorResponse: (response, meta, arg) => {
        return response.status;
      },
      invalidatesTags: ["NewCar"],
    }),
  }),
});
export const {
    useGetAllNewCarsQuery,
    useGetOneNewCarQuery,
    useAddNewCarMutation,
    useDeleteNewCarMutation,
    useUpdateNewCarMutation
} = newCarApi;
