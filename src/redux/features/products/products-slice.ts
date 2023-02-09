import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ProductsCartProps {
  name: string;
  price: number;
  qtd: number;
  id?: number;
  description?: string;
  initialPrice: number;
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
      //Lógica para aumentar o preço do item
      productsCart[payload].price += productsCart[payload].initialPrice;
    },

    decreaseQtdProduct: ({ productsCart }, { payload }: PayloadNumber) => {
      productsCart[payload].qtd -= 1;
      //Logica para diminuir o preço do item
      productsCart[payload].price -= productsCart[payload].initialPrice;
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
