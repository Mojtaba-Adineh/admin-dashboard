import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/login/Login";
import Navbar from "./components/navbar/Navbar";
import Menu from "./components/menu/Menu";
import Footer from "./components/footer/Footer";
import Users from "./pages/users/Users";
import Products from "./pages/products/Products";
import Home from "./pages/home/Home";
import "./styles/global.scss";
import UserDetail from "./pages/userDetail/UserDetail";
import ProductDetail from "./pages/productDetail/ProductDetail";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();

  const Layout = () => {
    return (
      <div className="main">
        <Navbar />

        <div className="container">
          <div className="menu-container">
            <Menu />
          </div>

          <div className="content-container">
            <QueryClientProvider client={queryClient}>
              <Outlet />
            </QueryClientProvider>
          </div>
        </div>

        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/users",
          element: <Users />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/users/:id",
          element: <UserDetail />,
        },
        {
          path: "/products/:id",
          element: <ProductDetail />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
