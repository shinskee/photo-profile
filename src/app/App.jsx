import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "../pages/Layout/Layout"
import Home from "../pages/Home/Home"
import Portfolio from "../pages/Portfolio"
import AboutMe from "../pages/AboutMe"
import Services from "../pages/Services"

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
        element: <AboutMe />
      },
      {
        path: '/Portfolio',
        element: <Portfolio />
      },
      {
        path: '/Services',
        element: <Services />
      },
    ]
  }])

  const router = createBrowserRouter(routes, {
    basename: '/photo-profile/'
  })
  return <RouterProvider router={router} />
}

export default App
