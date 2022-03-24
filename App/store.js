import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./features/category/categorySlice";
import cartSlice from "./slices/cartSlice";
import mealSlice from "./slices/mealSlice";
import orderSlice from "./slices/orderSlice";
import userSlice from "./slices/userSlice";

export default configureStore({
    reducer: {
      categories: categorySlice,
      meals: mealSlice,
      orders: orderSlice,
      carts: cartSlice,
      users: userSlice
    },
});