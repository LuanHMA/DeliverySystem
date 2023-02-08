import { CaretLeft } from "phosphor-react";
import { Link } from "react-router-dom";
import { Container } from "../components/Container";
import { Overview } from "../components/Cart";
import { useAppSelector } from "../hooks/useAppSelector";
import { EmptyCart } from "../components/Cart/EmptyCart";

import { useState } from "react";
export function ProductCart() {
  const ProductsState = useAppSelector((state) => state.productsCart);
  let paddingBottomContainer = ProductsState.length === 0 ? 100 : 50;

  return (
    <Container style={{ paddingBottom: paddingBottomContainer }}>
      <header className="flex items-center ">
        <nav>
          <Link to="/">
            <CaretLeft size={32} weight="fill" color="white" />
          </Link>
        </nav>
        <h1 className="text-white text-2xl ml-4 font-bold">
          Carrinho de produtos
        </h1>
      </header>

      {ProductsState.length === 0 ? <EmptyCart /> : <Overview />}
    </Container>
  );
}
