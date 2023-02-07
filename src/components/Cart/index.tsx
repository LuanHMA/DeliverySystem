import burgerImg from "../../assets/burger.jpg";
import { OverviewActions } from "./OverviewActions";
import { useAppSelector } from "../../hooks/useAppSelector";
import { ShoppingCartSimple } from "phosphor-react";
import { Link } from "react-router-dom";

function EmptyCart() {
  return (
    <div className="flex flex-col items-center justify-center mt-16">
      <h1 className="text-2xl text-white flex flex-col items-center">
        <ShoppingCartSimple size={70} color="white" />
        Seu carrinho está vázio
      </h1>
      <Link
        to="/"
        className="bg-green-500 py-2 px-4 rounded-lg mt-4 hover:bg-green-600 transition-all"
      >
        Continuar Comprando
      </Link>
    </div>
  );
}

export function Overview() {
  const { products } = useAppSelector((state) => state);

  return (
    <div className="overflow-auto max-h-[570px] ">
      {products.length == 0 ? (
        <EmptyCart />
      ) : (
        products.map(({ name, price, qtd }, index) => {
          return (
            <div
              className="flex items-center w-full bg-neutral-900 mt-4 p-4 text-white rounded-lg "
              key={index}
            >
              <img
                src={burgerImg}
                alt={name}
                style={{ width: "80px", height: "80px", borderRadius: "10px" }}
              />
              <div className="bg-neutral-8000 flex flex-col items-start ml-4">
                <h1 className="text-md sm:text-lg font-bold">{name}</h1>
                <p className="text-md sm:text-lg">R$ {price.toFixed(2)}</p>
                <OverviewActions position={index} qtdItems={qtd} />
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}
