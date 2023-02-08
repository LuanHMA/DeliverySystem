import { useAppSelector } from "../hooks/useAppSelector";
import { ProductsCartProps } from "../redux/features/products/products-slice";

export function totProducts(products: ProductsCartProps[]) {
  let totProducts = 0;
  const qtds = products.map((product) => {
    return product;
  });

  console.log(qtds);
}
