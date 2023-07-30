import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "@/redux/features/category/categorySlice";
import productReducer from "@/redux/features/product/productSlice";
import builderReducer from "@/redux/features/builder/builderSlice";

export const store = configureStore({
  reducer: {
    category: categoryReducer,
    product: productReducer,
    builder: builderReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});
