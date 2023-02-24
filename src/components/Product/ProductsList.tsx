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
import { Description } from "@radix-ui/react-dialog";

//Dados da lista
const artesanal = [
  {
    name: "Thor",
    price: 38,
    description:
      "2 hambúrgueres, alface, queijo, molho brothers especial, picles num pão de gergelim",
    initialPrice: 38,
    qtd: 1,
  },
  {
    name: "Loki",
    price: 35,
    description:
      "Nosso delicioso El Bacon porém em dose dupla, pão brioche, 2 blend de 100g, fatias de cheddar cremosa, fatias de bacon em tiras crocantes e molho à sua escolha.",
    initialPrice: 35,
    qtd: 1,
  },
];
const simpleBurgers = [
  {
    name: "X-Montanha",
    price: 20,
    description:
      "2 Carnes, 2 pães,  2 queijos, 2 presuntos, 2 bacons, 2 calabresas, 2 ovos e molhos",
    initialPrice: 20,
    qtd: 1,
  },
  {
    name: "X-Tudo",
    price: 14,
    description: "Carne, pão, queijo, presunto, bacon, calabresa, ovo e molhos",
    initialPrice: 14,
    qtd: 1,
  },
  {
    name: "X-EggBacon",
    price: 13,
    description: "Carne, pão, queijo, presunto, bacon, ovo e molhos",
    initialPrice: 13,
    qtd: 1,
  },
  {
    name: "X-Salada",
    price: 12,
    description: "Carne, pão, queijo, alface, tomate e cebola roxa",
    initialPrice: 12,
    qtd: 1,
  },
];

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
        <Product productsData={artesanal} addToCart={addToCart} />
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
