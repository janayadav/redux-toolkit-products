import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CreateSlice";
import ProductSlice from "./ProductSlice";

const store = configureStore({
  reducer: {
    cart: CartSlice,
    products: ProductSlice,
  },
});
export default store;
