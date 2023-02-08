import { Link } from "react-router-dom";
import Logo from "../assets/logo.jpg";
import { Container } from "../components/Container";
import { ShoppingCart } from "phosphor-react";
import { Products } from "../components/Products";
import { useAppSelector } from "../hooks/useAppSelector";
import { OverviewHome } from "../components/Cart/OverviewHome";
import { totProducts } from "../utils/totProducts";

export function ProductList() {
  const productsState = useAppSelector((state) => state.productsCart);

  const activeAnimate = productsState.length == 0 ? null : "animate-bounce";
  return (
    <Container>
      <header className="flex justify-between items-center bg-red-600 p-4 rounded-lg">
        <div>
          <h1 className="text-white text-xl md:text-2xl font-bold">
            Imperial Burguer
          </h1>
          <h2 className="text-white text-md mb-4 sm:text-lg">
            Hamburgueria artesanal
          </h2>
          <span className="text-white text-sm sm:text-md ">
            Pedido minímo: <b>R$ 12,00</b>
          </span>
        </div>

        <img
          src={Logo}
          alt="KingsBurger Logo"
          width={120}
          height={120}
          className="rounded-lg"
        />
        <nav className="fixed bottom-5 right-10 sm:right-10 md:right-10 lg:right-44 lg:bottom-10 z-20">
          <Link
            to="/cart"
            className="bg-red-600 rounded-full h-16 w-16 flex items-center justify-center relative p-4"
          >
            <ShoppingCart size={50} />
            <span
              className={`flex items-center justify-center absolute top-12 lg:top-12 right-0 text-xl bg-white rounded-full w-8 h-8 lg:w-6 lg:h-6  ${activeAnimate}`}
            >
              {productsState.length}
            </span>
          </Link>
        </nav>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-division relative mt-10">
        <Products />
        <OverviewHome />
      </div>
    </Container>
  );
}
