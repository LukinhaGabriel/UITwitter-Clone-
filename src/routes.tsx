import { createBrowserRouter } from "react-router-dom";
import { Default } from "./layouts/Default";
import { Home } from "./pages/Home";
import { Status } from "./pages/Status";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Default />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/status",
        element: <Status />
      },
    ]
  }
]);