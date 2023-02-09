import { CaretLeft } from "phosphor-react";
import { Link } from "react-router-dom";
import { Container } from "../components/Container";
import { Overview } from "../components/Cart/Overview";
import { useAppSelector } from "../hooks/useAppSelector";
import { EmptyCart } from "../components/Cart/EmptyCart";

export function Cart() {
  const { productsState } = useAppSelector((state) => state);
  let paddingBottomContainer = productsState.length === 0 ? 100 : 50;

  return (
    <Container style={{ paddingBottom: paddingBottomContainer }}>
      <header className="flex items-center ">
        <nav>
          <Link to="/">
            <CaretLeft size={32} weight="fill" color="white" />
          </Link>
        </nav>
        <h1 className="text-white text-2xl ml-4 font-bold">Meus Pedidos</h1>
      </header>

      {productsState.length === 0 ? <EmptyCart /> : <Overview />}
    </Container>
  );
}
