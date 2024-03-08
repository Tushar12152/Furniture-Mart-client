import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Routs } from './Router/Routs.jsx'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './Peovider/AuthProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AuthProvider>
        <RouterProvider router={Routs}></RouterProvider>
      </AuthProvider>
  </React.StrictMode>,
)
