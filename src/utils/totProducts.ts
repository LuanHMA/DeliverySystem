import { useAppSelector } from "../hooks/useAppSelector";
import { ProductsStateProps } from "../redux/features/products/products-slice";

export function totProducts(products: ProductsStateProps[]) {
  let totProducts = 0;

  products.map((product) => {
    return (totProducts += product.qtd);
  });

  return totProducts;
}
