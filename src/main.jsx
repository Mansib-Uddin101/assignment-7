import { Component, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import MainLayout from './layouts/MainLayout.jsx'
import HomePage from './pages/HomePage.jsx'
import FriendDetails from './components/FriendDetails.jsx'
import ErrorPage from './components/ErrorPage.jsx'
import FriendProvider from './context/FriendContext.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "/details/:id",
        element: <FriendDetails/>
      }
    ],
    errorElement: <ErrorPage/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FriendProvider>
      <RouterProvider router={router} />
    </FriendProvider>
  </StrictMode>,
)
