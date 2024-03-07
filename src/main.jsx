import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from "./Components/Home/Home";
import Blog from "./Components/Nav/Blog/Blog";
import Offer from "./Components/Nav/Offer/Offer";
import Airlines from "./Components/Nav/Airlines.jsx/Airlines";
import About from "./Components/Nav/About/About";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    children: [
      {
        path: "/blog",
        element:<Blog/>, 
      },
      {
        path: "/offer",
        element:<Offer/>, 
      },
      {
        path: "/airlines",
        element:<Airlines/>
      },
      {
        path: "/about",
        element:<About/>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);