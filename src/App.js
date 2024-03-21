import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductDisplay from "./pages/ProductDisplay";
import CartPage from "./pages/CartPage";
import ProductListing from "./pages/ProductListing";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <ProductListing />,
    },
    {
      path: "/product",
      element: <ProductDisplay />,
    },
    {
      path: "/cart",
      element: <CartPage />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
