import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const feedApi = createApi({
  reducerPath: "feedApi",
  baseQuery: fetchBaseQuery({ baseUrl: `http://localhost:7777/` }),
  tagTypes: ["Feed"],
  endpoints: (builder) => ({
    getAllFeeds: builder.query({
      query: () => `getAllFeeds/`,
      providesTags: ["Feed"],
    }),
    addOneFeedback: builder.mutation({
      query: (payload) => {
        return {
          url: `addOneFeed/`,
          method: "POST",
          body: payload,
        };
      },
      transformResponse: (response, meta, arg) => {
        return response.data;
      },
      transformErrorResponse: (response, meta, arg) => {
        return response.status;
      },
      invalidatesTags: ["Feed"],
    }),
    deleteFeedback: builder.mutation({
      query: (id) => ({
        url: `/deleteOneFeed/${id}`,
        method: "DELETE",
      }),
      transformResponse: (response, meta, arg) => {
        return response.data;
      },
      transformErrorResponse: (response, meta, arg) => {
        return response.status;
      },
      invalidatesTags: ["Feed"],
    }),
  }),
});
export const {
  useGetAllFeedsQuery,
  useAddOneFeedbackMutation,
  useDeleteFeedbackMutation,
} = feedApi;
