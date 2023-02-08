import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ProductsCartProps {
  name: string;
  price: number;
  qtd: number;
  id: number;
}
interface InitalStateProps {
  productsCart: Array<ProductsCartProps>;
}

const initialState: InitalStateProps = {
  productsCart: [],
};

type PayloadProps = PayloadAction<ProductsCartProps>;
type PayloadNumber = PayloadAction<number>;

export const cartSlice = createSlice({
  name: "productsCart",
  initialState,
  reducers: {
    setNewProductToCart: ({ productsCart }, { payload }: PayloadProps) => {
      productsCart.push(payload);
    },

    removeOneProductToCart: ({ productsCart }, { payload }: PayloadNumber) => {
      productsCart.splice(payload, 1);
    },

    increaseQtdProduct: ({ productsCart }, { payload }: PayloadNumber) => {
      productsCart[payload].qtd += 1;

      const initalPrice = productsCart[payload].price;
      //Preço = preço atual + preço inicial
      productsCart;
    },

    decreaseQtdProduct: ({ productsCart }, { payload }: PayloadNumber) => {
      productsCart[payload].qtd -= 1;
      //Preço = preço atual - preço inicial
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
