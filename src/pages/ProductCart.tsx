import { Overview } from "../components/Overview";

export function ProductCart() {
  return (
    <div className="flex flex-col flex-wrap gap-2 p-4 bg-neutral-800 rounded-lg ">
      <h1 className="text-white text-3xl font-bold mb-2">
        Carrinho de produtos
      </h1>

      <Overview />
    </div>
  );
}
