import burgerImg from "../assets/burger.jpg";
import { useDispatch, useSelector } from "react-redux";
import { RootType } from "../redux/store";
import { setNewProductToCart } from "../redux/features/products/products-slice";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../hooks/useAppSelector";

interface ProductsData {
  name: string;
  price: number;
  description: string;
}
interface ProductProps {
  productsData: ProductsData[];
  addToCart: (name: string, price: number) => void;
}

const artesanal = [
  {
    name: "Imperador",
    price: 38,
    description:
      "2 hambúrgueres, alface, queijo, molho brothers especial, picles num pão de gergelim",
    initialPrice: 38,
  },
  {
    name: "Rei",
    price: 35,
    description:
      "Nosso delicioso El Bacon porém em dose dupla, pão brioche, 2 blend de 100g, fatias de cheddar cremosa, fatias de bacon em tiras crocantes e molho à sua escolha.",
    initialPrice: 35,
  },
  {
    name: "Rainha",
    price: 34,
    description:
      "Pão brioche selado na chapa, 3 blends de 90g, fatias de queijo cheddar, fatias de bacon e molho à sua escolha.",
    initialPrice: 34,
  },
];
const simpleBurgers = [
  {
    name: "X-Montanha",
    price: 20,
    description:
      "2 Carnes, 2 pães,  2 queijos, 2 presuntos, 2 bacons, 2 calabresas, 2 ovos e molhos",
    initialPrice: 20,
  },
  {
    name: "X-Tudo",
    price: 14,
    description: "Carne, pão, queijo, presunto, bacon, calabresa, ovo e molhos",
    initialPrice: 14,
  },
  {
    name: "X-EggBacon",
    price: 13,
    description: "Carne, pão, queijo, presunto, bacon, ovo e molhos",
    initialPrice: 13,
  },
  {
    name: "X-Salada",
    price: 12,
    description: "Carne, pão, queijo, alface, tomate e cebola roxa",
    initialPrice: 12,
  },
];

export function Products() {
  const { productsCart } = useAppSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function addToCart(name: string, price: number) {
    //Cria um novo produto (adicionando no cart e no state) com os dados que estão sendo passados pelo objeto "productList" e sendo enviados pelo map do mesmo.
    const productData = { name, price, qtd: 1, id: productsCart.length };
    dispatch(setNewProductToCart(productData));
    navigate("/cart");
  }

  return (
    <div>
      <div className="sm:pr-4">
        <h1 className="bg-yellow-500 rounded-lg text-xl p-2 font-bold">
          Burgues Reais
        </h1>
        <Product productsData={artesanal} addToCart={addToCart} />
      </div>

      <div className="mt-6 sm:pr-4">
        <h1 className="bg-yellow-500 rounded-lg text-xl p-2 font-bold">
          Burgues Pebleus
        </h1>
        <Product productsData={simpleBurgers} addToCart={addToCart} />
      </div>
    </div>
  );
}

function Product({ productsData, addToCart }: ProductProps) {
  return (
    <>
      {productsData.map(({ name, price, description }, index) => {
        return (
          <>
            <div
              className="bg-neutral-800 rounded-lg mt-4 py-4 flex justify-between cursor-pointer transition-all hover:bg-neutral-900 hover:border-white"
              key={index}
              onClick={() => addToCart(name, price)}
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
                  <h2 className="text-white text-sm sm:text-md max-w-[200px] sm:max-w-[450px]">
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
      })}
    </>
  );
}
