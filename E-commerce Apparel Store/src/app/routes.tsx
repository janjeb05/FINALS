import { createBrowserRouter } from "react-router";
import { RootLayout } from "./components/RootLayout";
import { HomePage } from "./components/HomePage";
import { CategoryPage } from "./components/CategoryPage";
import { ProductDetailPage } from "./components/ProductDetailPage";
import { LoginPage } from "./components/LoginPage";
import { RegisterPage } from "./components/RegisterPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: HomePage },
      { path: "login", Component: LoginPage },
      { path: "register", Component: RegisterPage },
      { path: "tees", Component: () => <CategoryPage category="tees" /> },
      { path: "bottoms", Component: () => <CategoryPage category="bottoms" /> },
      { path: "essentials", Component: () => <CategoryPage category="essentials" /> },
      { path: "accessories", Component: () => <CategoryPage category="accessories" /> },
      { path: "outerwear", Component: () => <CategoryPage category="outerwear" /> },
      { path: "product/:id", Component: ProductDetailPage },
    ],
  },
]);
