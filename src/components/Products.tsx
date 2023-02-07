import burgerImg from "../assets/burger.jpg";
import { useDispatch, useSelector } from "react-redux";
import { RootType } from "../redux/store";
import { setNewProductToCart } from "../redux/features/products/products-slice";
import { useNavigate } from "react-router-dom";

const productsList = [
  {
    name: "El Big Smash",
    price: 15,
    description:
      "2 hambúrgueres, alface, queijo, molho brothers especial, picles num pão de gergelim",
  },
  {
    name: "El Double Bacon (Smash)",
    price: 13,
    description:
      "Nosso delicioso El Bacon porém em dose dupla, pão brioche, 2 blend de 100g, fatias de cheddar cremosa, fatias de bacon em tiras crocantes e molho à sua escolha.",
  },
  {
    name: "El Triple Bacon (3 carnes smash + Bacon)",
    price: 12,
    description:
      "Pão brioche selado na chapa, 3 blends de 90g, fatias de queijo cheddar, fatias de bacon e molho à sua escolha.",
  },
  { name: "X-Montanha", price: 20, description: "Carne, queijo, tudo" },
  { name: "X-Tudo", price: 15, description: "Carne, queijo, tudo" },
  { name: "X-EggBacon", price: 13, description: "Carne, queijo, tudo" },
  { name: "X-Salada", price: 12, description: "Carne, queijo, tudo" },
  { name: "X-Montanha", price: 20, description: "Carne, queijo, tudo" },
];

export function Products() {
  const { products } = useSelector((state: RootType) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function addToCart(name: string, price: number) {
    //Cria um novo produto (adicionando no cart e no state) com os dados que estão sendo passados pelo objeto "productList" e sendo enviados pelo map do mesmo.
    const productData = { name, price, qtd: 1, id: products.length };
    dispatch(setNewProductToCart(productData));
    navigate("/cart");
  }

  return (
    <div className="mt-6 pr-2">
      {productsList.map(({ name, price, description }, index) => {
        return (
          <>
            <div
              className="bg-neutral-800 rounded-lg mt-4 p-4 flex justify-between cursor-pointer transition-all hover:bg-neutral-900 hover:border-white"
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
                <div className="ml-2">
                  <h1 className="text-white text-md sm:text-lg font-bold">
                    {name}
                  </h1>
                  <h2 className="text-white text-sm sm:text-md max-w-[250px] sm:max-w-[450px]">
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
    </div>
  );
}
