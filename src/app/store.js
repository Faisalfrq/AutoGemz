import { configureStore } from "@reduxjs/toolkit";
import { carApi } from "../features/cars/carSlice";
import { feedApi } from "../features/feedback/feedbackSlice";
import { newCarApi } from "../features/newCars/newCarSlice";
import { rentApi } from "../features/rent/rentSlice";
import { userApi } from "../features/users/userSlice";
import  { authApi } from "../features/auth/authSlice";
import { adminApi } from "../features/admin/adminSlice";
// authReducer,
export const store = configureStore({
  reducer: {
    // authSlice: authReducer,
    [carApi.reducerPath]: carApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [feedApi.reducerPath]: feedApi.reducer,
    [newCarApi.reducerPath]: newCarApi.reducer,
    [rentApi.reducerPath]: rentApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [adminApi.reducerPath]: adminApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(carApi.middleware)
      .concat(userApi.middleware)
      .concat(feedApi.middleware) 
      .concat(newCarApi.middleware)
      .concat(rentApi.middleware)
      .concat(authApi.middleware)
      .concat(adminApi.middleware),
  devTools: true,
});
