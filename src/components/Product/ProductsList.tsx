import { useDispatch } from "react-redux";
import {
  selectProduct,
  setNewProductToCart,
} from "../../redux/features/products/products-slice";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../hooks/useAppSelector";
import { Product } from ".";
import { Details } from "../../pages/Order/Details";
import { useState } from "react";
import { artesanalBurgues, simpleBurgers } from "../../data/Lists";

//Dados da lista

export function ProductsList() {
  const { productsState } = useAppSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [ open, setOpen ] = useState(false);


  //Função para enviar dados para o carrinho.
  function addToCart(
    name: string,
    price: number,
    initialPrice: number,
    qtd: number,
    description?: string,
  ) {
    const productData = {
      name,
      price,
      qtd,
      id: productsState.length,
      initialPrice,
      description
    };
    dispatch(selectProduct(productData));
    setOpen(true);
  }

  return (
    <div>
      <div className="sm:pr-4">
        <h1 className="bg-yellow-500 rounded-lg text-xl p-2 font-bold">
          Linha dos Deuses
        </h1>
        <Product productsData={artesanalBurgues} addToCart={addToCart} />
      </div>

      <div className="mt-6 sm:pr-4">
        <h1 className="bg-yellow-500 rounded-lg text-xl p-2 font-bold">
          Linha dos Guerreiros
        </h1>
        <Product productsData={simpleBurgers} addToCart={addToCart} />
      </div>

      <Details open={open} setOpen={setOpen}/>
    </div>
  );
}
