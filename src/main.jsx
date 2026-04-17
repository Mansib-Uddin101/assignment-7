import { Component, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createBrowserRouter, RouterProvider } from 'react-router'
import MainLayout from './layouts/MainLayout.jsx'
import HomePage from './pages/HomePage.jsx'
import FriendDetails from './components/FriendDetails.jsx'
import ErrorPage from './components/ErrorPage.jsx'
import FriendProvider from './context/FriendContext.jsx'
import TimelinePage from './pages/TimelinePage.jsx'
import Statspage from './pages/Statspage.jsx';

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
      },
      {
        path: "/timeline",
        element: <TimelinePage/>
      },
      {
        path: "/stats",
        element: <Statspage/>
      }
    ],
    errorElement: <ErrorPage/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FriendProvider>
      <RouterProvider router={router} />
      <ToastContainer position="bottom-right" autoClose={3000} />
    </FriendProvider>
  </StrictMode>,
)
