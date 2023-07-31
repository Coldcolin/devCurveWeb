import Home from "./Components/Home/Home"
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css'
import ErrorPage from "./Components/Error/ErrorPage";
import Layout from "./Components/Layout";
import About from "./Components/about/About";
import Contact from "./Components/contact/Contact";
import Gallery from "./Components/gallery/Galery";

const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home onClick={()=> console.log("clicked")}/>,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
    ],
  },
]);

function App() {
  
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
