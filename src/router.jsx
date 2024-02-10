import { createBrowserRouter } from "react-router-dom";
import Home from "./1Home";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
 

]);

export { router };