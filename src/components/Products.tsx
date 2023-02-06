import burgerImg from "../assets/burger.jpg";
import { useDispatch, useSelector } from "react-redux";
import { RootType } from "../redux/store";
import { setNewProductToCart } from "../redux/features/products/products-slice";

const productsList = [
  { name: "X-Tudo", price: 15 },
  { name: "X-EggBacon", price: 13 },
  { name: "X-Salada", price: 12 },
  { name: "X-Montanha", price: 20 },
];

export function Products() {
  const { products } = useSelector((state: RootType) => state);
  const dispatch = useDispatch();

  function addToCart(name: string, price: number) {
    //Cria um novo produto (adicionando no cart e no state) com os dados que estão sendo passados pelo objeto "productList" e sendo enviados pelo map do mesmo.
    const productData = { name, price, qtd: 1, id: products.length };
    dispatch(setNewProductToCart(productData));
  }

  return (
    <div className="grid grid-cols-3 gap-3 mt-4 p-4 overflow-auto max-h-[600px] ">
      {productsList.map(({ name, price }, index) => {
        return (
          <div
            className="bg-neutral-900 max-w-[220px] p-4 rounded-lg flex flex-col items-center "
            key={index}
          >
            <img
              src={burgerImg}
              alt={name}
              style={{ width: "150px", height: "130px", borderRadius: "10px" }}
            />
            <p className="text-white text-lg mt-2">{name}</p>
            <h2 className="text-white text-2xl font-bold">
              R$ {price.toFixed(2)}
            </h2>
            <button
              onClick={() => addToCart(name, price)}
              className="bg-green-600 p-2 mt-2 rounded-lg text-white w-full hover:bg-green-500 transition-colors"
            >
              Comprar
            </button>
          </div>
        );
      })}
    </div>
  );
}
