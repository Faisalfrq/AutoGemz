import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const rentApi = createApi({
  reducerPath: "rentApi",
  baseQuery: fetchBaseQuery({ baseUrl: `http://localhost:7777/` }),
  tagTypes: ["Rent"],
  endpoints: (builder) => ({
    getAllRentCars: builder.query({
      query: () => `getAllRentCars/`,
      providesTags: ["Rent"],
    }),
    getOneRentCars: builder.query({
      query: (id) => `getOneRentCars/${id}`,
    }),
    addRentCar: builder.mutation({
      query: (payload) => {
        // debugger
        return {
          url: `addRentCar/`,
          method: "POST",
          body: payload,
          transformResponse: (response, meta, arg) => {
            return response.data;
          },
          transformErrorResponse: (response, meta, arg) => {
            return response.status;
          },
          invalidatesTags: ["Rent"],
        };
      },
    }),
    deleteRentCar: builder.mutation({
      query: (id) => ({
        url: `deleteRentCar/${id}`,
        method: "DELETE",
        transformResponse: (response, meta, arg) => {
          return response.data;
        },
        transformErrorResponse: (response, meta, arg) => {
          return response.status;
        },
        invalidatesTags: ["Rent"],
      }),
    }),
    updateOneRentCar: builder.mutation({
      query: ({ id, payload }) => ({
        url: `/updateOneRentCar/${id}`,
        method: "PUT",
        body: payload,
      }),
      transformResponse: (response, meta, arg) => {
        return response.data;
      },
      transformErrorResponse: (response, meta, arg) => {
        return response.status;
      },
      invalidatesTags: ["Rent"],
    }),
  }),
});
export const {
  useAddRentCarMutation,
  useDeleteRentCarMutation,
  useGetAllRentCarsQuery,
  useUpdateOneRentCarMutation,
  useGetOneRentCarsQuery
} = rentApi;
