import { ProductCart } from "./pages/ProductCart";
import { ProductList } from "./pages/ProductList";

function App() {
  return (
    <div className="w-screen max-w-6xl h-full grid grid-cols-division ">
      <ProductList />
      <ProductCart />
    </div>
  );
}

export default App;
