import { createBrowserRouter } from "react-router-dom";
import Home from "./1About";
import Talent from "./2Talent";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/talent",
    element: <Talent />,
  },
 

]);

export { router };