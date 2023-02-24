import { Link } from "react-router-dom";
import Logo from "../assets/logo.jpg";
import { Container } from "../components/Container";
import { ShoppingCart } from "phosphor-react";
import { ProductsList } from "../components/Product/ProductsList";
import { useAppSelector } from "../hooks/useAppSelector";
import { OverviewHome } from "../components/Cart/OverviewHome";
import { totProducts } from "../utils/totProducts";

export function Home() {
  const { productsState } = useAppSelector((state) => state);
  const activeAnimate = productsState.length == 0 ? null : "animate-bounce";

  return (
    <Container>
      <header className="flex justify-between items-center bg-red-600 p-4 rounded-lg relative">
        <div>
          <img
            src={Logo}
            alt="KingsBurger Logo"
            width={100}
            height={100}
            className="rounded-lg"
          />
          <div className="mt-2">
            <h1 className="text-white text-lg font-bold sm:text-xl ">
              Valhala Burguer
            </h1>
            <h2 className="text-white text-md mb-2 sm:text-lg">
              Hamburgueria artesanal
            </h2>
            <div className="flex items-center gap-x-2 mb-2">
              <span className="bg-red-800 text-white text-sm -ml-1 py-1 px-2 rounded-lg sm:text-md">
                Fechado
              </span>
              <span className="text-white text-sm font-bold sm:text-md ">
                18:00 às 00:00
              </span>
            </div>
            <span className="text-white text-sm sm:text-md ">
              Pedido minímo: <b>R$ 11,00</b>
            </span>
          </div>
        </div>

        <nav className="fixed right-10 bottom-10 2xl:right-[30%] z-20">
          <Link
            to="/cart"
            className="bg-red-600 rounded-full h-16 w-16 flex items-center justify-center relative p-4"
          >
            <ShoppingCart size={50} />
            <span
              className={`flex items-center justify-center absolute top-12 lg:top-12 right-0 text-xl bg-white rounded-full w-8 h-8 lg:w-6 lg:h-6  ${activeAnimate}`}
            >
              {totProducts(productsState)}
            </span>
          </Link>
        </nav>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-division relative mt-10">
        <ProductsList />
        <OverviewHome />
      </div>
    </Container>
  );
}
