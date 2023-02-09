import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ProductsStateProps {
  name: string;
  price: number;
  qtd: number;
  id?: number;
  description?: string;
  initialPrice: number;
  details?: string[];
}
interface InitalStateProps {
  productsState: Array<ProductsStateProps>;
}

const initialState: InitalStateProps = {
  productsState: [],
};

type PayloadProps = PayloadAction<ProductsStateProps>;
type PayloadNumber = PayloadAction<number>;

export const cartSlice = createSlice({
  name: "ProductsState",
  initialState,
  reducers: {
    setNewProductToCart: ({ productsState }, { payload }: PayloadProps) => {
      productsState.push(payload);
    },

    removeOneProductToCart: ({ productsState }, { payload }: PayloadNumber) => {
      productsState.splice(payload, 1);
    },

    increaseQtdProduct: ({ productsState }, { payload }: PayloadNumber) => {
      productsState[payload].qtd += 1;
      //Lógica para aumentar o preço do item
      productsState[payload].price += productsState[payload].initialPrice;
    },

    decreaseQtdProduct: ({ productsState }, { payload }: PayloadNumber) => {
      productsState[payload].qtd -= 1;
      //Logica para diminuir o preço do item
      productsState[payload].price -= productsState[payload].initialPrice;
    },
  },
});

export const {
  setNewProductToCart,
  removeOneProductToCart,
  increaseQtdProduct,
  decreaseQtdProduct,
} = cartSlice.actions;
export const productsReducer = cartSlice.reducer;
