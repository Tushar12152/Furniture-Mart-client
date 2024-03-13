import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Routs } from './Router/Routs.jsx'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './Peovider/AuthProvider.jsx'
import { Toaster } from 'react-hot-toast'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'


const queryClient=new QueryClient()


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={Routs}></RouterProvider>
        </QueryClientProvider>       
        <Toaster/>
      </AuthProvider>
  </React.StrictMode>,
)
