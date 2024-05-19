import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
import Projeto from './routes/Projetos.jsx'
import Contato from './routes/Contato.jsx'
import Home from './routes/Home.jsx'
import ReactDOM from 'react-dom/client'
import React from 'react'
import App from './App.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    element: <App />,
    children:[
      {
        path:"/",
        element: <Home />
      },
      {
        path: "/projetos",
        element: <Projeto />
      },
      {
        path: "/contato",
        element: <Contato />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
