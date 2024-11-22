import { BrowserRouter, Route, Routes } from "react-router-dom";
import path from "./constants";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import NotFound from "./pages/NotFound";
import NavigationBar from "./pages/NavigationBar";
import ProductPage from "./pages/ProductPage";
import { ProductProvider } from "./context/productContext";

function App() {
  return (
    <ProductProvider>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path={path.homePage} element={<HomePage />} />
          <Route path={path.shopPage} element={<ShopPage />} />
          <Route path={path.product} element={<ProductPage />} />
          <Route path={path.notFound} element={<NotFound />} />
        </Routes>
      </BrowserRouter>      
    </ProductProvider>
  );
}

export default App;
