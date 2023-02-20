import { useDispatch } from "react-redux";
import {
  selectProduct,
  setNewProductToCart,
} from "../../redux/features/products/products-slice";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../hooks/useAppSelector";
import { Product } from ".";

//Dados da lista
const artesanal = [
  {
    name: "Imperador",
    price: 38,
    description:
      "2 hambúrgueres, alface, queijo, molho brothers especial, picles num pão de gergelim",
    initialPrice: 38,
    qtd: 1,
  },
  {
    name: "Rei",
    price: 35,
    description:
      "Nosso delicioso El Bacon porém em dose dupla, pão brioche, 2 blend de 100g, fatias de cheddar cremosa, fatias de bacon em tiras crocantes e molho à sua escolha.",
    initialPrice: 35,
    qtd: 1,
  },
  {
    name: "Rainha",
    price: 34,
    description:
      "Pão brioche selado na chapa, 3 blends de 90g, fatias de queijo cheddar, fatias de bacon e molho à sua escolha.",
    initialPrice: 34,
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

  //Função para enviar dados para o carrinho.
  function addToCart(
    name: string,
    price: number,
    initialPrice: number,
    qtd: number
  ) {
    const productData = {
      name,
      price,
      qtd,
      id: productsState.length,
      initialPrice,
    };
    dispatch(setNewProductToCart(productData));
  }

  return (
    <div>
      <div className="sm:pr-4">
        <h1 className="bg-yellow-500 rounded-lg text-xl p-2 font-bold">
          Burgues Premium
        </h1>
        <Product productsData={artesanal} addToCart={addToCart} />
      </div>

      <div className="mt-6 sm:pr-4">
        <h1 className="bg-yellow-500 rounded-lg text-xl p-2 font-bold">
          Burgues Simples
        </h1>
        <Product productsData={simpleBurgers} addToCart={addToCart} />
      </div>
    </div>
  );
}
