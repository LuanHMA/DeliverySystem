import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProductCart } from "../pages/ProductCart";
import { ProductList } from "../pages/ProductList";

export function RouterProvider() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/cart" element={<ProductCart />} />
      </Routes>
    </BrowserRouter>
  );
}
