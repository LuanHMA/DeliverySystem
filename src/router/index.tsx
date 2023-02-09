import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProductCart } from "../pages/ProductCart";
import { Home } from "../pages/Home";

export function RouterProvider() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<ProductCart />} />
      </Routes>
    </BrowserRouter>
  );
}
