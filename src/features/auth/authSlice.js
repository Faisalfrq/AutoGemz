// import { createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// construct API endpoints for sever communication and caching
export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `http://localhost:7777/`,
    prepareHeaders: (headers, { getState }) => {
      // this is how you get token from redux toolkit authslice
      // const token = getState().authSlice.token
      // if (token) {
        /** this is how you inject it into the header 
         * you will practically not need to do this prepareHeaders and 
         * appending token here. It will be done in other slices like
         * where you are posting a car ad or whatever and that needs 
         * you to have a token before posting.
         * 
         * You will do this prepare header step there
         * LEARN FROM THIS EXAMPLE THIS WILL NOT BE IMPLEMENTED HERE
         * 
         */ 
        
        // headers.append({ 'x-access-token': token })
      // }
      // debugger
    } 
  }),
  tagTypes: ["userCreds"],
  endpoints: (builder) => ({
    loginUser: builder.query({
      query: (payload) => {
        // debugger
        return {
          url: `login/`,
          method: "POST",
          body: payload,
          transformResponse: (response, meta, arg) => {
            // debugger
            return response.data;
          },
          transformErrorResponse: (response, meta, arg) => {
            // debugger
            return response.status;
          },
        };
      },
      providesTags: ['userCreds']
    }),
  }),
});
export const {
  useLazyLoginUserQuery,
} = authApi;

// construct an auth slice to keep track of user creds throughout the app
// export const authSlice = createSlice({
//   name: "authSlice",
//   initialState: {
//     user: null,
//     email: null,
//     token: null,
//     refreshToken: null,
//   },
//   reducers: {
//     setCredentials: (state, { payload }) => {
//       state.user = payload.user
//       state.email = payload.email
//       state.token = payload.token
//       state.refreshToken = payload.refreshToken
//     }
//   }
// })

// export const { setCredentials } = authSlice.actions
// export default authSlice.reducer
// export const selectCurrentUser = (state) => {
//   return { name: state.auth.user, email: state.auth.email }
// };  
