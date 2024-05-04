import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomeRoute } from "./routes";

const router = createBrowserRouter([HomeRoute]);

export default function App() {
  return <RouterProvider router={router} />;
}
