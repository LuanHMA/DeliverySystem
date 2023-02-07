import { useAppSelector } from "../../hooks/useAppSelector";
import { ShoppingCart } from "phosphor-react";
import { OverviewActions } from "./OverviewActions";

export function OverviewHome() {
  const productsState = useAppSelector((state) => state.products);

  return (
    <div className="hidden md:block mt-10 bg-neutral-900 h-max rounded-lg p-6">
      <h1 className="flex items-center gap-x-2 text-xl text-white mb-4 pb-2 border border-t-0 border-l-0 border-r-0">
        <ShoppingCart size={32} color="white" />
        Carrinho
      </h1>

      <div className="pl-4">
        {productsState.map(({ name, qtd }, index) => {
          return (
            <div className="flex items-center gap-x-2">
              <OverviewActions position={index} qtdItems={qtd} />
              <h1 className="text-white text-md">{name}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}
