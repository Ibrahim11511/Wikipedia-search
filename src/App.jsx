import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Root from "./Root";
import Home from "./Pages/Home/Home";
import Favorites from "./Pages/Favorites/Favorites";
import ErrorPage from "./ErrorPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/favorites",
        element: <Favorites />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
}

export default App;
