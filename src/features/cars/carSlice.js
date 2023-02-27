import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const carApi = createApi({
  reducerPath: "carApi",
  baseQuery: fetchBaseQuery({ baseUrl: `http://localhost:7777/` }),
  tagTypes: ["Car"],
  endpoints: (builder) => ({
    getAllCars: builder.query({
      query: () => `getAllCars/`,
      providesTags: ["Car"],
    }),
    getOneCar: builder.query({
      query: (id) => `getOneCar/${id}`,
    }),
    addUsedCar: builder.mutation({
      query: (payload) => {
        // debugger
        return {
          url: `addUsedCar/`,
          method: "POST",
          body: payload,
          transformResponse: (response, meta, arg) => {
            return response.data;
          },
          transformErrorResponse: (response, meta, arg) => {
            return response.status;
          },
          invalidatesTags: ["Car"],
        };
      },
    }),
    deleteUsedCar: builder.mutation({
      query: (id) => ({
        url: `deleteUsedCar/${id}`,
        method: "DELETE",
        transformResponse: (response, meta, arg) => {
          return response.data;
        },
        transformErrorResponse: (response, meta, arg) => {
          return response.status;
        },
        invalidatesTags: ["Car"],
      }),
    }),
    updateUsedCarById: builder.mutation({
      query: ({ id, payload }) => ({
        url: `/updateUsedCarById/${id}`,
        method: "PUT",
        body: payload,
      }),
      transformResponse: (response, meta, arg) => {
        return response.data;
      },
      transformErrorResponse: (response, meta, arg) => {
        return response.status;
      },
      invalidatesTags: ["Car"],
    }),
  }),
});
export const {
  useGetAllCarsQuery,
  useGetOneCarQuery,
  useAddUsedCarMutation,
  useDeleteUsedCarMutation,
  useUpdateUsedCarByIdMutation,
} = carApi;
