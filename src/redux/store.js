import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "@/redux/features/category/categorySlice";

export const store = configureStore({
  reducer: {
    category: categoryReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});
