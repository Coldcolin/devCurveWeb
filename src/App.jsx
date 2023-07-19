import Home from "./Components/Home/Home"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css'
import ErrorPage from "./Components/Error/ErrorPage";
import Layout from "./Components/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
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
