import { configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "../features/products/products-slice";

export const store = configureStore({
  reducer: productsReducer,
});
type GetStateType = typeof store.getState;

export type RootType = ReturnType<GetStateType>;
