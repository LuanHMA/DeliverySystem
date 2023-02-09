import { useAppSelector } from "../hooks/useAppSelector";
import { ProductsCartProps } from "../redux/features/products/products-slice";

export function totProducts(products: ProductsCartProps[]) {
  let totProducts = 0;

  products.map((product) => {
    return (totProducts += product.qtd);
  });

  return totProducts;
}
