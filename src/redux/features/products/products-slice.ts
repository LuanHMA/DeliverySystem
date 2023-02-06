import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProductsProps {
  name: string;
  price: number;
  qtd: number;
  id: number;
}
interface InitalStateProps {
  products: Array<ProductsProps>;
}

const initialState: InitalStateProps = {
  products: [],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setNewProductToCart: (state, action: PayloadAction<ProductsProps>) => {
      state.products.push(action.payload);
    },
    removeOneProductToCart: (state, action: PayloadAction<number>) => {
      state.products.splice(action.payload, 1);
    },
    increaseQtdProduct: (state, action: PayloadAction<number>) => {
      state.products[action.payload].qtd += 1;
    },
    decreaseQtdProduct: (state, action: PayloadAction<number>) => {
      state.products[action.payload].qtd -= 1;
    },
  },
});

export const {
  setNewProductToCart,
  removeOneProductToCart,
  increaseQtdProduct,
  decreaseQtdProduct,
} = productsSlice.actions;
export const productsReducer = productsSlice.reducer;
