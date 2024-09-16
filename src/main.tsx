import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './Pages/Home/Home.tsx'
import Integrantes from './Pages/Integrantes/Integrantes.tsx'
import Login from './Pages/Login/Login.tsx'
import Cadastro from './Pages/Cadastro/Cadastro.tsx'

const _routes = createBrowserRouter(
  [
    {path: "/",
      element: <Home/>
    },
    {path: "/integrantes",
      element: <Integrantes/>
    },
    {path: "/login",
      element: <Login/>
    },
    {path: "/cadastro",
      element: <Cadastro/>
    }
  ]
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={_routes}/>
  </StrictMode>,
)
