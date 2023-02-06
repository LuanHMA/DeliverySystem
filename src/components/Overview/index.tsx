import burgerImg from "../../assets/burger.jpg";
import { OverviewActions } from "./OverviewActions";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useDispatch } from "react-redux";
import { setNewProductToCart } from "../../redux/features/products/products-slice";

export function Overview() {
  const { products } = useAppSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div className="overflow-auto max-h-[570px] ">
      {products.map(({ name, price, qtd }, index) => {
        return (
          <div
            className="flex items-center w-full bg-neutral-900 mt-4 p-4 text-white rounded-lg "
            key={index}
          >
            <img
              src={burgerImg}
              alt={name}
              style={{ width: "60px", height: "60px", borderRadius: "10px" }}
            />
            <div className="bg-neutral-8000 flex flex-col items-start ml-4">
              <h1 className="text-lg">{name}</h1>
              <p className="text-lg">R$ {price.toFixed(2)}</p>
              <OverviewActions position={index} qtdItems={qtd} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
