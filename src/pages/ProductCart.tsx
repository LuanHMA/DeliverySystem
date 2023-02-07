import { CaretLeft } from "phosphor-react";
import { Link } from "react-router-dom";
import { Container } from "../components/Container";
import { Overview } from "../components/Cart";

export function ProductCart() {
  return (
    <Container>
      <header className="flex items-center ">
        <nav>
          <Link to="/">
            <CaretLeft size={32} weight="fill" color="white" />
          </Link>
        </nav>
        <h1 className="text-white text-2xl ml-6 font-bold">
          Carrinho de produtos
        </h1>
      </header>

      <Overview />
    </Container>
  );
}
