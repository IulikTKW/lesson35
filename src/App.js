import { BrowserRouter, Route, Routes } from "react-router-dom";
import path from "./constants";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import NotFound from "./pages/NotFound";
import NavigationBar from "./pages/NavigationBar";
import ProductPage from "./pages/ProductPage";
import { ProductProvider } from "./context/productContext";
import Cart from "./pages/Cart";
import { CartProvider } from "./context/cartContext";

function App() {
  return (
    <ProductProvider>
      <CartProvider>
        <BrowserRouter>
          <NavigationBar />
          <Routes>
            <Route path={path.homePage} element={<HomePage />} />
            <Route path={path.shopPage} element={<ShopPage />} />
            <Route path={path.product} element={<ProductPage />} />
            <Route path={path.cart} element={<Cart />} />
            <Route path={path.notFound} element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </ProductProvider>
  );
}

export default App;

//1. posibilitatea de a modifica numaru de kg a produselor in cart
//2. suma totala a produselor de afisat in cart
//3. cand adaugam un element in cart, trebuie sa apara un baner pe ecran pe 3 sec cu messaj('item has been added to cart)
