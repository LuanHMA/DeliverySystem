import { useAppSelector } from "../../hooks/useAppSelector";
import { ShoppingCartSimple } from "phosphor-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ProductsCart } from "./ProductsCart";

export function Overview() {
  const { productsState } = useAppSelector((state) => state);
  const [totAmountState, setTotAmountState] = useState(0);

  useEffect(() => {
    calculateTotalAmount();
  }, [productsState]);

  const calculateTotalAmount = () => {
    let totAmount = 0;

    productsState.map((product) => {
      return (totAmount += product.price);
    });

    setTotAmountState(totAmount);
  };

  return (
    <div className="flex flex-col justify-between gap-y-12 ">
      <div className="overflow-auto max-h-[570px] ">
        <ProductsCart products={productsState} />
      </div>

      <div className="flex flex-col items-center">
        <h1
          className={`bg-neutral-900 p-2 rounded-lg rounded-b-none w-full max-w-md m-auto text-white text-xl text-center font-bold`}
        >
          <span className="text-sm mr-1 font-normal">TOTAL</span>
          <span className="text-green-500">R$ {totAmountState.toFixed(2)}</span>
        </h1>
        <button
          className={`bg-red-600 py-4 rounded-lg rounded-t-none w-full max-w-md m-auto text-white text-xl font-bold hover:bg-red-600 transition-all`}
        >
          Finalizar Pedido
        </button>
      </div>
    </div>
  );
}
