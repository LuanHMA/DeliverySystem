import { Link } from "react-router-dom";
import { Container } from "../components/Container";
import { ShoppingCart } from "phosphor-react";
import { Products } from "../components/Products";
import { useAppSelector } from "../hooks/useAppSelector";
import { OverviewHome } from "../components/Cart/OverviewHome";

export function ProductList() {
  const productsState = useAppSelector((state) => state.products);

  const activeAnimate = productsState.length == 0 ? null : "animate-bounce";
  return (
    <Container>
      <header className="flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">
          Bem vindo ao KingBurgers
        </h1>
        <nav className="fixed bottom-5 right-10 sm:right-10 md:right-10 lg:right-32 lg:bottom-10 z-20">
          <Link
            to="/cart"
            className="bg-red-500 rounded-full h-18 w-18 lg:h-16 lg:w-16 flex items-center justify-center relative p-4"
          >
            <ShoppingCart size={50} />
            <span
              className={`flex items-center justify-center absolute top-16 lg:top-12 right-0 text-2xl bg-white rounded-full w-8 h-8 lg:w-6 lg:h-6 lg:-text-xl ${activeAnimate}`}
            >
              {productsState.length}
            </span>
          </Link>
        </nav>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-division relative">
        <Products />
        <OverviewHome />
      </div>
    </Container>
  );
}
