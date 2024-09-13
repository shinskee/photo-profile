import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "../pages/Layout/Layout"
import Home from "../pages/Home/Home"

function App() {
  const routes = ([{
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/AboutMe',
        element: <Home />
      },
    ]
  }])

  const router = createBrowserRouter(routes, {
    basename: '/photo-profile/'
  })
  return <RouterProvider router={router} />
}

export default App
