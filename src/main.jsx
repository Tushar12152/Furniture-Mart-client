import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Routs } from './Router/Routs.jsx'
import { RouterProvider } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={Routs}></RouterProvider>
  </React.StrictMode>,
)
