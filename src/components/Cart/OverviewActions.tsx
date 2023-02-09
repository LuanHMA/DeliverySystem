import { PlusCircle, XCircle } from "phosphor-react";
import { useDispatch } from "react-redux";
import {
  removeOneProductToCart,
  increaseQtdProduct,
  decreaseQtdProduct,
} from "../../redux/features/products/products-slice";

interface OverviewActionsProps {
  position: number;
  qtdItems: number;
}

export function OverviewActions({ position, qtdItems }: OverviewActionsProps) {
  const dispatch = useDispatch();

  const addItem = () => {
    dispatch(increaseQtdProduct(position));
  };

  const removeItem = () => {
    if (qtdItems === 1) {
      dispatch(removeOneProductToCart(position));
    } else {
      dispatch(decreaseQtdProduct(position));
    }
  };

  return (
    <div className="flex item-center justify-start gap-x-2 mt-1">
      <span className="text-white text-md sm:text-lg font-bold">Qtd: </span>
      <div className="flex items-center justify-center gap-x-1">
        <button onClick={removeItem}>
          <XCircle size={30} weight="fill" color="red" />
        </button>
        <span className="text-white text-lg font-bold">{qtdItems} </span>
        <button onClick={addItem}>
          <PlusCircle size={30} weight="fill" color="white" />
        </button>
      </div>
    </div>
  );
}
