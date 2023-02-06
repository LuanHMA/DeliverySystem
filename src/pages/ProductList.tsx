import { Products } from "../components/Products";

export function ProductList() {
  return (
    <div className="p-4 bg-neutral-800 mr-4 rounded-lg ">
      <h1 className="text-white text-3xl font-bold">Nossos Produtos</h1>
      <Products />
    </div>
  );
}
