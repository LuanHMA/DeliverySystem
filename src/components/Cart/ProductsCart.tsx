import { OverviewActions } from "./OverviewActions";
import burgerImg from "../../assets/burger.jpg";
import { ProductsStateProps } from "../../redux/features/products/products-slice";

interface ProductsProps {
  products: ProductsStateProps[];
}

export function ProductsCart({ products }: ProductsProps) {
  return (
    <>
      {products.map(({ name, price, qtd }, index) => {
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
            <div className="bg-neutral-8000 flex flex-col items-start ml-4 ">
              <h1 className="text-md sm:text-lg font-bold">{name}</h1>
              <p className="text-md sm:text-lg">R$ {price.toFixed(2)}</p>
              <OverviewActions position={index} qtdItems={qtd} />
            </div>
          </div>
        );
      })}
    </>
  );
}
