import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitalStateProps {
  id: number;
  name: string;
  price: number;
  qtd: number;
}

const initialState: InitalStateProps[] = [];

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setNewProductToCart: (state, action: PayloadAction<InitalStateProps>) => {
      return [...state, action.payload];
    },
  },
});

export const { setNewProductToCart } = productsSlice.actions;
export const productsReducer = productsSlice.reducer;
