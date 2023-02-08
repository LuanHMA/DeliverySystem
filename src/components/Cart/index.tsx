import burgerImg from "../../assets/burger.jpg";
import { OverviewActions } from "./OverviewActions";
import { useAppSelector } from "../../hooks/useAppSelector";
import { ShoppingCartSimple } from "phosphor-react";
import { Link } from "react-router-dom";
import { totProducts } from "../../utils/totProducts";

export function Overview() {
  const { productsCart } = useAppSelector((state) => state);
  console.log(productsCart);

  return (
    <div className="flex flex-col justify-between gap-y-12">
      <div className="overflow-auto max-h-[570px] ">
        {productsCart.map(({ name, price, qtd }, index) => {
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
        })}
      </div>

      <div className="flex flex-col items-center">
        <h1
          className={`bg-neutral-900 p-2 rounded-lg rounded-b-none w-1/2 m-auto text-white text-xl text-center`}
        >
          <b>Total:</b> R$ 300,00
        </h1>
        <button
          className={`bg-green-600 p-4 rounded-lg rounded-t-none w-1/2 m-auto text-white hover:bg-green-600 transition-all`}
          onClick={() => totProducts(productsCart)}
        >
          Finalizar Pedido
        </button>
      </div>
    </div>
  );
}
