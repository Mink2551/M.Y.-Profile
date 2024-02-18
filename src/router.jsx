import { createBrowserRouter } from "react-router-dom";
import Home from "./1About";
import Talent from "./2Talent";
import Experience from "./3Experience";
import Portfolio from "./4Portfolio";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/talent",
    element: <Talent />,
  },
  {
    path: "/experience",
    element: <Experience />,
  },
  {
    path: "/portfolio",
    element: <Portfolio />,
  },
  
 

]);

export { router };