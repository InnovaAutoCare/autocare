import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './Pages/Home/Home.tsx'
import Integrantes from './Pages/Integrantes/Integrantes.tsx'

const _routes = createBrowserRouter(
  [
    {path: "/",
      element: <Home/>
    },
    {path: "/integrantes",
      element: <Integrantes/>
    }
  ]
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={_routes}/>
  </StrictMode>,
)
