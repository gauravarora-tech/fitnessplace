import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './Components/AppLayout'
import ErrorPage from './Pages/ErrorPage'
import About from './Pages/About'
import Service from './Pages/Service'
import Contact from './Pages/Contact'
import Home from './Pages/Home'

const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/about',
          element: <About />,
        },
        {
          path: '/services',
          element: <Service />,
        },
        {
          path: '/contact',
          element: <Contact />,
        },
      ]
    }
  ])

  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App