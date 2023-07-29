import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "@/redux/features/category/categorySlice";
import productReducer from "@/redux/features/product/productSlice";

export const store = configureStore({
  reducer: {
    category: categoryReducer,
    product: productReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});
