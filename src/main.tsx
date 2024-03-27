import React from 'react'
import ReactDOM from 'react-dom/client'
import './globals.scss'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLayout from './components/layout/MainLayout/MainLayout.tsx'
import Cart from './pages/Cart/Cart.tsx'
import Catalog from './pages/Catalog/Catalog.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Catalog />
      },
      {
        path: 'cart',
        element: <Cart />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
