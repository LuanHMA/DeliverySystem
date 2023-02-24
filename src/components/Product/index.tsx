import burgerImg from "../../assets/burger.jpg";
import { ProductsStateProps } from "../../redux/features/products/products-slice";

interface ProductProps {
  productsData: ProductsStateProps[];
  addToCart: (
    name: string,
    price: number,
    initialPrice: number,
    qtd: number,
    description?: string
  ) => void;
}

export function Product({ productsData, addToCart }: ProductProps) {
  return (
    <>
      {productsData.map(
        ({ name, price, description, initialPrice, qtd }, index) => {
          return (
            <>
              <div
                className="bg-neutral-800 rounded-lg mt-4 py-4  flex justify-between cursor-pointer transition-all hover:bg-neutral-900 hover:px-4 hover:border-white"
                key={index}
                onClick={() => addToCart(name, price, initialPrice, qtd,description)}
              >
                <div className="flex items-start">
                  <img
                    src={burgerImg}
                    alt={name}
                    style={{
                      width: "80px",
                      height: "80px",
                      borderRadius: "10px",
                    }}
                  />
                  <div className="ml-2 max-w-[220px] md:max-w-[400px]">
                    <h1 className="text-white text-md sm:text-lg font-bold">
                      {name}
                    </h1>
                    <h2 className="text-white text-sm sm:text-md max-w-[40vw] sm:max-w-[30vw]">
                      {description}
                    </h2>
                  </div>
                </div>
                <span className="text-white text-sm sm:text-lg font-bold">
                  R$ {price.toFixed(2)}
                </span>
              </div>

              <div className="bg-neutral-900 opacity-50 h-[1px] w-full rounded-lg"></div>
            </>
          );
        }
      )}
    </>
  );
}
