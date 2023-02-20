import { OverviewActions } from "./OverviewActions";
import burgerImg from "../../assets/burger.jpg";
import { ProductsStateProps } from "../../redux/features/products/products-slice";

interface ProductsProps {
  products: ProductsStateProps[];
}

interface CartUiProps {
  index: number;
  name: string;
  price: number;
  qtd: number;
  details?: string[];
}

export function ProductsCart({ products }: ProductsProps) {
  return (
    <>
      {products.map(({ name, price, qtd, details }, index) => {
        if (window.innerWidth > 600) {
          return (
            <DesktopCart
              name={name}
              index={index}
              price={price}
              qtd={qtd}
              details={details}
            />
          );
        } else {
          return (
            <MobileCart name={name} index={index} price={price} qtd={qtd} />
          );
        }
      })}
    </>
  );
}

function MobileCart({ index, name, price, qtd }: CartUiProps) {
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
}

function DesktopCart({ index, name, price, qtd, details }: CartUiProps) {
  return (
    <div
      className="flex items-start w-full bg-neutral-900 mt-4 p-4 text-white rounded-lg"
      key={index}
    >
      <img
        src={burgerImg}
        alt={name}
        style={{ width: "80px", height: "80px", borderRadius: "10px" }}
      />
      <div className="bg-neutral-8000 flex flex-col items-start ml-4 ">
        <h1 className="text-md sm:text-lg font-bold">{name}</h1>
        <p className="text-md sm:text-lg font-bold text-green-500">
          R$ {price.toFixed(2)}
        </p>
        <OverviewActions position={index} qtdItems={qtd} />
      </div>

      <div className="flex flex-col ml-6 border-2 border-b-0 border-r-0 border-t-0">
        <h1 className="font-bold ml-2">Detalhes:</h1>
        <div className="flex flex-col flex-wrap ml-4 max-h-20 gap-x-4">
          <h1>2x carne</h1>
          <h1>Batata grande</h1>
          <h1>Coca cola</h1>
          <h1>Coca cola</h1>
          <h1>Coca cola</h1>
          <h1>Coca cola</h1>
        </div>
      </div>
    </div>
  );
}
