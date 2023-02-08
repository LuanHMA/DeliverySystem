import { ShoppingCartSimple } from "phosphor-react";
import { Link } from "react-router-dom";

export function EmptyCart() {
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
