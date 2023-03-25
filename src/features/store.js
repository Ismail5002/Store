import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import categoriesSlice from "./categories/categoriesSlice";
import ProductsSlice from "./Products/ProductsSlice";
import { apiSlice } from "./api/apiSlice";
import userSlice from "./user/userSlice";

export const store = configureStore({
  reducer: {
    categories: categoriesSlice,
    products: ProductsSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
    user: userSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});
